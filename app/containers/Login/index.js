import React, {Component} from 'react';
import HeaderBackComponent from "../../components/HomeHeader/HeaderBackComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import LoginUIComponent from "../../components/LoginUIComponent/index";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: false
        };
    }

    render() {
        return (
            <div>
                <HeaderBackComponent title="登录" history={this.props.history}/>
                {this.state.login ? <LoginUIComponent
                        loginForChild={this.loginForChild.bind(this)}></LoginUIComponent> :
                    <div></div>}
            </div>
        )
    }

    componentDidMount() {
        this.checkLogin();
    }

    /**
     * 写方法供登陆傻组件使用
     */
    loginForChild(username, userpwd) {
        let info = this.props.userInfo;
        info.username = username;
        //更新redux的状态
        console.info(this.props.userActions);
        this.props.userActions.update(info);
        //如果是从购买进入的需要进入购买页面
        console.info(this.props.match.params.route);
        if (this.props.match.params.route) {
            var urldecode = decodeURIComponent(this.props.match.params.route);
            this.props.history.push(urldecode);
        } else {
            this.props.history.push('/user');
        }
    }

    checkLogin() {
        if (this.props.userInfo.username) {
            return this.props.history.push('/user');
        }
        this.setState({
            login: true
        });//显示登陆
    }
}

export default connect(
    state => {
        return {userInfo: state.userInfo}
    },
    dispatch => {
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    }
)(Login);