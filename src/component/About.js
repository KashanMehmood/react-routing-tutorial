import React from 'react';
import { withRouter } from 'react-router-dom'

class About extends React.Component {

  constructor(props) {
    super(props);
    this.operation = this.operation.bind(this);
  }

  // Method # 3 routing through function
  operation() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <h1>Hello, About Component</h1>
        <button type="button" onClick={this.operation}>
          Go home
        </button>
      </div>
    );
  }
}

export default withRouter(About);