import React, {Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
import {connect} from 'react-redux';
import SearchList from "./subpage/SearchList";
//从轮播图进入/search/美食
//从搜索框 /search/all/keyword
class Search extends Component {
    render() {
        return (
            <div>
                {/*头部*/}
                <SearchHeader history={this.props.history}
                              value={this.props.match.params.keyword || ""}
                              fn={this.toSearch.bind(this)}/>
                <SearchList cityName={this.props.userInfo.cityName}
                            keyword={this.props.match.params.keyword || ""}/>
            </div>
        )
    }

    toSearch(inputval) {
        this.props.history.push(`/search/all/${inputval}`);
    }
}

export default connect(
    state => {
        return {
            userInfo: state.userInfo
        }
    }
)(Search);
