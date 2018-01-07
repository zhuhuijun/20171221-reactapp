import React, {Component} from 'react';
import HeaderBackComponent from "../../components/HomeHeader/HeaderBackComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
import BuyButton from "../../components/BuyButton/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/favourite';
import {bindActionCreators} from 'redux';

//通过路由渲染的路径都会在this.props上添加很多属性例如history,match
class Detail extends Component {
    constructor() {
        super();
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                {/*头部*/}
                <HeaderBackComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买按钮*/}
                <BuyButton isStore={this.state.isStore} buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }

    componentDidMount() {
        //是否是收藏还是已收藏
        let id = this.props.match.params.id;
        console.log(this.props.favourite);
        let isStore = this.props.favourite.some(item => item === id);
        if (isStore) {
            this.setState({
                isStore
            });
        }

    }

    buy() {
        //如果登陆成功点击购买
        //...用户页
        let flag = this.checkLogin();
        if (flag) {
            this.props.history.push('/user');
        } else {
            //当前自己的路径
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id));
        }
    }

    store() {
        //验证是否登陆，登陆完后回到这个页面
        let flag = this.checkLogin();
        let id = this.props.match.params.id;
        if (!flag) {
            //当前自己的路径
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + id));
        }

        if (this.state.isStore) {
            //移除
            this.props.favouriteActions.myRemove(id);
        } else {
            //添加
            this.props.favouriteActions.myAdd(id);
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }

    checkLogin() {
        if (this.props.userInfo.username) {
            return true;
        }
        return false;
    }
}

export default connect(
    state => {
        return {
            userInfo: state.userInfo,
            favourite: state.favourite
        }
    },
    dispatch => {
        return {
            favouriteActions: bindActionCreators(Actions, dispatch)
        }
    }
)(Detail);