import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

const rootRenderer = createRoot(root);

rootRenderer.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
