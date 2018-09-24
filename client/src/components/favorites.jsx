import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventdefault();
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
              <h3>Favorites</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Synopsis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TB - Monthly</td>
                      <td>01/04/2012</td>
                      <td>Default</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}