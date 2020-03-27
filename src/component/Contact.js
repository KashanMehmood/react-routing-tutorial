import React from 'react';

import { withRouter } from 'react-router-dom'
class Contact extends React.Component {
  render() {
    let users = {
      2641:{
          name:"kashi 2461",
          cell:"xyz 2461"
      },
      2642:{
          name:"kashi 2462",
          cell:"xyz 2462"
      },
      2643:{
          name:"kashi 2463",
          cell:"xyz 2463"
      },
  }

  let requiredUser = users[this.props.match.params.id];

    return (
      <div>

        
        <h1>Hello, Contact Component</h1>
        <h3> Contact {this.props.match.params.id }</h3>
        
        <h3> Username: {requiredUser.name} </h3>
        <h3> User Cell: {requiredUser.cell} </h3>



        
        
      </div>
    );
  }
}
export default withRouter (Contact);