import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Feed extends Component {
  render() {
    const username = this.props.navigation.getParam('username', 'No username provided')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Your Feed</Text>
        <Text style={styles.welcome}>{username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});