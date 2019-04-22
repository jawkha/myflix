import React, { Component } from 'react';
import { navigate } from '@reach/router';

import AddToFavorites from './../../assets/icons/plus-transparent-50px.svg';

class MovieCard extends Component {
  isAlreadyFavorited = (selectedMovie, favoriteMovies) => {
    return favoriteMovies.filter(favorite => favorite.id === selectedMovie.id);
  };

  handleClickFavoriteIcon = movie => {
    let favoriteMovies = localStorage.getItem('movies')
      ? JSON.parse(localStorage.getItem('movies'))
      : [];
    if (this.isAlreadyFavorited(movie, favoriteMovies).length === 0) {
      favoriteMovies = [movie, ...favoriteMovies];
      localStorage.setItem('movies', JSON.stringify(favoriteMovies));
    }
  };

  handleClickPoster = movie => {
    console.log('poster clicked');
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-poster"
          onClick={() => this.handleClickPoster(movie)}
        />
        <div className="movie-info">
          <p>{movie.title}</p>
          <img
            src={AddToFavorites}
            alt="plus icon"
            className="add-to-favorites"
            onClick={() => this.handleClickFavoriteIcon(movie)}
          />
          <span className="tooltiptext">Add to Favorites</span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
