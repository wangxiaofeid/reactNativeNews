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

import NewShow from '../pages/NewShow'

export default class BooksList extends Component {

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

  onPressButton(saleId, mediaId, mediaType){
    const { navigator } = this.props;
    if(navigator){
      navigator.push({
        component: NewShow,
        name: 'NewShow',
        url: `http://e.dangdang.com/touch/fenxiang/product/product.html?id=${saleId}&mediaId=${mediaId}&mediaType=${mediaType}`
      });
    }
  }

  renderRowFun(newObj){
    var book = newObj.mediaList[0];
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={this.onPressButton.bind(this, book.saleId, book.mediaId, book.mediaType)}>
          <View style={styles.imglist}>
            <Image style={[styles.img, styles.mr5]} source={{uri: book.coverPic}} />
            <View style={styles.right}>
              <Text style={styles.title}>{ book.title }</Text>
              <Text style={styles.author}>{ book.authorPenname }</Text>
              <Text style={styles.descripe}>{ book.descs }</Text>
              <Text style={styles.price}>价格：{ book.originalPrice }</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    if(this.props.booksList.length>0){
      return (
        <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.booksList)}
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
      return (<Text>暂无数据</Text>)
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
  img : {
    width: 84,
    height: 120,
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
  },
  right: {
    flex: 1,

  },
  title: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    height: 24,
  },
  author: {
    fontSize: 12,
    color: '#666',
    lineHeight: 24,
    height: 24,
  },
  descripe: {
    color: '#999',
    fontSize: 12,
    lineHeight: 16,
    height: 32,
    overflow: 'hidden',
    flex: 1
  },
  price: {
    color: '#ff5a55',
    fontSize: 12,
  }
});