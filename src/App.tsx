import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './assets/components/Layout';
import { Home } from './assets/pages/Home';
import { About } from './assets/pages/About';
import { Prognose } from './assets/pages/Prognose';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="prognose" element={<Prognose />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
