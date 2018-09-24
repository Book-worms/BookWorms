import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BrowserRouter, Link } from 'react-router-dom';
import UserDisplay from './userReviewDisplay.jsx';
import ModalReview from './Modal.jsx';
import UserReviewSubmit from './UserReviewSubmit.jsx';
import axios from 'axios';
import Links from './links.jsx';
import Favorites from './favorites.jsx';


export default class MainList extends Component {
  constructor(props) {
    super(props);
    console.log(props.item, 'mainlist.jsx');


    this.state = {
      reviewInput: null,
      showModal: false,
      userReviews: [],
      showUserReview: false,
      showLinks: false,
      favs: [],
      showFavs: false
    };

    this.handleSearchClick = (e) => {
      e.preventDefault();
      // const title = this.props.item.title;
      this.props.handleSearchInput(this.props.item.title);
    };
    this.handleReviewClick = (e) => {
      e.preventDefault();
      this.props.reviewToggle(this.props.item);
    };

    //bind this to showModal, getUserReviews, showLinks, and showFavs methods
    this.showModal = this.showModal.bind(this);
    this.getUserReviews = this.getUserReviews.bind(this);
    this.showLinks = this.showLinks.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }
  //create method to display modal
  showModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  showLinks() {
    this.setState({
      showLinks: !this.state.showLinks
    })
  }

  showFavorites() {
    this.setState({
      showFavs: !this.state.showFavs
    })
  }

  getUserReviews() {
    axios.get('userreviews')
      .then(response => {
        this.setState({
          userReviews: response.data,
          showUserReview: !this.state.showUserReview
        }, () => {})
      })
      .catch(err => {
        console.error(err)
      })
  }

  addToFavorites(e) {
    e.preventDefault();
    const params = {
      title: this.props.item.title,
      author: this.props.item.author,
      image: this.props.item.coverImage,
      description: this.props.item.longDescript
    }
    console.log(params, 'addToFavorites')
    axios.post('/', params)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.error(err)
      })
  }

  getFavorites() {
    axios.get('/favorites')
      .then(response => {
        console.log(response)
        this.setState({
          favs: response.data,
          showFavs: !this.state.showFavs
        }, () => {
          console.log('clicked')
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <ModalReview title={this.props.item.title}
            onClose={this.showModal}
            showModal={this.state.showModal} />
          <Card>
            <div className="book-card">
              <div className="media">
                <div className="media-left">
                  <a href="#" onClick={this.handleSearchClick.bind(this)}>
                    <img className="media-object" src={this.props.item.coverImage} alt="book cover" />
                  </a>
                  <div className="btn-group-vertical" role="group" aria-label="...">
                    <button className="btn-group btn btn-primary btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      BookWorms {' '}<span className="badge">{this.props.item.aggregateRating}</span>
                    </button>
                    <button className="btn-group btn btn-primary btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.addToFavorites}>
                      Add to Favorites
                    </button>
                    <button className="btn-group btn btn-success btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.getFavorites}>
                      Favorites
                    </button>
                    <button className="btn-group btn btn-info btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      Google Books {' '}<span className="badge">{this.props.item.rating}</span>
                    </button>
                    <button className="btn-group btn btn-info btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      Library Things {' '}<span className="badge">{this.props.item.libThingRating}</span>
                    </button>
                    <button className="btn-group btn btn-info btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      GoodReads {' '}<span className="badge">{this.props.item.gReadsRating}</span>
                    </button>
                    <button className="btn-group btn btn-info btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      User Rating {' '}<span className="badge">{this.props.item.userRating}</span>
                    </button>
                    <button className="btn-group btn btn-success btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.showModal}>
                      Write Review
                    </button>
                    <button className="btn-group btn btn-primary btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.getUserReviews}>
                      User Reviews
                    </button>
                    <button className="btn-group btn btn-danger btn-sm"
                      role="group"
                      aria-label="..."
                      onClick={this.handleReviewClick.bind(this)}>
                      Review
                    </button>
                  </div>
                </div>
                <div className="media-body">
                  <div className="col-md-8">
                    <a href="#" onClick={this.handleReviewClick.bind(this)}>
                      <h4 className="media-heading">{this.props.item.title}</h4>
                    </a>
                      <h5>{this.props.item.author}</h5>
                      {this.props.item.longDescript}
                    <div>
                      {this.state.favs.map(fav => {
                        console.log(fav, 'mainlist.jsx 198')
                        return (<Favorites  key={fav.id}
                                            title={fav.title}
                                            author={fav.author}
                                            image={fav.image}
                                            description={fav.description}/>)
                      })}
                      {/* <Favorites  title={this.state.favs}
                                  author={this.props.item.author}
                                  image={this.props.item.coverImage}
                                  onClick={this.showFavorites}
                                  showFavs={this.state.showFavs}/> */}
                    </div>
                    <div>
                      {this.state.userReviews.map(review => {
                        return (
                          <div>
                            <h3>{review.title}</h3>
                            <dl>
                              <dt>
                                Rating: {review.rating}
                              </dt>
                            </dl>
                            <p>{review.reviewText}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="media-right">
                  <div className="row">
                    <div className="col-md-8">
                      <ul className="nav nav-pills">
                        {this.props.openLibLink
                          ? <li role="presentation" className="enabled"><a onClick={() => window.open(this.props.openLibLink, '_blank')}>Open Library</a></li>
                          : <div />}
                      </ul>
                      <Links  ebayViewItemURL={this.props.item.ebayViewItemURL}
                              movieTitle={this.props.item.movieTitle}
                              movieGalleryURL={this.props.item.movieGalleryURL}
                              movieViewItemURL={this.props.item.movieViewItemURL}
                              onClick={this.showLinks}/>
                    </div>
                  </div>
                </div>       
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

