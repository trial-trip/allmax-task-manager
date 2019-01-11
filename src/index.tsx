import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// redux
import { createStore } from 'redux';
import { App } from './components/App/App';
import { reducers } from './reducers';
import initialState from './util/initialState';

const store = createStore(reducers, initialState);

store.subscribe(() => {
  localStorage.setItem('tm_data', JSON.stringify(store.getState()));
});

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
