import React, { Component } from 'react';
// import MovieCard from './../MovieCard/MovieCard';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class Favorites extends Component {
  state = {
    favoriteMovies: [],
    errorMessage: 'There are no movies in your favorites list yet.'
  };

  componentDidMount = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem('movies'));
    this.setState({ favoriteMovies });
  };

  render() {
    return <MoviesContainer containerTitle="FAVORITES" moviesData={this.state.favoriteMovies} />;
  }
}

export default Favorites;
