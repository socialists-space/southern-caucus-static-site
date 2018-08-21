import Application from './Application';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'


ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
