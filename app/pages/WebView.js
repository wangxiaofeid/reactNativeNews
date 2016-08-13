import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Platform,
  Dimensions
} from 'react-native';

export default class h5 extends Component {
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
    const { width, height } = Dimensions.get('window');
    var height2 = height - (Platform.OS?48:28) - 50;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={this.back}>
            <Text style={styles.back}>返回</Text>
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={{lineHeight: 30}}>{this.props.route.title}</Text>
          </View>
        </View>
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={{width: width, height: height2 }}
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
    
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 18 : 0,   // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 63 : 28,   // 处理iOS状态栏
    backgroundColor: '#d74047',
  },
  back: {
    lineHeight: 30,
    width: 30
  },
  title: {
    flex: 1,
    alignItems: 'center',
  }
});