let count = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    	count++
    	const newBand = Object.assign({}, action.band, {id: count})
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
    	const allBands = state.bands.filter(band => band.id !== action.id)
    	return { bands: allBands}
    default:
      return state;
  }
};
