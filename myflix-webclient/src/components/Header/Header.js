import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';

import LogoLarge from './../../assets/logo-large.svg';
import './Header.css';

class Header extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  };

  handleInputChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const SEARCH_MOVIE = `${BASE_URL}/search/movie?query=${searchTerm}&api_key=${API_KEY}`;

    searchTerm &&
      fetch(SEARCH_MOVIE)
        .then(response => response.json())
        .then(data => this.setState({ searchResults: data.results }))
        .then(() =>
          navigate('/search', { state: { searchTerm, searchResults: this.state.searchResults } })
        )
        .then(() => this.setState({ searchTerm: '' }))
        .catch(err => console.error('an error occurred while searching', err));
  };

  render() {
    return (
      <header className="app-header">
        <Link to="/">
          {/* <img
            srcSet={`${LogoSmall} 150w, ${LogoLarge} 800w`}
            sizes="(max-width: 480px) 50px, (min-width: 800px) 300px"
            alt="logo"
            
          /> */}
          {/* <picture>
            <source media="(max-width: 500px)" srcSet={LogoSmall} />
            <img src={LogoLarge} type="image/svg+xml" alt="logo" />
          </picture> */}
          <img src={LogoLarge} alt="logo" className="app-logo" />
        </Link>
        <Link to="/favorites">Favorites</Link>
        <form>
          <input type="text" value={this.state.searchTerm} onChange={this.handleInputChange} />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  }
}

export default Header;
