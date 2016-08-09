import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/ConfigureStore'
import App from './containers/App'

const store = configureStore();

class root extends Component {

  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
export default root