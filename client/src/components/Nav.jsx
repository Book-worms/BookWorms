import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import MainList from './MainList.jsx';
import UserReviewsList from './UserReviewsList.jsx';
import Search from './Search.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import Logout from '../containers/Logout.jsx';
import Reviews from './Reviews.jsx';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleGenreSelect = (e) => {
      this.props.handleSearchByGenre(e);
    };
    this.handleBookwormsSelect = () => {
      this.props.handleHomeLink();
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div>
                <Link to="/" className="navbar-brand" onClick={this.handleBookwormsSelect.bind(this)}>Bookworms</Link>
                <img alt="Brand" src="https://i.pinimg.com/originals/d0/fb/73/d0fb73f0ab79cfc626ee14efaa475ea0.png" height="35px" width="35px" />
              </div>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <NavDropdown eventKey={3} title="Top Books By Genre" id="basic-nav-dropdown">
                  <MenuItem eventKey="Fantasy" onSelect={this.handleGenreSelect.bind(this)}>Fantasy</MenuItem>
                  <MenuItem eventKey="Science Fiction" onSelect={this.handleGenreSelect.bind(this)}>Science Fiction</MenuItem>
                  <MenuItem eventKey="Mystery" onSelect={this.handleGenreSelect.bind(this)}>Mystery</MenuItem>
                  <MenuItem eventKey="Biography" onSelect={this.handleGenreSelect.bind(this)}>Biography</MenuItem>
                  <MenuItem eventKey="Non Fiction" onSelect={this.handleGenreSelect.bind(this)}>Non Fiction</MenuItem>
                  <MenuItem eventKey="Classics" onSelect={this.handleGenreSelect.bind(this)}>Classics</MenuItem>
                </NavDropdown>
              </ul>
              <form className="navbar-form navbar-left">
                <Search
                  handleSearchInput={this.props.handleSearchInput}
                  handleEbaySearchInput={this.props.handleEbaySearchInput}
                />
              </form>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="">
                    Hi
                  {' '}
                    <b>{this.props.username}</b>
                    , you are logged in
                </Link>

                </li>
                <li><Link to="/logout">Log out</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.reviewToggled
          ? this.props.items.map(item => <Reviews item={item} key={item.title} reviews={this.props.reviews} handleReviewInput={this.props.handleReviewInput} username={this.props.username} />)
          : this.props.items.map(item => <MainList item={item} key={item.title} reviewToggle={this.props.reviewToggle} handleSearchInput={this.props.handleSearchInput} handleEbaySearchInput={this.props.handleEbaySearchInput} openLibLink={this.props.openLibLink} />)}

      </div>
    );
  }
}

export default Nav;
