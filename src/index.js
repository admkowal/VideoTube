import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';

const API_KEY = 'AIzaSyCE6omq_R_IvG6cyjPfgwbZbFDSbjx8mag';

const App = () => {
	return <Search />;
};

ReactDOM.render(<App />, document.querySelector('.container'));
