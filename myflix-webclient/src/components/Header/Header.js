import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';

import LogoSmall from './../../assets/logos/logo-small.svg';
import LogoLarge from './../../assets/logos/logo-large.svg';
// import HamburgerMenuIcon from './../../assets/icons/hamburger-menu-50px.svg';
// import CloseHamburgerMenuIcon from './../../assets/icons/x-mark-50px.svg';
import SearchIcon from './../../assets/icons/search-32px.svg';
import './Header.css';

class Header extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    searchMode: false
  };

  handleSearchIconClick = () => {
    this.setState({ searchMode: true });
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
        .then(() => this.setState({ searchTerm: '', searchMode: false }))
        .catch(err => console.error('an error occurred while searching', err));
  };

  render() {
    return (
      <header className="app-header">
        <nav className="nav-small">
          <Link to="/" onClick={() => this.setState({ searchMode: false })}>
            <img src={LogoSmall} alt="logo" className="logo-small" />
          </Link>
          {!this.state.searchMode && <Link to="/favorites">My Favorites</Link>}
          {!this.state.searchMode && (
            <img
              src={SearchIcon}
              alt="search icon"
              className="search-icon"
              onClick={this.handleSearchIconClick}
            />
          )}
          {this.state.searchMode && (
            <form onSubmit={this.handleSubmit} className="nav-small-search-form">
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                className="nav-small-search-form-input"
              />
              <button type="submit" className="nav-small-search-form-button">
                Search
              </button>
            </form>
          )}
        </nav>
        <nav className="nav-large">
          <Link to="/">
            <img src={LogoLarge} alt="logo" className="logo-large" />
          </Link>
          <Link to="/favorites">Favorites</Link>
          <form className="nav-large-search-form">
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
              className="nav-large-search-form-input"
            />
            <button type="submit" className="nav-large-search-form-button">
              Search
            </button>
          </form>
        </nav>
      </header>
    );
  }
}

export default Header;
