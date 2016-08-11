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
    // http://e.dangdang.com/mobile/api2.do?f=zdtj_u&action=bookList&columnCode=ad40_recommend&start=0&ebookReturnFields=editorRecommend,imgUrl&textFieldType=line&token=&returnType=json&deviceType=html5&pageNum=1&pageSize=4&permanentId=20160412170244923150127737880182547&channelId=70000&deviceSerialNo=html5
    return request('http://toutiao.com/api/article/recent/?source=2&count=20&category=__all__&max_behot_time=1470895713.4&utm_source=toutiao&offset=0&as=A1C5F75A8C51679&cp=57AC413687295E1&_=' + (1470895713610 + page)).then((response) => {
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