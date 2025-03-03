import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';
import React, {Suspense, lazy, useEffect} from 'react';

import Auth from './components/auth/Auth.jsx';
import ChallengeProvider from './store/challengeProvider.jsx';
import LoadingOverlay from './components/Common/Loading/Loading.jsx';
import Nav from './components/Nav/Nav.jsx';
import QuizPage from './components/Quiz/QuizPage.jsx';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import TopBanner from './components/Nav/TopBanner.jsx';
import UserProvider from './store/userProvider.jsx';

const App = lazy(() => import('./App.jsx'))
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <UserProvider>
      <ChallengeProvider>
      <TopBanner />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Nav />
          <Suspense fallback={<LoadingOverlay />}>
            <Routes>
              <Route path="/" element={<Auth/>} /> 
              <Route path="/dashboard" element={<App />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/auth/github/callback" element={<Auth/>} /> 
            </Routes>
          </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ChallengeProvider>
    </UserProvider>
   </StrictMode>
);