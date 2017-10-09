import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.sass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
