'use strict';

import * as types from '../constants/ActionTypes';
// import {ToastShort} from '../utils/ToastUtils';
import { request } from '../utils/HttpServices';

/* news */ 
export function fetchNews (isRefresh, isLoadMore, page) {
  if (page == undefined) {
    page = 0;
  }
  return dispatch => {
    dispatch(fetchNewsList(isRefresh, isLoadMore));
    // http://e.dangdang.com/mobile/api2.do?f=zdtj_u&action=bookList&columnCode=ad40_recommend&start=0&ebookReturnFields=editorRecommend,imgUrl&textFieldType=line&token=&returnType=json&deviceType=html5&pageNum=1&pageSize=4&permanentId=20160412170244923150127737880182547&channelId=70000&deviceSerialNo=html5
    return request('http://toutiao.com/api/article/recent/?source=2&count=20&category=__all__&max_behot_time=1470960710&utm_source=toutiao&offset=0&as=A125B7EAFD0354E&cp=57AD0305644E9E1&max_create_time=1470961831&_=' + (1470969111452 + page)).then((response) => {
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


/* books */ 
export function fetchBooks (isRefresh, isLoadMore, page) {
  if (page == undefined) {
    page = 0;
  }
  return dispatch => {
    dispatch(fetchBooksList(isRefresh, isLoadMore));
    var start = page * 20;
    return request(`http://e.dangdang.com/media/api.go?action=column&columnType=all_rec_jrrm&isFull=1&permanentId=20160412170244923150127737880182547&returnType=json&channelId=70000&clientVersionNo=5.0.0&deviceType=android&start=${start}&end=${start + 20}`).then((response) => {
        console.info(response);
        dispatch(addBooksList(response.data.saleList, response.data.total > start+20));
      })
      .catch((error) => {
        console.info(error);
      })
  }
}

function fetchBooksList (isRefresh, isLoadMore) {
  if (isLoadMore == undefined) {
    isLoadMore = false;
  }
  return {
    type: types.FETCH_BOOKS_LIST,
    isRefresh,
    isLoadMore
  }
}

function addBooksList (booksList, hasMore) {
  return {
    type: types.ADD_BOOKS_LIST,
    booksList,
    hasMore,
    isRefresh: false,
    isLoadMore: false
  }
}