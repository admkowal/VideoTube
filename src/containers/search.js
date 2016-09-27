import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {debounce} from 'throttle-debounce';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { changeSearchTerm } from '../actions/index';



const Search = ({changeSearchTerm}) => {

    const onInputChange = (e) => { 
        e.persist();
        debounce(500, () => {
            changeSearchTerm(e.target.value) 
        })();
    };

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
  return bindActionCreators({ changeSearchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);