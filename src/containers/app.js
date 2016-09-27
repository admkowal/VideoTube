import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import Search from './search';
import VideoMain from '../components/video_main';
import VideoList from '../components/videos_list';

const App = ({videoList, selectedVideo}) => {

	return (
		<div>
			<Search />
			<div className="row">
				<VideoMain selectedVideo={selectedVideo}/>
				<VideoList videoList={videoList}/>
			</div>
		</div>
	);

};

const mapStateToProps = (state) => {
  	return {
    	videoList: state.videoList,
    	selectedVideo: state.selectedVideo
  	};
};

export default connect(mapStateToProps)(App);