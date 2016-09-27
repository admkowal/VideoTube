import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const VideoMain = ({selectedVideo}) => {

	if (!Object.keys(selectedVideo).length) {
		return (
			<MuiThemeProvider>
				<CircularProgress />
			</MuiThemeProvider>
		);
	}

	let mainVideoTitle = selectedVideo.snippet.title,
		mainVideoDesc = selectedVideo.snippet.description,
		mainVideoID = selectedVideo.id.videoId,
		mainVideoURL = `https://www.youtube.com/embed/${mainVideoID}`;

	return (
			<div className="video-detail col-md-8">
				<h3>{mainVideoTitle}</h3>
      			<div className="embed-responsive embed-responsive-16by9">
        			<iframe className="embed-responsive-item" src={mainVideoURL}></iframe>
      			</div>
      			<div className="details">
        			<div>{mainVideoDesc}</div>
      			</div>
      	</div>
	);

};

export default VideoMain;