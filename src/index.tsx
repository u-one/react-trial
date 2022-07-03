import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Top from './pages/Top'
import Game from './pages/Game'
import Trains from './pages/Trains'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/game" element={<Game />} />
        <Route path="/trains" element={<Trains />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
