import React, {Component} from 'react';
import './index.less';

export default class OrderListItem extends Component {
    constructor(props) {
        super();
        /*将属性转化为自己的状态*/
        this.state = {
            commentState: props.data.commentState
        }
    }

    render() {
        let {id, commentState, price, count, title, img} = this.props.data;
        return (
            <div>
                <div className="orderlist-item">
                    <img src={img} alt=""/>
                    <div className="list-conent">
                        <h3>商户:{title}</h3>
                        <span>数量:{count}</span>
                        <span>价格:{price}</span>
                    </div>
                    <div className="order-button">
                        {this.state.commentState === 0 ?
                            <button onClick={this.changeCommentState.bind(this)}>评价</button> :
                            this.state.commentState == 1 ?
                                '' : <button className='unselect'>已评价</button>}


                    </div>
                </div>
                {
                    this.state.commentState === 1 ?
                        <div className="comment-area">
                            <textarea ref={ref => this.areaval = ref}></textarea>
                            <div>
                                <button onClick={this.commitData.bind(this)}>确认评价</button>
                                <button className="distance5" onClick={this.cancelCommon.bind(this)}>取消</button>
                            </div>
                        </div> : <div></div>
                }
            </div>
        )
    }

    changeCommentState() {
        this.setState({
            commentState: 1
        });
    }

    cancelCommon() {
        this.setState({
            commentState: 0
        });
    }

    /***
     * 确认评价按钮点击时需要提交后台
     */
    commitData() {
        this.props.commitData(this.props.data.id, this.areaval.value, this.changeState.bind(this));
    }

    /**
     * 提交成功后更改状态
     */
    changeState() {
        this.setState({
            commentState: 2
        });
    }
}