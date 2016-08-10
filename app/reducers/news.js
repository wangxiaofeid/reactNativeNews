'use strict';

import * as types from '../constants/ActionTypes';

const defaultState = {
	isLoadMore: false,  //是否在请求更多
	hasMore: true,       //是否有更多
	isRefresh: true,   //是否在刷新
	newsList: []
}

export default function news (state = defaultState, action) {
  console.info(action);
  switch (action.type) {
  	case types.FETCH_NEWS_LIST:
  		return Object.assign({},state,{
  			isLoadMore: action.isLoadMore,
  			isRefresh: action.isRefresh
  		});
  	case types.ADD_NEWS_LIST:
      action.newsList.pop();
  		return Object.assign({},state,{
  			newsList: state.isLoadMore ? state.newsList.concat(action.newsList) : action.newsList,
  			hasMore: action.hasMore,
            isRefresh: action.isRefresh,
            isLoadMore: action.isLoadMore
  		});
    default:
      return state;
  }
}
