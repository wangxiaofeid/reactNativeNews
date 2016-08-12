'use strict';

import * as types from '../constants/ActionTypes';

const defaultState = {
	isLoadMore: false,  //是否在请求更多
	hasMore: true,       //是否有更多
	isRefresh: true,   //是否在刷新
	booksList: []
}

export default function books (state = defaultState, action) {
  console.info(action);
  switch (action.type) {
  	case types.FETCH_BOOKS_LIST:
  		return Object.assign({},state,{
  			isLoadMore: action.isLoadMore,
  			isRefresh: action.isRefresh
  		});
  	case types.ADD_BOOKS_LIST:
  		return Object.assign({},state,{
  			booksList: state.isLoadMore ? state.booksList.concat(action.booksList) : action.booksList,
  			hasMore: action.hasMore,
        isRefresh: action.isRefresh,
        isLoadMore: action.isLoadMore
  		});
    default:
      return state;
  }
}
