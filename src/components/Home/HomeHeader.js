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
                        
                    </div>
                </div>


            </div>
        )
    }

} 
 