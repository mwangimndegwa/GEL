import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export interface HeaderConfig {
  variant?: 'default' | 'centered' | 'split';
  logoPosition?: 'left' | 'center' | 'right';
  navPosition?: 'left' | 'center' | 'right';
  sticky?: boolean;
  transparent?: boolean;
  blur?: boolean;
  border?: boolean;
  mobileBehavior?: 'hamburger' | 'bottom-bar' | 'slide-down';
  logo?: {
    text?: string;
    image?: string;
    href?: string;
    className?: string;
  };
  navItems?: Array<{
    href: string;
    label: string;
    external?: boolean;
  }>;
  actions?: React.ReactNode;
}

interface HeaderPatternProps {
  config?: HeaderConfig;
  className?: string;
}

export default function HeaderPattern({ config = {}, className }: HeaderPatternProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // dynamic header/menu refs + computed top value
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuTopPx, setMenuTopPx] = useState<number>(80); // fallback

  const {
    variant = 'default',
    logoPosition = 'left',
    navPosition = 'right',
    sticky = true,
    transparent = false,
    blur = true,
    mobileBehavior = 'hamburger',
    logo = { text: 'App', href: '/' },
    navItems = [
      { href: '/about', label: 'About' },
      { href: '/our-work', label: 'Our Work' },
      { href: '/get-involved', label: 'Get Involved' },
    ],
    actions
  } = config;

  // compute header height so mobile menu sits just below the header/logo
  useEffect(() => {
    function updateTop() {
      const el = headerRef.current;
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      setMenuTopPx(h);
    }

    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, []);

  // lock body scroll while menu is open; close on outside click or Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    }
    function onDocClick(e: MouseEvent) {
      if (!isMobileMenuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onDocClick);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDocClick);
    };
  }, [isMobileMenuOpen]);

  const renderLogo = () => (
    <div className="flex items-center gap-2 md:gap-4">
      {logo.image && (
        <Link to={logo.href || '/'} className="flex-shrink-0">
          <img
            src={logo.image}
            alt={logo.text || 'Logo'}
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>
      )}
      {logo.text && (
        <Link
          to={logo.href || '/'}
          className={cn(
            "text-base md:text-lg lg:text-2xl font-bold hover:opacity-80 transition-opacity",
            logo.className
          )}
          style={{ color: '#003366' }}
        >
          <span className="text-3xl md:text-4xl">G</span>lobal <span className="text-3xl md:text-4xl">E</span>ducated <span className="text-3xl md:text-4xl">L</span>eaders
        </Link>
      )}
    </div>
  );

  const renderNav = () => (
    <nav className={cn(
      "flex gap-8 lg:gap-16",
      mobileBehavior === 'hamburger' && "hidden lg:flex"
    )}>
      {navItems.map((item) => (
        item.external || item.href.startsWith('#') ? (
          <a
            key={item.href}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={cn(
              "text-lg font-bold uppercase whitespace-nowrap transition-all hover:underline hover:text-black/80",
              "tracking-wider"
            )}
            style={{ color: '#000000', letterSpacing: '0.05em' }}
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "text-lg font-bold uppercase whitespace-nowrap transition-all hover:underline hover:text-black/80",
              "tracking-wider",
              location.pathname === item.href ? 'underline' : '',
              item.label === 'Get Involved' ? 'ml-auto' : ''
            )}
            style={{ color: '#000000', letterSpacing: '0.05em' }}
          >
            {item.label}
          </Link>
        )
      ))}
    </nav>
  );

  // ensure you have these imports at top:
// import { Menu, X, ChevronRight } from 'lucide-react';
// and existing: useState, useEffect, useRef, Link, useLocation, cn

const renderMobileMenu = () => {
  if (mobileBehavior !== 'hamburger') return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsMobileMenuOpen(prev => {
            const next = !prev;
            // debug log to confirm toggle
            // eslint-disable-next-line no-console
            console.log('mobile menu toggled ->', next);
            return next;
          });
        }}
        className="p-2 hover:bg-slate-50 rounded-full transition-colors lg:hidden lg:hidden flex items-center justify-center text-slate-900"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          // fixed so it sits on top; very high z-index to avoid being behind anything
          className="fixed left-0 right-0 z-[9999] bg-white lg:hidden border-t border-slate-100 shadow-2xl"
          style={{
            top: menuTopPx, // computed from headerRef
            maxHeight: `calc(100vh - ${menuTopPx}px)`,
            overflowY: 'auto'
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  item.external || item.href.startsWith('#') ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block w-full py-4 px-3 rounded-md transition-colors',
                        isActive ? 'bg-slate-50 text-[#800000]' : 'hover:bg-slate-50 text-slate-900'
                      )}
                    >
                      <span className="font-semibold uppercase tracking-wider text-sm">{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between w-full py-4 px-3 rounded-md transition-colors',
                        isActive ? 'bg-slate-50 text-[#800000]' : 'hover:bg-slate-50 text-slate-900'
                      )}
                    >
                      <span className="font-semibold uppercase tracking-wider text-sm">{item.label}</span>
                      <ChevronRight size={18} className="text-slate-300" />
                    </Link>
                  )
                );
              })}

              {/* actions (donate etc) */}
              {actions && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="w-full max-w-md mx-auto">
                    {actions}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};



  const getHeaderContent = () => {
    switch (variant) {
      case 'centered':
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full md:w-auto">
              {renderLogo()}
              {renderMobileMenu()}
            </div>
            {renderNav()}
          </div>
        );

      case 'split':
        return (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {renderLogo()}
              {navPosition === 'left' && renderNav()}
            </div>
            <div className="flex items-center gap-4">
              {navPosition === 'right' && renderNav()}
              {actions}
              {renderMobileMenu()}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex h-20 md:h-20 items-center justify-between w-full pt-4 pb-6 md:pt-0 md:pb-0">
            {/* Left: Logo - Fixed width to prevent overlap */}
            <div className="flex-shrink-0 max-w-[70%] md:max-w-none">
              {logoPosition === 'left' && renderLogo()}
            </div>

            {/* Spacer to push everything right */}
            <div className="flex-1" />

            {/* Right: Navigation + Actions + Mobile Menu */}
            <div className="flex items-center gap-8">
              {/* Navigation - hidden on mobile, shown on desktop */}
              {navPosition === 'right' && (
                <nav className="hidden lg:flex items-center gap-8">
                  {renderNav()}
                </nav>
              )}

              {/* Center navigation option */}
              {navPosition === 'center' && (
                <nav className="hidden lg:flex items-center gap-8">
                  {renderNav()}
                </nav>
              )}

              {/* Actions (Donate button) */}
              {actions && (
                <div className="hidden lg:flex items-center flex-shrink-0">
                  {actions}
                </div>
              )}

              {/* Mobile Menu */}
              {renderMobileMenu()}
            </div>
          </div>
        );
    }
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'z-50 overflow-x-hidden',
        sticky && 'sticky top-0',
        !sticky && 'relative',
        transparent
          ? 'bg-transparent'
          : 'bg-gradient-to-b from-background via-background via-background/80 to-transparent pb-4 md:pb-8',
        blur && 'backdrop-blur-sm',
        className
      )}
    >
      <div className="container mx-auto px-2 md:px-4 pt-2 md:pt-4 max-w-full">
        {getHeaderContent()}
      </div>
    </header>
  );
}
