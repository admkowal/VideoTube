const videoList = (state = [], action) => {

	switch (action.type) {

		case 'SET_NEW_VIDEOS':
      		return action.payload;

    	default:
      		return state;

	}

};

export default videoList;
