import React from 'react';

import { withRouter } from 'react-router-dom'
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Contact Component</h1>
        <h3> Contact { this.props.match.params.id }</h3>
      </div>
    );
  }
}
export default withRouter (Contact);