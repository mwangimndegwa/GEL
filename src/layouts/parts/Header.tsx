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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
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
        type="button"
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden p-2 rounded-full transition-colors hover:bg-slate-50 text-slate-900 z-[60]"
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Menu size={26} />
      </button>

      {/* Fullscreen Overlay */}
      {isMobileMenuOpen && (
        /* top-level fixed overlay that truly covers the viewport */
        <div className="fixed inset-0 z-[9999] lg:hidden" aria-modal="true" role="dialog">
          {/* Backdrop: semi-opaque black to hide page content */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel: full-screen, solid brand background */}
          <div
            className="relative inset-0 w-full h-full bg-[#B5651D] flex flex-col pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (logo + close) */}
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                {logo.image && (
                  <img src={logo.image} alt={logo.text || 'Logo'} className="h-10 w-auto" />
                )}
                <span className="text-white font-heading font-bold text-lg">{logo.text}</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav links (centered, large) */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-6 px-6">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return item.external || item.href.startsWith('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'w-full text-center font-heading font-black uppercase transition-all duration-200',
                      'text-white text-3xl sm:text-4xl md:text-5xl',
                      'py-2',
                      isActive ? 'opacity-90' : 'opacity-100 hover:opacity-80'
                    )}
                    style={{ maxWidth: 640 }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'w-full text-center font-heading font-black uppercase transition-all duration-200',
                      'text-white text-3xl sm:text-4xl md:text-5xl',
                      'py-2',
                      isActive ? 'opacity-90' : 'opacity-100 hover:opacity-80'
                    )}
                    style={{ maxWidth: 640 }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA / bottom area */}
            <div className="px-6 pb-10">
              {actions}
            </div>
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

            {/* Right: Navigation + Actions */}
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
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'z-50',
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
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden" aria-modal="true" role="dialog">
          {/* Backdrop: fully opaque to block all content */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Panel: full-screen, solid brand background */}
          <div
            className="relative inset-0 w-full h-full bg-[#6B2327] flex flex-col pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (logo + close) */}
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                {logo.image && (
                  <img src={logo.image} alt={logo.text || 'Logo'} className="h-10 w-auto" />
                )}
                <span className="text-white font-heading font-bold text-lg">{logo.text}</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            {/* Nav links (centered, large) */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-6 px-6">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return item.external || item.href.startsWith('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'w-full text-center font-heading font-black uppercase transition-all duration-200',
                      'text-white text-3xl sm:text-4xl md:text-5xl',
                      'py-2',
                      isActive ? 'opacity-90' : 'opacity-100 hover:opacity-80'
                    )}
                    style={{ maxWidth: 640 }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'w-full text-center font-heading font-black uppercase transition-all duration-200',
                      'text-white text-3xl sm:text-4xl md:text-5xl',
                      'py-2',
                      isActive ? 'opacity-90' : 'opacity-100 hover:opacity-80'
                    )}
                    style={{ maxWidth: 640 }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            {/* CTA / bottom area */}
            <div className="px-6 pb-10">
              {actions}
            </div>
          </div>
        </div>
      )}
      {/* Toggle Button (mobile only, not fixed, not duplicated) */}
      {/* This button should only be rendered in the header content for mobile, not here globally */}
    </>
  );
}
