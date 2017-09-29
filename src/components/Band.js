import React, { Component } from 'react';

class Band extends Component {

	handleDelete = () => {
		this.props.store.dispatch({
			type: 'DELETE_BAND',
			id: this.props.bandId
		})
	}

  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={() => this.handleDelete()}>Delete?</button>
      </li>
    );
  }
};

export default Band;
