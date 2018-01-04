import React, {Component} from 'react';
import {} from '../../../fetch/orderlist';
import {getOrderList, commitData} from "../../../fetch/orderlist/index";
import OrderListComponent from "../../../components/OrderListComponent/index";


export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div>
                {this.state.data.length ?
                    <OrderListComponent data={this.state.data} commitData={this.commitData.bind(this)}/> :
                    <div>正在加载</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let res = getOrderList(this.props.username);
        this.processData(res);
    }

    processData(res) {
        res.then((res) => res.json()).then((data) => {
            this.setState({
                data
            })
        });
    }

    /***
     * 提交内容到后台
     * @param params
     */
    commitData(id, comment, callback) {//商户id,内容,回掉函数更改状态
        console.log(id);
        console.log(comment);
        commitData({id, comment}).then(res => res.json()).then(
            data => {
                callback();
            }
        );
        callback();
    }
}