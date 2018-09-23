import React, { Component } from 'react';


export default class Favorite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12">
              <h3>Favorites</h3>
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        #
								</th>
                      <th>
                        Title
								</th>
                      <th>
                        Payment Taken
								</th>
                      <th>
                        Status
								</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
								</td>
                      <td>
                        TB - Monthly
								</td>
                      <td>
                        01/04/2012
								</td>
                      <td>
                        Default
								</td>
                    </tr>
                    <tr class="table-active">
                      <td>
                        1
								</td>
                      <td>
                        TB - Monthly
								</td>
                      <td>
                        01/04/2012
								</td>
                      <td>
                        Approved
								</td>
                    </tr>
                    <tr class="table-success">
                      <td>
                        2
								</td>
                      <td>
                        TB - Monthly
								</td>
                      <td>
                        02/04/2012
								</td>
                      <td>
                        Declined
								</td>
                    </tr>
                    <tr class="table-warning">
                      <td>
                        3
								</td>
                      <td>
                        TB - Monthly
								</td>
                      <td>
                        03/04/2012
								</td>
                      <td>
                        Pending
								</td>
                    </tr>
                    <tr class="table-danger">
                      <td>
                        4
								</td>
                      <td>
                        TB - Monthly
								</td>
                      <td>
                        04/04/2012
								</td>
                      <td>
                        Call in to confirm
								</td>
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