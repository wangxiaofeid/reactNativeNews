'use strict';

import * as types from '../constants/ActionTypes';
// import {ToastShort} from '../utils/ToastUtils';
import { request } from '../utils/HttpServices';

export function fetchNews (isRefresh, isLoadMore, page) {
  if (page == undefined) {
    page = 0;
  }
  return dispatch => {
    dispatch(fetchNewsList(isRefresh, isLoadMore));
    return request('http://toutiao.com/api/article/recent/?source=2&count=20&category=__all__&max_behot_time=1470385897&utm_source=toutiao&offset=0&as=A135771AF424F4D&cp=57A4147F14ED6E1&max_create_time=1470301239&_=' + (1470385898200 + page))
      .then((response) => {
        console.info(response);
        dispatch(addNewsList(response.data, response.has_more));
      })
      .catch((error) => {
        console.info('请求失败');
      })
  }
}

function fetchNewsList (isRefresh, isLoadMore) {
  if (isLoadMore == undefined) {
    isLoadMore = false;
  }
  return {
    type: types.FETCH_NEWS_LIST,
    isRefresh,
    isLoadMore
  }
}

function addNewsList (newsList, hasMore) {
  return {
    type: types.ADD_NEWS_LIST,
    newsList,
    hasMore,
    isRefresh: false,
    isLoadMore: false
  }
}