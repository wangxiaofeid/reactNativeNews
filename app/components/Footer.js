import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  RefreshControl,
  TabBarIOS
} from 'react-native';

import News from '../pages/News'
import null1 from '../pages/null1'
import null2 from '../pages/null2'
import null3 from '../pages/null3'

export default class NewsList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'news',
    }
    this._renderContent = this._renderContent.bind(this);
    this.tabOnPress = this.tabOnPress.bind(this);

  }

  _renderContent(color: string, pageText: string, num?: number) {
    // return (
    //   <View style={[styles.tabContent, {backgroundColor: color}]}>
    //     <Text style={styles.tabText}>{pageText}</Text>
    //     <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
    //   </View>
    // );
  }

  tabOnPress(str){
    console.log(str);
    this.setState({
      selectedTab: str,
    });
  }

  goPage(str){
    const { navigator } = this.props;
    var component = News;
    switch(str){
      case 'null1':
        component = null1;
        break;
      case 'null2':
        component = null2;
        break;
      case 'null3':
        component = null3;
        break;
      default: break;
    }

    navigator.push({
      component: component,
      name: str,
    });
  }

  render() {
      const { page } = this.props;
      return (
        <View style={styles.tabBar}>
          <View style={[styles.item, page == 'null2'?styles.hover:""]}>
            <TouchableOpacity onPress={()=> this.goPage('News')}>
              <Image source={require('../img/more.png')}></Image>
              <Text>新闻</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.item, page == 'null2'?styles.hover:""]}>
            <TouchableOpacity onPress={()=> this.goPage('null1')}>
              <Image source={require('../img/more.png')}></Image>
              <Text>null1</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.item, page == 'null2'?styles.hover:""]}>
            <TouchableOpacity onPress={()=> this.goPage('null2')}>
              <Image source={require('../img/install.png')}></Image>
              <Text>null2</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.item, page == 'null3'?styles.hover:""]}>
            <TouchableOpacity onPress={()=> this.goPage('null3')}>
              <Image source={require('../img/install.png')}></Image>
              <Text>null3</Text>
            </TouchableOpacity>
          </View>
        </View>
        /*
        <TabBarIOS
          unselectedTintColor="#aaa"
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="新闻"
            icon={require('../img/more.png')}
            selectedIcon={require('../img/more.png')}
            selected={this.state.selectedTab === 'Main'}
            onPress={() => {
              this.tabOnPress('Main');
            }}>
            {this._renderContent('#414A8C', 'Main')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="history"
            badge={2}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.tabOnPress('redTab');
            }}>
            {this._renderContent('#783E33', 'Red Tab')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('../img/install.png')}
            selectedIcon={require('../img/install.png')}
            renderAsOriginal
            title="设置"
            selected={this.state.selectedTab === 'setting'}
            onPress={() => {
              this.tabOnPress('setting');
            }}>
            {this._renderContent('#21551C', '设置')}
          </TabBarIOS.Item>
        </TabBarIOS>
        */
      );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  tabBar: {
    height: 50,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    flexDirection: 'row'
  },
  item: {
    opacity: .6,
    flex: 1
  },
  hover: {
    opacity: 1,
  },
  img: {
    width: 20,
    height: 20
  },
  text: {
    color: '#000'
  },
});