import React, { Component } from 'react';
import {
  View, ActivityIndicator, AsyncStorage, StatusBar,
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.bootAsync();
  }

  bootAsync = async () => {
    const user = await AsyncStorage.getItem('token');
    const { navigation } = this.props;
    navigation.navigate(user ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
