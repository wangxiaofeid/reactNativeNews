import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Loading extends Component {

  render() {
      return (
        <View style={styles.loading}>
          <ActivityIndicator></ActivityIndicator>
          <Text>数据加载中</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});