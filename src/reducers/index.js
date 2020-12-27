import { combineReducers } from 'redux';

import medias from './medias';
import mediasFilter from './mediasFilter';

export default combineReducers({ medias, mediasFilter });
