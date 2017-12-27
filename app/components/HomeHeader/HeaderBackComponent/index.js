import React, {Component} from 'react';
import './index.less';

export default class HeaderBackComponent extends Component {
    render() {
        return (
            <div className="back header-back">
                <span>
                    <i className="iconfont icon-return" onClick={this.back.bind(this)}></i>
                    {this.props.title}
                </span>

            </div>
        )
    }

    back() {
        this.props.history.go(-1);
    }
}