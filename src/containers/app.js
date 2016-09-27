import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Search from './search';
import VideoMain from './video_main';

const App = ({videoList}) => {

	return (
		<div>
			<Search />
			<VideoMain videoList={videoList}/>
		</div>
	);

};

const mapStateToProps = (state) => {
  	return {
    	videoList: state.videoList
  	};
};

export default connect(mapStateToProps)(App);