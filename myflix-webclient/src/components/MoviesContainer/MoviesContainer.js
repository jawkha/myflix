import React, { Component } from 'react';
import MovieCard from './../MovieCard/MovieCard';
import './MoviesContainer.css';

// const MoviesContainer = ({ moviesData }) => {
class MoviesContainer extends Component {
  renderContainerTitle = title => {
    switch (title) {
      case 'POPULAR':
        return <h1>Popular Movies</h1>;

      case 'FAVORITES':
        return <h1>Favorite Movies</h1>;

      case 'SEARCH':
        return <h1>{`Search Results for "${this.props.searchTerm}"`}</h1>;

      default:
        return null;
    }
  };

  renderErrorMessage = () => {
    const { moviesData, containerTitle } = this.props;
    if (containerTitle === 'FAVORITES' && (!moviesData || moviesData.length === 0)) {
      return <h2>There are no movies in your favorites list yet.</h2>;
    }
  };

  render() {
    const { moviesData, containerTitle } = this.props;
    return (
      <div className="main">
        {this.renderContainerTitle(containerTitle)}
        {this.renderErrorMessage()}
        <div className="movies-container">
          {moviesData &&
            moviesData.map(movie => {
              return (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  addToFavorites={this.props.addToFavorites}
                  removeFromFavorites={this.props.removeFromFavorites}
                  isAlreadyFavorited={this.props.isAlreadyFavorited}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default MoviesContainer;
