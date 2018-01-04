import React, {Component} from 'react';
import Star from "../Star/index";
import './index.less';
export default class InfoComponent extends Component {
    render() {
        let {img, desc, title, subTitle, price, star} = this.props.data;
        console.log(this.props.data);
        return (
            <div className="info-componemt">
                <div className="info-product">
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/> <span>￥{price}</span>
                        </div>
                        <p> {subTitle}</p>
                    </div>
                </div>
                <br/>
                <hr/>
                {/*将内容转换为html放到页面上*/}
                <div className="info-content" dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>

        )
    }
}