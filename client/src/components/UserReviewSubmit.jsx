import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class UserReviewSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glyph: 'star-empty'
    }
  }
  render () {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <form role="form">
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">2</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">3</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">4</label>
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">5</label>
                  {/* <Glyphicon glyph="star-empty" />
                  <Glyphicon glyph="star-empty" />
                  <Glyphicon glyph="star-empty" />
                  <Glyphicon glyph="star-empty" />
                  <Glyphicon glyph="star-empty" /> */}
                </div>
                {/* <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label className="form-check-label" for="inlineCheckbox1">1</label></div> */}
                <input type="text" className="form-control" id="customerReview" placeholder="Title"/>
                <textarea type="text" className="form-control" id="customerReview" placeholder="Write Review...."/>
                <button type="button" className="btn btn-success">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
