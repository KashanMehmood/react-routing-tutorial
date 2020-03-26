import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

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
    this.props.history.push('/contact/2643');
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
        <ul>
          <li>
            <Link to="/contact/1" >Contact 1</Link>
          </li>
          <li>
            <Link to="/contact/2" >Contact 2</Link>
          </li>
          <li>
            <Link to="/contact/3" >Contact 3</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(About);