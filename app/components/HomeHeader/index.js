import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import SearchInput from "../SearchInput/index";
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
                    {/*搜索框需要接收函数，回车时将值传递出来/search/all/keyword*/}
                    <SearchInput fn={this.toSearch.bind(this)} value=""/>
                </div>
                <Link to="/login">
                    <div className="profile">

                        <i className="iconfont icon-people_fill"></i>

                    </div>
                </Link>

            </div>

        )
    }

    toSearch(inputval) {
        //alert(inputval);
        //history没有通过父级传递
        this.props.history.push(`/search/all/${inputval}`);
    }
}