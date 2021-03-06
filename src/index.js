import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import reducers from './store/reducers';
import saga from './store/saga';

const store = configureStore(reducers, saga);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));