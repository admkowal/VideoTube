import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const VideoMain = ({videoList}) => {

	if (!videoList.length) {
		return (
			<MuiThemeProvider>
				<CircularProgress />
			</MuiThemeProvider>
		);
	}

	let mainVideoTitle = videoList[0].snippet.title,
		mainVideoDesc = videoList[0].snippet.description,
		mainVideoID = videoList[0].id.videoId,
		mainVideoURL = `https://www.youtube.com/embed/${mainVideoID}`;

	return (
		<div className="row">
			<div className="video-detail col-md-8">
				<h5>{mainVideoTitle}</h5>
      			<div className="embed-responsive embed-responsive-16by9">
        			<iframe className="embed-responsive-item" src={mainVideoURL}></iframe>
      			</div>
      			<div className="details">
        			<div>{mainVideoDesc}</div>
      			</div>
      		</div>
      	</div>
	);

};

export default VideoMain;