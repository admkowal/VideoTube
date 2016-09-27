import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Search from './search';
import VideoMain from './video_main';
import reducers from '../reducers'

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

export default App;