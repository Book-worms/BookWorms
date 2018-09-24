import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    // this.state = {
    //   favs: [{title: this.props.title, author: this.props.author}]
    // }
    console.log(this.state, 'favorites.jsx')
    // this.getFavorites = this.getFavorites.bind(this);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <tbody>

                <tr>
                  <td>
                    {this.props.title}
                  </td>
                  <td>
                    {this.props.author}
                  </td>
                </tr>
					
                  
                
              </tbody>
            </table>
          {/* </div> */}
            {/* <div className="row">
              <div className="col-md-12">
              <h3>Favorites</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th> */}
                      {/* <th>Author</th>
                      <th>Synopsis</th> */}
                    {/* </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {this.state.favs.map(fav => {
                        return (
                          <div>
                            <tr>

                            <td>{fav.title}</td>
                            <td>{fav.author}</td>
                            </tr>
                          </div>
                        )
                      })} */}
                      {/* <td>{this.props.image}</td>
                      <td>{this.props.title}</td>
                      <td>{this.props.author}</td>
                      <td>{this.props.description}</td> */}
                    {/* </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}