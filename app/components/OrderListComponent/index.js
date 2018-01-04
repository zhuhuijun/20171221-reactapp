import React, {Component} from 'react';
import OrderListItem from "./OrderListItem/index";
import './index.less';

export default class OrderListComponent extends Component {
    render() {
        return (
            <div>
                <h3>订单列表</h3>
                {this.props.data.map((item, index) => (
                    <OrderListItem key={index} data={item} commitData = {this.props.commitData}/>
                ))}
            </div>
        )
    }
}