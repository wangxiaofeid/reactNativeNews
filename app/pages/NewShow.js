import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Platform
} from 'react-native';

export default class NewShow extends Component {
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
    // console.info(this.props.route);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={this.back}>
            <Text style={styles.back}>返回</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={{width: 320}}
          source={{uri: this.props.route.url}}
          startInLoadingState={true}
          scalesPageToFit={true}
          decelerationRate="normal"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,   // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
    backgroundColor: '#d74047',
    alignItems: 'center'
  },
  back: {
    lineHeight: 20,
  }
});