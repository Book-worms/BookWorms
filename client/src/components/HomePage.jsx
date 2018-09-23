import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import UserReviewSubmit from './UserReviewSubmit.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div>
      {Auth.isUserAuthenticated() ? (
        
        <div></div>    
          ) : (
            <div className="home">
              <Main />
              <Card className="container">
        <CardTitle title="Bookworms"/>
            <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
            </Card>
            </div>
          )}
      
      </div>
    )
  }
};

export default HomePage;
