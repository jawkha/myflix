import React, { Component } from 'react';

import MovieCard from './../MovieCard/MovieCard';

class SearchResults extends Component {
  render() {
    const { searchTerm, searchResults } = this.props.location.state;
    return (
      <div className="main">
        <h1>{`Search Results for "${searchTerm}"`}</h1>
        <div className="movies-container">
          {searchResults.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchResults;
