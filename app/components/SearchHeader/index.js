import React, {Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less';

export default class SearchHeader extends Component {
    render() {
        return (
            <div className="search-header back">
                <i className="iconfont icon-return" onClick={this.back.bind(this)}></i>
                <div className="search-header-search">
                    <i className="iconfont icon-search"></i>
                    <SearchInput value={this.props.value}
                                 fn={this.props.fn}/>
                </div>

            </div>
        )
    }

    back() {
        this.props.history.go(-1);
    }
}