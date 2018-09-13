/*
 * @Author: Hancock Tong
 * @Date: 2018-05-19 22:20:39
 */
import React, { Component } from 'react';
import request from '../../utils/request';
import API from '../../utils/API';
import {Link} from 'react-router-dom';

// import 'babel-polyfill';


export default class SongPlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount () {
        this.fetchData();
    }

    async fetchData() {
        try {
            let response_song_play = await request.asyncGet(`/kugou/${API.song_play}`);
            let data_song_play = await response_song_play.json();
            this.props.albumsActions.updateMusic(data_song_play.plist.list);
            this.setState({
                loaded: true
            });
        } catch (err) {
            console.log("Error", err);
        }
    }

    render () {
        const songPlay = this.state.loaded && this.props.totalAlbums.info.map((item, index) => {
            if (index < 9) {
                return (
                    <li key={index}>
                        <Link to={`/album/${item.specialid}`} >
                            <img src={item.imgurl.replace(/\{size\}/g,400)}/>
                            <p>{item.specialname}</p>
                            <div className="albumTips">
                                <i className="icon-headset"></i>
                                <span>{item.playcount > 9999 ? (item.playcount / 10000).toFixed(2) + '万': item.playcount}</span>
                            </div>
                        </Link>
                    </li>
                )
            } else{
                return null;
            }
        });

        return (
            <ul className='songPlay'>
                {songPlay}
            </ul>
        )

    }
}