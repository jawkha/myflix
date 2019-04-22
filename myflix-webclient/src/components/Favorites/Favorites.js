import React, { Component } from 'react';
import MovieCard from './../MovieCard/MovieCard';

class Favorites extends Component {
  state = {
    favoriteMovies: [],
    errorMessage: 'There are no movies in your favorites list yet.'
  };

  componentDidMount = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem('movies'));
    if (favoriteMovies && favoriteMovies.length === 0) {
      this.setState({ errorMessage: 'There are no movies in your favorites list yet.' });
    } else {
      this.setState({ favoriteMovies });
    }
  };

  render() {
    return (
      <div className="main">
        <h1>Favorite Movies</h1>
        <div className="movies-container">
          {this.state.favoriteMovies &&
            this.state.favoriteMovies.map(movie => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </div>
      </div>
    );
  }
}

export default Favorites;
