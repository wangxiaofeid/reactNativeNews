import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Navigator
} from 'react-native';

import Welcome from '../pages/Welcome'
import Footer from '../components/Footer'

class App extends Component {
  constructor (props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene (route, navigator) {
    let Component = route.component;
    return (
      
        <Component navigator={navigator} route={route} />
        
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#FF0000"
          barStyle="default"
        />
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={(route, routeStack) => { return Navigator.SceneConfigs.PushFromRight; }}
          renderScene={this.renderScene}
          initialRoute={{
            component: Welcome,
            name: 'Welcome'
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;