import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';

const store = configureStore();

export default class Store extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
