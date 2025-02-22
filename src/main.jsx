import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.jsx';
import ChallengeProvider from './store/challengeProvider.jsx';
import GithubOAuth from './components/auth/GithubOAuth';
import Nav from './components/Nav/Nav.jsx';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import TopBanner from './components/Nav/TopBanner.jsx';
import UserProvider from './store/userProvider.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <UserProvider>
      <ChallengeProvider>
      <TopBanner />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Nav />
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<GithubOAuth/>} /> 
              <Route path="/dashboard" element={<App />} />
              <Route path="/auth/github/callback" element={<GithubOAuth/>} /> 
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ChallengeProvider>
    </UserProvider>
   </StrictMode>
);