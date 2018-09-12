import * as actionTypes from '../constants/index';
import {unique} from '../utils/tools';

const albums = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_UPDATE:
        return action.data;
        break;
    default:
        return state;
    }
}

export {albums};