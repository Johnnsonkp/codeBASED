import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.jsx';
import GithubOAuth from './components/auth/GithuboAuth.jsx';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/auth/github/callback" element={<GithubOAuth/>} /> 
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
   </StrictMode>
);
