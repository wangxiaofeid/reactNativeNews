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

import NewShow from '../pages/NewShow'

export default class NewsList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'news',
    }
    this._renderContent = this._renderContent.bind(this);

  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
      return (
        <TabBarIOS
          unselectedTintColor="#aaa"
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="新闻"
            icon={require('../img/more.png')}
            selectedIcon={require('../img/more.png')}
            selected={this.state.selectedTab === 'news'}
            onPress={() => {
              this.setState({
                selectedTab: 'news',
              });
            }}>
            {this._renderContent('#414A8C', '新闻')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="history"
            badge={2}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              });
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
              this.setState({
                selectedTab: 'setting'
              });
            }}>
            {this._renderContent('#21551C', '设置')}
          </TabBarIOS.Item>
        </TabBarIOS>
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
});