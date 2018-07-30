import React from 'react';

const UserReviewsList = props => (

  <div className="container-fluid">
    <div className="row">
      <div className="media">
        <div className="media-left">
          <div className="btn-group-vertical" role="group" aria-label="...">
            <button type="button" className="btn-group btn btn-info btn-sm" role="group" aria-label="...">
              User Rating <span className="badge">{props.review.reviewRating}</span>
            </button>
          </div>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.review.user}</h4>
          {props.review.bookReview}
        </div>
      </div>
    </div>
  </div>

);

export default UserReviewsList;