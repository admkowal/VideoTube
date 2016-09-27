const selectedVideo = (state = {}, action) => {

	switch (action.type) {

		case 'SELECT_VIDEO':
      		return action.payload;

    	default:
      		return state;

	}

};

export default selectedVideo;

