import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Movie from '../src/components/Movie';
import MovieList from './components/MovieList/MovieList';
import NewMovie from '../src/components/NewMovie';
import EditMovie from './components/EditMovie';
import Socket from './components/Socket';

import './App.css';

function App() {
  return (
  <div className="App"> 
    
    <BrowserRouter>
    <Header />
    <Socket />
    {
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/new" element={<NewMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movie/edit/:id" element={<EditMovie />} />
      </Routes>
    }
    </BrowserRouter>
  </div>
  );
}

export default App;
