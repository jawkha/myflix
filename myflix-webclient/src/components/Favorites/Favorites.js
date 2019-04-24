import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class Favorites extends Component {
  state = {
    favoriteMovies: []
  };

  componentDidMount = () => {
    let favoriteMovies = localStorage.getItem('movies')
      ? JSON.parse(localStorage.getItem('movies'))
      : [];
    this.setState({ favoriteMovies });
  };

  addToFavorites = selectedMovie => {
    let { favoriteMovies } = this.state;
    if (this.isAlreadyFavorited(selectedMovie).length === 0) {
      favoriteMovies = [selectedMovie, ...favoriteMovies];
      localStorage.setItem('movies', JSON.stringify(favoriteMovies));
      this.setState({ favoriteMovies });
    }
  };

  removeFromFavorites = selectedMovie => {
    let { favoriteMovies } = this.state;
    favoriteMovies = favoriteMovies.filter(favorite => favorite.id !== selectedMovie.id);
    localStorage.setItem('movies', JSON.stringify(favoriteMovies));
    this.setState({ favoriteMovies });
  };

  isAlreadyFavorited = selectedMovie => {
    let { favoriteMovies } = this.state;
    return favoriteMovies.filter(favorite => favorite.id === selectedMovie.id);
  };

  render() {
    return (
      <MoviesContainer
        containerTitle="FAVORITES"
        moviesData={this.state.favoriteMovies}
        addToFavorites={this.addToFavorites}
        removeFromFavorites={this.removeFromFavorites}
        isAlreadyFavorited={this.isAlreadyFavorited}
      />
    );
  }
}

export default Favorites;
