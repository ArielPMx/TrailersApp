import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import System from '../components/System';
import Table from '../components/Table';
import Gallery from '../components/Gallery';


function Home() {

  return (
      <Routes>
          <Route path="/Trailer/system" element={<System />} />
          <Route path="/Trailer/Gallery" element={<Gallery />} />
          <Route path="/Trailer/chars" element={<Table />} />
      </Routes>
  );
}

export default Home;
