import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';
import React, {Suspense, lazy} from 'react';

import ChallengeProvider from './store/challengeProvider.jsx';
import LoadingOverlay from './components/Common/Loading/Loading.jsx';
// import Nav from './components/Nav/Nav.jsx';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import TopBanner from './components/Nav/TopBanner.jsx';
import UserAccount from './components/userData/UserAccount.jsx';
import UserProvider from './store/userProvider.jsx';

const root = document.getElementById("root");
const App = lazy(() => import('./App.jsx'))
const Nav = lazy(() => import('./components/Nav/Nav.jsx'))
const QuizPage = lazy(() => import('./components/Quiz/QuizPage.jsx'))
const Auth = lazy(() => import('./components/auth/Auth.jsx'))

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
              <Route path="/user-account" element={<UserAccount />} />
              <Route path="/auth/github/callback" element={<Auth/>} /> 
            </Routes>
          </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ChallengeProvider>
    </UserProvider>
   </StrictMode>
);