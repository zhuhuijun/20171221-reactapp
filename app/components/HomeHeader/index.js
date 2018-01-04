import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
//主页头部组件
export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <Link to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-unfold"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <Link to="/login">
                    <div className="profile">

                        <i className="iconfont icon-people_fill"></i>

                    </div>
                </Link>

            </div>

        )
    }
}