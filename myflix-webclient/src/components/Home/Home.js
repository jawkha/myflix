import React, { Component } from 'react';

import MovieCard from './../MovieCard/MovieCard';

class Home extends Component {
  state = {
    popularMovies: []
  };

  componentDidMount = () => {
    const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const DISPLAY_POPULAR_MOVIES = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    fetch(DISPLAY_POPULAR_MOVIES)
      .then(response => response.json())
      .then(data => this.setState({ popularMovies: data.results }))
      .catch(err => console.error("couldn't fetch popular movies", err));
  };

  render() {
    return (
      <div className="main">
        <h1>Popular Movies</h1>
        <div className="movies-container">
          {this.state.popularMovies.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
