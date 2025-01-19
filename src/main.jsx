import './index.css'

import { BrowserRouter, Route, Routes, useParams } from 'react-router';

import App from './App.jsx';
import GitHubOAuth from './components/auth/GitHuboAuth.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import { createRoot } from 'react-dom/client';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/github/callback" element={<GitHubOAuth/>} /> 
      </Routes>
    </BrowserRouter>
   </StrictMode>
);
