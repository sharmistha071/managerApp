import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;