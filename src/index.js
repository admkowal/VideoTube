import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Search from './containers/search';
import VideoMain from './containers/video_main';
import reducers from './reducers'

const API_KEY = 'AIzaSyCE6omq_R_IvG6cyjPfgwbZbFDSbjx8mag';
let store = createStore(reducers);

const App = () => {

	return (
		<Provider store={store}>
			<div>
				<Search />
				<VideoMain />
			</div>
		</Provider>
	);

};

ReactDOM.render(<App />, document.querySelector('.container'));
