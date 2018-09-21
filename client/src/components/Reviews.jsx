import React from 'react';
import UserReviewsList from './UserReviewsList.jsx';
import CriticsReviewsList from './CriticsReviewsList.jsx';
import UserReviewSubmit from './UserReviewSubmit.jsx';

const Rating = require('react-rating');

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starValue: 0,
      value: '',
    };
    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };

    this.handleInputChange = (value) => {
      this.setState({ starValue: value });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();

      // const item = this.props.item;
      const { item } = this.props;
      const { state } = this.state;

      const rating = {
        title: item.title,
        rating: state.starValue,
      };

      const review = {
        title: item.title,
        username: item.username,
        reviewText: state.value,
        reviewRating: state.starValue,
      };
      item.handleReviewInput(review, rating, item);
      this.setState({ value: '' });
    };
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={this.props.item.coverImage} alt="book cover" ></img>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{this.props.item.title}</h4>
                {this.props.item.pt}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)} id="exampleFormControlTextarea1" rows="3" placeholder="Add your review" aria-describedby="basic-addon2"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} >Submit</button>
            <div className="media">
              <div className="media-right">
                <Rating {...this.props} initialRating={this.state.starValue}
                  onChange={this.handleInputChange}
                // emptySymbol={<img src="../../../images/star-empty.png" className="icon" />}
                // fullSymbol={<img src="../../../images/star-full.png" className="icon" />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: '20px' }}>
          <div className="col-md-6">
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
              <div className="btn-group-vertical" role="group" aria-label="...">
                <button type="button" className="btn-group btn btn-primary btn-lg" role="group" aria-label="...">
                  Composite Critic Rating <span className="badge">{this.props.item.aggregateRating}</span>
                </button>
              </div>
            </div>
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
              <h4 className="media-heading">Critics Reviews</h4>
              <CriticsReviewsList item={this.props.item} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
              <button type="button" className="btn-group btn btn-info btn-lg" role="group" aria-label="...">
                Composite User Rating <span className="badge">{this.props.item.userRating}</span>
              </button>

            </div>
            <div className="container-fluid" style={{ paddingTop: '20px' }}>
              <h4 className="media-heading">User Reviews</h4>
              {this.props.reviews.map(review => <UserReviewsList review={review} key={review.user} />)}

            </div>
            <div className="container-fluid" style={{paddingTop: '20px' }}>
              <h5 className="media-heading">Write Review</h5>
              <UserReviewSubmit onClick={this.redirectToUserSubmission}>Write Review</UserReviewSubmit>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Reviews;
