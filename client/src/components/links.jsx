import React, { Component } from 'react';

export default class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="links">
        <h3>{'Link to Buy'}</h3>
          <a href={this.props.ebayViewItemURL} >
            <div>{this.props.ebayViewItemURL}</div>
          </a>
        <h3>{'Suggested Item'}</h3>
          <div>{this.props.movieTitle}</div>
          <img src={this.props.movieGalleryURL}/>
          <a href={this.props.movieViewItemURL}>
            <div>{this.props.movieViewItemURL}</div>
          </a>
      </div>
    ) 
  }
}