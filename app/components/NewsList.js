import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  RefreshControl,
  Platform,
  Dimensions
} from 'react-native';

import WebView from '../pages/WebView'
import Loading from '../components/Loading'

export default class NewsList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.renderRowFun = this.renderRowFun.bind(this);
    this.onPressButton = this.onPressButton.bind(this);

    // console.info(props.listView);
  }

  onPressButton(url){
    const { navigator } = this.props;
    if(navigator){
      navigator.push({
        component: WebView,
        name: 'WebView',
        url,
        title: '新闻详情'
      });
    }
  }

  renderImage(imglist){
    // console.info(imglist);
    const width = (Dimensions.get('window').width - 50)/3;
    const height = width/194*108;

    if(imglist.length > 0){
      return (
        <View style={styles.imglist}>
          {
            imglist.map(function(imgObj){
              return <View key={Math.random()} style={styles.flex1, styles.threeImg}><Image style={styles.threeImg} source={{uri: imgObj.url}} /></View>
            })
          }
        </View>
      )
    }
  }
  renderRowFun(newObj){
    // console.info(newObj);
    if(newObj.image_list.length > 0){
      return (
        <View style={styles.list}>
          <TouchableOpacity onPress={this.onPressButton.bind(this,newObj.share_url)}>
            <View style={styles.text}>
              <Text>{newObj.title}</Text>
            </View>
            <View>
              {this.renderImage(newObj.image_list)}
            </View>
          </TouchableOpacity>
        </View>
      )
    }else if(newObj.image_url){
      return (
        <View style={styles.list}>
          <TouchableOpacity onPress={this.onPressButton.bind(this,newObj.share_url)}>
            <View style={styles.imglist}>
              <Image style={[styles.img, styles.mr5]} source={{uri: newObj.image_url}} />
              <Text style={styles.flex1}>{newObj.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }else{
      return (
        <View style={styles.list}>
          <TouchableOpacity onPress={this.onPressButton.bind(this,newObj.share_url)}>
            <View>
              <Text>{newObj.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    
  }

  render() {
    if(this.props.newsList.length>0){
      return (
        <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.newsList)}
        renderRow={this.renderRowFun}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isRefresh}
            onRefresh={this.props.refresh}
            title="Loading..."
            colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
          />}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={10}
        onScroll={this.props.onScroll}
        />
      );
    }else{
      return (<Loading></Loading>)
    }
  }
}

const styles = StyleSheet.create({
  imglist: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  threeImg: {
    width: (Dimensions.get('window').width - 50)/3,
    height: (Dimensions.get('window').width - 50)/3/194*108,
  },
  img : {
    width : 90,
    height : 56,
  },
  text: {
    marginBottom: 5,
  },
  mr5: {
     marginRight: 5
  },
  flex1: {
    flex : 1
  },
  list: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  }
});