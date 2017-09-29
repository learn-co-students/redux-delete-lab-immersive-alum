import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
  	let bandList = this.props.store.getState().bands.map((band, index) => <Band key={index} band={band} bandId={band.id} store={this.props.store}/>)
    return(
      <ul>
        {bandList}
      </ul>
    );
  }
};

export default Bands;
