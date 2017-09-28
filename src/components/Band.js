import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.bandName}
      </li>
    );
  }
};

export default Band;
