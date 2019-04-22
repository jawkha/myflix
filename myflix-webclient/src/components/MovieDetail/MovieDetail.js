import React, { Component } from 'react';

import VideoPlayer from './../VideoPlayer/VideoPlayer';

class MovieDetail extends Component {
  state = {
    loading: true,
    additionalMovieDetails: {}
  };

  componentDidMount = () => {
    const { movie } = this.props.location.state;
    const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const MOVIE_DETAILS = `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`;

    fetch(MOVIE_DETAILS)
      .then(response => response.json())
      .then(data => this.setState({ additionalMovieDetails: data, loading: false }))
      .catch(err => console.error("couldn't fetch the given movie's details", err));
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      const {
        title,
        tagline,
        release_date,
        runtime,
        genres,
        backdrop_path,
        overview
      } = this.state.additionalMovieDetails;

      const release_year = release_date.slice(0, 4);
      return (
        <div className="main">
          <div
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2) ), url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
              backgroundSize: 'cover',
              height: 'auto',
              width: '100%'
            }}
          >
            <div className="movie-detail">
              <h1 className="movie-detail-title">{title}</h1>
              <span className="movie-detail-tagline">{tagline}</span>
              <p className="movie-detail-release-year">{release_year}</p>
              <p className="movie-detail-runtime">{runtime} minutes</p>
              <div className="movie-detail-genres">
                {genres &&
                  genres.map(el => (
                    <span className="movie-detail-genre" key={el.id}>
                      {el.name}
                    </span>
                  ))}
              </div>
              <p className="movie-detail-overview-title">Synopsis</p>
              <p className="movie-detail-overview-text">{overview}</p>
              <button className="add-to-favorites-button">ADD TO FAVORITES</button>
            </div>
            <VideoPlayer />
          </div>
        </div>
      );
    }
  }
}

export default MovieDetail;
