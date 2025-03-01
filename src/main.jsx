import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';
import React, {Suspense, lazy} from 'react';

import Auth from './components/auth/Auth.jsx';
import ChallengeProvider from './store/challengeProvider.jsx';
import LoadingOverlay from './components/Common/Loading/Loading.jsx';
import Nav from './components/Nav/Nav.jsx';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import TopBanner from './components/Nav/TopBanner.jsx';
import UserProvider from './store/userProvider.jsx';

// import GithubOAuth from './components/auth/GithubOAuth';


const root = document.getElementById("root");
// const GithubOAuth = lazy(() => import('./components/auth/GithubOAuth'))
const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(root).render(
  <StrictMode>
    <UserProvider>
      <ChallengeProvider>
      <TopBanner />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Nav />
          <BrowserRouter>
          <Suspense fallback={<LoadingOverlay />}>
            <Routes>
              <Route path="/" element={<Auth/>} /> 
                <Route path="/dashboard" element={<App />} />
                <Route path="/auth/github/callback" element={<Auth/>} /> 
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ChallengeProvider>
    </UserProvider>
   </StrictMode>
);