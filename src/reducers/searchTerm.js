const search_term = (state = {}, action) => {

	switch (action.type) {

		case 'CHANGE_SEARCH_TERM':
      		return Object.assign({}, state, {
        		searchTerm: action.payload
      		});

    	default:
      		return state;

	}

};

export default search_term;
