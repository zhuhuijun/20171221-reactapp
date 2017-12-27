import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';

export default class ListItem extends Component {
    render() {
        let {img, title, subTitle, distance, price, number, id} = this.props.data;
        return (
            <Link to={'/detail/' + id}>
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
            </Link>
        )
    }
}