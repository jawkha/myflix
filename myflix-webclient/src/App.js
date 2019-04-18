import React from 'react';
import { Router } from '@reach/router';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Favorites from './components/Favorites/Favorites';
import MovieDetail from './components/MovieDetail/MovieDetail';
import NotFound404 from './components/NotFound404/NotFound404';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Router>
        <Home path="/" />
        <SearchResults path="/search" />
        <Favorites path="favorites" />
        <MovieDetail path="movie/:movie" />
        <NotFound404 default />
      </Router>
      <Footer />
    </main>
  );
};

export default App;
