import * as actionTypes from '../constants/index';
import API from '../utils/API';
import request from '../utils/request';
// import {spin_show} from './spin';
import {parseLyric} from '../utils/tools';


//获取歌单
const updateMusic = (data) => {
    return {
        type: actionTypes.MUSIC_UPDATE,
        data
    }
}


export {updateMusic};