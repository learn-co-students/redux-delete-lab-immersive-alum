import React from 'react'
import Band from './Band'


class Bands extends React.Component {

    render() {
        return (
            <div>
                {this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} band={band} id={band.id}/>)}
            </div>
        )
    }
}


export default Bands 