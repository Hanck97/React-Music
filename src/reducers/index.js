import {combineReducers} from 'redux';

import {albums, music} from './music';

export default combineReducers({
    albums,
    music
});