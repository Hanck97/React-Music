/*
 * @Author: Hancock Tong 
 * @Date: 2018-05-14 15:09:00 
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';



class HomeHeader extends Component {
    


    render(){
        return(
            <div className="header">
                <div className="cityName">
                    <Link to="/user/login"><i className="icon-user-circle-o"></i></Link>
                </div>
                <div className="searchBar">
                    <div className="searchInput">
                        <i className="icon-search"></i>
                        <input type="text" className="input input-search" onFocus={} placeholder="请输入关键词  " />                        
                    </div>
                </div>
                <div className="music-icon" >  
                    <Link to={}>
                        <div classNam="music-icon-animate" >

                        </div>
                    </Link>
                </div>

            </div>
        )
    }

} 
 