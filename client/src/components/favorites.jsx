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
          </div>
        </div>
      </div>
    )
  }
}