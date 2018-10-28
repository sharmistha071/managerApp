import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configStore';
import LoginForm from './components/container/LoginForm';

const store = configureStore();

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyClojAdu2-rp8puM0ZTXvBytYMwE-AReuA',
      authDomain: 'reacttodo-a2336.firebaseapp.com',
      databaseURL: 'https://reacttodo-a2336.firebaseio.com',
      projectId: 'reacttodo-a2336',
      storageBucket: 'reacttodo-a2336.appspot.com',
      messagingSenderId: '25830847225'
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
