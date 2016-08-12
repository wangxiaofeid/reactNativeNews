'use strict';

import {combineReducers} from 'redux';
import news from './news';
import books from './books';

const rootReducer = combineReducers({
  news,
  books
});

export default rootReducer;