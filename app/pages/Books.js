import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  InteractionManager,
  ScrollView,
  RefreshControl
} from 'react-native';
import { connect } from 'react-redux'

import BooksList from '../components/BooksList'
import { fetchBooks } from '../actions/index'

class Books extends Component {

  constructor (props) {
    super(props);
    this.state = {
      page: 0
    }
    this.loadPage = this.loadPage.bind(this);
    this.refresh = this.refresh.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.lastLoadTime = 0;
    this.canLoad = true;
  }

  loadPage(isRefresh, isLoadMore){
    if(isRefresh){
      this.props.dispatch(fetchBooks(isRefresh, isLoadMore, 0));
      this.setState({
        page: 1
      });
    }else{
      this.props.dispatch(fetchBooks(isRefresh, isLoadMore, this.state.page));
      this.setState({
        page: this.state + 1
      });
    }
  }


  refresh(){
    this.loadPage(true, false);
  }

  onScroll () {
    if (!this.canLoad) {
      this.canLoad = true;
    }
  }

  onEndReached(){
    let time = Date.parse(new Date()) / 1000;
    
    if (this.canLoad && time - this.lastLoadTime > 1&&!this.props.isLoadMore&&!this.props.isRefresh) {
      this.loadPage(false,true);
      this.canLoad = false;
      this.loadMoreTime = Date.parse(new Date()) / 1000;
    }
  }

  componentDidMount () {
    this.refresh(true, false, 0);
  }

  render() {
    const { books } = this.props;
      return (
            <BooksList 
              navigator={this.props.navigator} 
              booksList={books.booksList}
              isRefresh={books.isRefresh}
              refresh={this.refresh}
              onEndReached={this.onEndReached}
              onScroll={this.onScroll}
              />
        )

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
});

function mapStateToProps (state) {
  const {books} = state;
  return {
    books
  }
}

export default connect(mapStateToProps)(Books);