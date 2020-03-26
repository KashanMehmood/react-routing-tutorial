import React from 'react';
import { withRouter } from 'react-router-dom'

class About extends React.Component {

  constructor(props) {
    super(props);
    this.operation = this.operation.bind(this);
    this.routeToContact = this.routeToContact.bind(this);
  }

  // Method # 3 routing through function
  operation() {
    this.props.history.push('/home');
  }

  routeToContact(){
    this.props.history.push('/contact');
  }

  render() {
    return (
      <div>
        <h1>Hello, About Component</h1>
        <button type="button" onClick={this.operation}>
          Go home
        </button>
        <button type="button" onClick={this.routeToContact}>
          Go Contact
        </button>
      </div>
    );
  }
}

export default withRouter(About);