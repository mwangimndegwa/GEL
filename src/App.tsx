import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
// import AiroErrorBoundary from '../dev-tools/src/AiroErrorBoundary';
import RootLayout, { RootLayoutConfig } from './layouts/RootLayout';
import { routes } from './routes';
import Spinner from './components/Spinner';

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

/**
 * ScrollToTop component - automatically scrolls to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // change to 'auto' if you want instant jump
    });
  }, [pathname]);

  return null;
}

/**
 * Centralized header configuration for the entire site
 *
 * This configuration is shared across all pages to maintain consistent navigation.
 * Update these values to change the header across the entire application.
 */
const headerConfig: RootLayoutConfig['header'] = {
  logoPosition: 'left',
  navPosition: 'right',
  logo: {
    image: 'https://img1.wsimg.com/isteam/ip/4c7d7889-4f72-4435-bf65-b243583e0204/blob.png',
    text: 'GLOBAL EDUCATED LEADERS', // CHANGE: Set to Uppercase for authority
    href: '/'
  },
  navItems: [
    { href: '/', label: 'HOME' },               // CHANGE: Uppercase
    { href: '/our-work', label: 'OUR WORK' },    // CHANGE: Uppercase
    { href: '/about', label: 'ABOUT US' },       // CHANGE: Uppercase
    { href: '/get-involved', label: 'GET INVOLVED' } // CHANGE: Uppercase
  ],
  sticky: true,
  actions: (
    <a
      href="/get-involved"
      // CHANGE: Increased padding (px-8), made font-black, added tracking-widest, and rounded-full
      className="px-8 py-2.5 rounded-full text-sm font-black tracking-widest uppercase transition-all hover:scale-105 shadow-md"
      style={{ backgroundColor: '#800000', color: '#FFFFFF' }}
    >
      Donate
    </a>
  )
};

/**
 * Centralized footer configuration for the entire site
 *
 * This configuration is shared across all pages to maintain consistent footer.
 * Update these values to change the footer across the entire application.
 */
const footerConfig: RootLayoutConfig['footer'] = {
  variant: 'centered',
  logo: {
    text: 'Global Educated Leaders',
    href: '/',
    image: 'https://img1.wsimg.com/isteam/ip/4c7d7889-4f72-4435-bf65-b243583e0204/blob.png'
  },
  
  // Minimal but strong "Stay connected" block
  newsletter: {
    title: 'Stay connected',
    description:
      'Get leadership stories, program updates, and impact highlights from across the continent.',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe'
  },

  socialLinks: [
    { href: 'https://www.facebook.com/share/1BiceCpEwT/?mibextid=wwXIfr', label: 'Facebook' },
    { href: 'https://www.instagram.com/globaleducatedleaders?igsh=MXBsbW4xNzE5MTR5eQ==', label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/globaleducatedleaders/', label: 'LinkedIn' }
  ],

  bottomLinks: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: 'mailto:info@globaleducatedleaders.org', label: 'Contact', external: true }
  ],
  
  copyright: {
    text: 'Global Educated Leaders',
    showYear: true,
    position: 'center'
  }
};

// Create router with layout wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<SpinnerFallback />}>
        <RootLayout config={{ header: headerConfig, footer: footerConfig }}>
          <ScrollToTop />
          <Outlet />
        </RootLayout>
      </Suspense>
    ),
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
