

import { Route, Routes } from 'react-router-dom';

import RootLayout from './RootLayout';
import React from 'react';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='detail/:id' element={<DetailPage />} />
        </Route>


      </Routes>

    </>
  )
}

export default App;
