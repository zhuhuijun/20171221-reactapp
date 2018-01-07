import React, {Component} from 'react';
import './index.less';

export default class BuyButton extends Component {
    render() {
        return (
            <div className="buy-button">

                <button onClick={this.props.store}>{this.props.isStore ? "已收藏" : "收藏"}</button>


                <button onClick={this.props.buy}>购买</button>
            </div>
        )
    }
}