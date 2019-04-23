import React, { Component } from 'react';

// import MovieCard from './../MovieCard/MovieCard';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class SearchResults extends Component {
  render() {
    const { searchTerm, searchResults } = this.props.location.state;
    return (
      <MoviesContainer containerTitle="SEARCH" searchTerm={searchTerm} moviesData={searchResults} />
    );
  }
}

export default SearchResults;
