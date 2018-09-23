import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BrowserRouter, Link } from 'react-router-dom';
import UserDisplay from './userReviewDisplay.jsx';
import ModalReview from './Modal.jsx';
import UserReviewSubmit from './UserReviewSubmit.jsx';
import axios from 'axios';
import Links from './links.jsx';


export default class MainList extends Component {
  constructor(props) {
    super(props);
    // console.log(props.item.ebayTitle, 'mainlist.jsx');


    this.state = {
      reviewInput: null,
      showModal: false,
      userReviews: [],
      showUserReview: false,
      showLinks: false
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

    //function to link to userReviewSubmit form
    // this.linktoUserReview = (e) => {
    //   e.preventDefault();
    //   this.props.history('/UserReviewSubmit');
    // };
    //bind this to showModal method
    this.showModal = this.showModal.bind(this);
    this.getUserReviews = this.getUserReviews.bind(this);
    this.showLinks = this.showLinks.bind(this);
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
                    {this.props.item.longDescript}
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

