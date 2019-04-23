import React, { Component } from 'react';

// import MovieCard from './../MovieCard/MovieCard';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

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
    return <MoviesContainer containerTitle="POPULAR" moviesData={this.state.popularMovies} />;
  }
}

export default Home;
