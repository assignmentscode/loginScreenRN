import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginPage from './src/Components/LoginPage/LoginPage';

export default class App extends Component{
  render() {
    return (
        <LoginPage/>
    );
  }
}

