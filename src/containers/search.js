import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {debounce} from 'throttle-debounce';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCE6omq_R_IvG6cyjPfgwbZbFDSbjx8mag';

import { setNewVideos, selectVideo } from '../actions';



const Search = ({setNewVideos, selectVideo}) => {

    const videoSearch = (term) => {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            setNewVideos(videos);
            selectVideo(videos[0]);
        });
    };

    const onInputChange = (e) => { 
        e.persist();
        debounce(500, () => {
            videoSearch(e.target.value);
        })();
    };

    videoSearch("funfunfunction");

	return (
		<div>
			<MuiThemeProvider>
			<TextField
                onChange={onInputChange}

      			hintText="Search for videos..."
      			fullWidth={true}
      			floatingLabelText="VideoTube"
      			floatingLabelFixed={true}
    		/>
    		</MuiThemeProvider>
        </div>
	);
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setNewVideos, selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);