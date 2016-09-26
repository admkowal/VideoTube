import React from 'react';
import { connect } from 'react-redux'

const VideoMain = ({video}) => {

	return (
		<h1>{video.searchTerm}</h1>
	);

};

const mapStateToProps = (state) => {
  	return {
    	video: state.searchTerm
  	};
};

export default connect(mapStateToProps)(VideoMain);