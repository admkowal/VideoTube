import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Search = () => {

	return (
		<div>
			<MuiThemeProvider>
			<TextField
      			hintText="Search for videos..."
      			fullWidth={true}
      			floatingLabelText="VideoTube"
      			floatingLabelFixed={true}
    		/>
    		</MuiThemeProvider>
        </div>
	);

};

export default Search;