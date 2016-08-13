import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';
import MapView from 'react-native-maps';

export default class root extends Component {
  constructor (props) {
    super(props);
    this.back = this.back.bind(this);
  }

  back(){
    const { navigator } = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 116.404,
            longitude: 39.915,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 106.404,
              longitude: 45.915,
            }}
            title='marker'
            description='简介简介简介简介简介简介简介简介'
          />
        </MapView>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});