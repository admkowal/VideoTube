import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions';

const VideosListItem = ({video, selectVideo}) => {

	let thumbnailURL = video.snippet.thumbnails.default.url;

	return (
		<a onClick={() => selectVideo(video)} href={"#"} className="list-group-item list-group-item-action">
      		<div className="video-list media">
        		<div className="media-left">
          			<img className="media-object" src={thumbnailURL} />
        		</div>
        		<div className="media-body">
          			<div className="media-heading">{video.snippet.title}</div>
        		</div>
      		</div>
    	</a>
	);

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideosListItem);