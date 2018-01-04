import React, {Component} from 'react';
import HeaderBackComponent from "../../components/HomeHeader/HeaderBackComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";

//通过路由渲染的路径都会在this.props上添加很多属性例如history,match
export default class Detail extends Component {
    render() {
        return (
            <div>
                {/*头部*/}
                <HeaderBackComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买按钮*/}
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}