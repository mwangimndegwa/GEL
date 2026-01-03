import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export interface FooterConfig {
  variant?: 'simple' | 'columns' | 'centered' | 'detailed';
  copyright?: {
    text?: string;
    showYear?: boolean;
    position?: 'left' | 'center' | 'right';
  };
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  description?: string;
  quote?: {
    text: string;
    attribution?: string;
  };
  logo?: {
    text?: string;
    href?: string;
    className?: string;
    image?: string;
  };
  bottomLinks?: FooterLink[];
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  };
  background?: 'default' | 'muted' | 'dark';
  border?: boolean;
}

interface FooterPatternProps {
  config?: FooterConfig;
  className?: string;
}

export default function FooterPattern({ config = {}, className }: FooterPatternProps) {
  const {
    variant = 'detailed',
    copyright = {
      text: 'App',
      showYear: true,
      position: 'center'
    },
    sections = [],
    socialLinks = [],
    description,
    quote,
    logo,
    bottomLinks = [],
    newsletter,
    background = 'default',
    border = true
  } = config;

  const copyrightText = `© ${copyright.showYear ? new Date().getFullYear() + ' ' : ''}${copyright.text}. All rights reserved.`;

  const renderSimpleFooter = () => (
    <div className={cn(
      "text-sm text-black",
      copyright.position === 'center' && "text-center",
      copyright.position === 'left' && "text-left",
      copyright.position === 'right' && "text-right"
    )}>
      {copyrightText}
    </div>
  );

  const renderCenteredFooter = () => (
  <div className="flex flex-col items-center gap-8 text-center">
  {/* Logo in circular "globe" */}
  {logo && (
    <Link
      to={logo.href || '/'}
      className={cn("inline-flex items-center justify-center", logo.className)}
    >
      <div
        className="flex items-center justify-center w-[4.75rem] h-[4.75rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.25)] border border-white/40"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, #D8F2DD 0%, #FAF7F0 40%, transparent 70%),
            radial-gradient(circle at 25% 15%, #FFFFFF 0%, #FAF7F0 28%, #D5E6F7 55%, #F2D6B4 78%, #B5651D 88%, #003366 100%)
          `,
        }}
      >


        {logo.image ? (
          <img
            src={logo.image}
            alt={logo.text || 'Global Educated Leaders'}
            className="w-[3.6rem] h-[3.6rem] md:w-[4.3rem] md:h-[4.3rem] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] animate-spin"
            style={{
              animationDuration: '18s',
              animationTimingFunction: 'linear',
            }}
          />
        ) : (
          <span className="text-xl md:text-2xl font-bold text-[#003366] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] animate-spin"
            style={{
              animationDuration: '18s',
              animationTimingFunction: 'linear',
            }}
          >
            {logo.text}
          </span>
        )}
      </div>
    </Link>
  )}

    {/* Newsletter – Name + Email, engaging copy */}
    {newsletter && (
      <div className="max-w-md w-full space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          {newsletter.title || 'Stay connected'}
        </h3>
        <p className="font-body text-sm text-gray-700">
          {newsletter.description ||
            'Be the first to hear leadership stories, program updates, and opportunities to shape communities across Africa.'}
        </p>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Your name"
            className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white font-body"
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={newsletter.placeholder || 'Your email address'}
              className="flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-white font-body"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-[#003366] text-white rounded-md hover:bg-[#002244] transition-colors font-body whitespace-nowrap"
            >
              {newsletter.buttonText || 'Join the newsletter'}
            </button>
          </div>
        </form>
      </div>
    )}

    {/* Social links – above legal links */}
    {socialLinks.length > 0 && (
      <div className="max-w-4xl mx-auto text-center pb-1 sm:pb-2 border-b border-slate-300/40">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {socialLinks
            .filter(social => !/twitter/i.test(social.label))
            .map((social, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <React.Fragment key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-gray-600 hover:text-blue-800 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon || social.label}
                  </a>
                  {!isLast && <span className="mx-2 text-gray-400 select-none">|</span>}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    )}

    {/* Legal / utility links – privacy, terms, contact */}
    {bottomLinks.length > 0 && (
      <nav className="pt-0 sm:pt-0.5 text-center max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-2">
        {bottomLinks.map((link, idx) => {
          const isLast = idx === bottomLinks.length - 1;
          const linkNode = link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-gray-600 hover:text-[#003366] transition-colors underline underline-offset-4 decoration-2"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-sm text-gray-600 hover:text-[#003366] transition-colors underline underline-offset-4 decoration-2"
            >
              {link.label}
            </Link>
          );
          return (
            <React.Fragment key={link.href}>
              {linkNode}
              {!isLast && <span className="mx-2 text-gray-400 select-none">|</span>}
            </React.Fragment>
          );
        })}
      </nav>
    )}
  </div>
);


  const getFooterContent = () => {
    switch (variant) {
      case 'centered':
        return renderCenteredFooter();
      case 'columns':
        return renderColumnsFooter();
      case 'detailed':
        return renderDetailedFooter();
      default:
        return renderSimpleFooter();
    }
  };

    return (
    <footer
      className={cn(
        "mt-auto bg-[#FAF7F0]",
        border && "border-t border-gray-300/40",
        className
      )}
    >
      {/* Top part of the footer (light background) */}
      <div className="container mx-auto px-6 md:px-10 pt-16 pb-10">
        {getFooterContent()}
      </div>

      {/* Bottom bar – slightly darker shade of the footer background */}
      <div className="bg-gradient-to-b from-[#FAF7F0] via-[#E4DCC9] to-[#D1C3A8]">
        <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-center text-center text-xs md:text-sm text-[#3A2A16]">
          <span className="font-body">
            {copyrightText}
          </span>
        </div>
      </div>
    </footer>
  );
}
