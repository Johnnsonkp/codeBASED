import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App.jsx';
import GitHubOAuth from './components/auth/GitHuboAuth.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import { createRoot } from 'react-dom/client';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// )


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/github/callback" element={<GitHubOAuth />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);