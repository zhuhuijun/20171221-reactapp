import React, {Component} from 'react';
import HeaderBackComponent from "../../components/HomeHeader/HeaderBackComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";

class User extends Component {
    render() {
        return (
            <div>
                {/*返回时检查是否登录，登录后就又跳回来了，指定返回的界面*/}
                <HeaderBackComponent title="用户信息"
                                     history={this.props.history}
                                     back="/"
                />
                <UserInfo userInfo={this.props.userInfo}/>
                {/*订单列表页*/}
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin() {
        if (!this.props.userInfo.username) {
            return this.props.history.push('/login');
        }
    }
}

export default connect(
    state => {
        return {userInfo: state.userInfo}
    }
)(User);