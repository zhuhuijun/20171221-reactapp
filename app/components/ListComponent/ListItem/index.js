import React, {Component} from 'react';
import './index.less';

export default class ListItem extends Component {
    render() {
        let {img, title, subTitle, distance, price, number} = this.props.data;
        return (
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <div className="number">
                        <strong>￥{price}</strong>
                        已售{number}
                    </div>
                    <span className="distance">{distance}</span>
                </div>

            </div>
        )
    }
}