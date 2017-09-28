import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
  	let bandList = this.props.store.getState().bands.map(band => <Band key={band.id} bandName={band.text} bandId={band.id}/>)
    return(
      <ul>
        {bandList}
      </ul>
    );
  }
};

export default Bands;
