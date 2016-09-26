import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { changeSearchTerm } from '../actions/index';

const Search = ({changeSearchTerm}) => {

	return (
		<div>
			<MuiThemeProvider>
			<TextField
                onChange={e => changeSearchTerm(e.target.value)}

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