// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';

// import Hot2 from '../pages/Hot2'

// export default class MainContainer extends Component {

//   constructor (props) {
//     super(props);
//     this._onPressButton = this._onPressButton.bind(this);
//   }

//   _onPressButton(){
//     const { navigator } = this.props;
//     if(navigator){
//       navigator.push({
//         component: Hot2,
//         name: 'Hot2'
//       });
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <Text style={styles.instructions}>
//           这里是首页
//         </Text>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <Text>调整到Hot2</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


'use strict';
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Main from '../pages/Main';

class NewsContainer extends Component {

  render () {
    return (
      <Main {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const {news} = state;
  return {
    news
  }
}

export default connect(mapStateToProps)(NewsContainer);