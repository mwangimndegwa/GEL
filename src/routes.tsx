import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';

// Lazy load components for code splitting (except HomePage for instant loading)
const NotFoundPage = lazy(() => import('./pages/_404'));
const OurWorkPage = lazy(() => import('./pages/our-work'));
const AboutPage = lazy(() => import('./pages/about'));
const GetInvolvedPage = lazy(() => import('./pages/get-involved'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/our-work',
    element: <OurWorkPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/get-involved',
    element: <GetInvolvedPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/our-work' | '/about' | '/get-involved';

export type Params = Record<string, string | undefined>;
