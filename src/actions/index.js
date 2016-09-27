export const setNewVideos = (videos) => {

	return {
    	type: 'SET_NEW_VIDEOS',
    	payload: videos
  	};

};

export const selectVideo = (video) => {
	return {
		type: 'SELECT_VIDEO',
		payload: video
	}
}