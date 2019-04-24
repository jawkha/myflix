import React, { Component } from 'react';
import { navigate } from '@reach/router';

import AddToFavorites from './../../assets/icons/plus-transparent-50px.svg';
import RemoveFromFavorites from './../../assets/icons/x-mark-50px.svg';
import './MovieCard.css';

class MovieCard extends Component {
  state = {};

  handleClickAddToFavoritesIcon = selectedMovie => {
    this.props.addToFavorites(selectedMovie);
  };

  handleClickRemoveFromFavoritesIcon = selectedMovie => {
    this.props.removeFromFavorites(selectedMovie);
  };

  handleClickPoster = movie => {
    console.log('poster clicked');
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  componentDidMount = () => {
    const { movie } = this.props;
    console.log(this.props.isAlreadyFavorited(movie).length);
    // if (this.props.isAlreadyFavorited(movie).length === 0) {
    //   this.setState({ isFavorite: false });
    // } else {
    //   this.setState({ isFavorite: true });
    // }
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
          onClick={() => this.handleClickPoster(movie)}
        />
        <div className="movie-card-info">
          {!this.state.isFavorite ? (
            <>
              <img
                src={AddToFavorites}
                alt="plus icon"
                className="large-screen-add-to-favorites"
                onClick={() => this.handleClickAddToFavoritesIcon(movie)}
              />
              <span className="tooltiptext">Add to Favorites</span>
            </>
          ) : (
            <>
              <img
                src={RemoveFromFavorites}
                alt="cross icon"
                className="large-screen-add-to-favorites"
                onClick={() => this.handleClickRemoveFromFavoritesIcon(movie)}
              />
              <span className="tooltiptext">Remove from Favorites</span>
            </>
          )}
        </div>
        {!this.state.isFavorite ? (
          <>
            <button
              className="small-screen-add-to-favorites"
              onClick={() => this.handleClickAddToFavoritesIcon(movie)}
            >
              +
            </button>
          </>
        ) : (
          <>
            <img
              src={RemoveFromFavorites}
              alt="cross icon"
              className="small-screen-add-to-favorites"
              onClick={() => this.handleClickRemoveFromFavoritesIcon(movie)}
            />
          </>
        )}
      </div>
    );
  }
}

export default MovieCard;
