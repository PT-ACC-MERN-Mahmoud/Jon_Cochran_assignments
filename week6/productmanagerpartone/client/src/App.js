import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main';
import OneProduct from './components/OneProduct';
import Update from './components/UpdateProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<OneProduct />} path="/products/:id" />
        <Route element={<Update/>} path="/products/edit/:id"/>
      </Routes>

      }
      </BrowserRouter>
    </div>
  );
}

export default App;
