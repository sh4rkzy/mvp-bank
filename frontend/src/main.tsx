import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from '@/app/home/home'
import '@/globals.css'
import { Login } from './app/login/login';
import { SignUp } from './app/login/signup/signup';
import { ThemeProvider } from './components/themes/theme-provider';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={BrowserRouter} />
    </ThemeProvider>
  </StrictMode>,
)
