import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

function start() {
	ReactDOM.render(<App />, document.getElementById('root'));
}

export {
	App,
	start as default
};