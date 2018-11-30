import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./logo.png')} />
        <Button color='white' title = "Go to profile"
        onPress={
          ()=> this.props.navigation.navigate('Profile')
        }
        />
        <Button color='white' title = "Go to feed"
        onPress={
          ()=> this.props.navigation.navigate('Feed',{
            username: 'Edward'
          })
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef5b2e',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});