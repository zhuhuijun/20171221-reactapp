import React, {Component} from 'react';
import './index.less';

export default class UserInfo extends Component {
    render() {
        return (
            <div className="user-curr-info">
                <div>
                    <i className="iconfont icon-dizhiguanli"></i>
                    {this.props.userInfo.cityName}</div>
                <div>
                    <i className="iconfont icon-guanyanren"></i>
                    {this.props.userInfo.username}
                </div>
            </div>
        )
    }
}