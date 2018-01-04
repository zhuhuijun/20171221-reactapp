import React, {Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from "../../../components/ComentComponent/index";
import LoadMore from "../../../components/LoadMore/inex";

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            data: [],
            hasMore: true,
            isLoading: true
        }
    }

    render() {
        return (
            <div>
                {/*评价列表*/}
                {
                    this.state.data.length ? <CommentComponent data={this.state.data}/> :
                        <div>正在加载</div>
                }
                <LoadMore isLoading={this.state.isLoading}
                          hasMore={this.state.hasMore}
                          loadMore={this.loadMore.bind(this)}/>

            </div>
        )
    }

    //获取数据默认加载第一页
    componentDidMount() {
        let ret = getComment(this.props.id, 0);
        this.processData(ret);
    }

    processData(res) {
        res.then(res => res.json()).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data: this.state.data.concat(data),
                isLoading: false
            })
        })
    }

    loadMore() {
        this.setState({
            isLoading: true,
            page: this.state.page + 1
        }, () => {
            let ret = getComment(this.props.id, this.props.page);
            this.processData(ret);
        })
    }
}