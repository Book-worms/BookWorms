import React, { Component } from 'react';
import axios from 'axios';
import UserDisplay from './userReviewDisplay.jsx';
import ReactStars from 'react-stars';

export default class UserReviewSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      bookTitle: this.props.title,
      reviewText: '',
      rating: 0,
      userReview: []
    }
    this.updateReviewText = this.updateReviewText.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }
  
  handleReviewSubmit(e) {
    e.preventDefault();
    //create object to store information for review
    const params = {
      title: this.state.title,
      bookTitle: this.state.bookTitle,
      reviewText: this.state.reviewText,
      rating: this.state.rating
    }
    
    console.log(params);
    
    axios.post('/userReviewSubmit', params)
    .then(response => {
      console.log('axios post request from UserReviewSubmit.jsx: ', response);
    })
    .catch(err => {
      console.log('error message from UserReviewSubmit.jsx: ', err);
    })
  }
  
  updateTitle(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    }, () => {})
  }  
  
  updateReviewText(e) {
    e.preventDefault();
    this.setState({
      reviewText: e.target.value
    }, () => {})
  }
  
  updateRating(nextValue, prevValue, name) {
    console.log(nextValue)
    // nextValue.preventDefault();
    this.setState({
      rating: nextValue
    }, () => {
      console.log(this.state.rating)
    })
  };

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <form role="form" onSubmit={this.handleReviewSubmit}>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <ReactStars
                    count={5}
                    onChange={this.updateRating}
                    size={18}
                    half={true}
                    value={this.state.rating}
                    color2={'#ffd700'} />
                </div>
                <div>
                <input  type="text" 
                        className="form-control" 
                        placeholder="Title"
                        style={{width: '400px'}}
                        onChange={this.updateTitle}/>
                  <textarea type="text" 
                            className="form-control" 
                            onChange={this.updateReviewText}
                            placeholder="Write Review...."
                            style={{width: '400px'}}/>
                  <button type="submit" 
                          className="btn btn-success"
                          
                          >Submit Review</button>
                </div>
              </div>
            </form>
          </div>
        </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                {this.state.userReview.map(reviewPart => {
                  return (<div><h1>{reviewPart.title}</h1>
                          <h2>{reviewPart.bookTitle}</h2>
                          <h3>{reviewPart.reviewText}</h3>
                          <h4>{reviewPart.rating}</h4></div>
                      )
                })}
              </div>
            </div>
          </div>
        </div>
    )
  }
}