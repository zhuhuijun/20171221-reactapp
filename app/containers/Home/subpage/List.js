import React, {Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from "../../../components/ListComponent";
import LoadMore from "../../../components/LoadMore/inex";

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: [],
            page:0//页码
            ,isLoading:true
        }
    }

    render() {
        return (
            <div>
                {this.state.data.length ?
                    <ListComponent data={this.state.data}/>
                    : <div>正在加载...</div>}
                <LoadMore hasMore={this.state.hasMore}
                          loadMore={this.loadMore.bind(this)}
                          isLoading={this.state.isLoading}
                />
            </div>
        )
    }



    componentWillMount() {
        let res = getList(this.props.cityName, 0);
        this.processData(res);
    }

    /***
     * 处理数据
     * @param result
     */
    processData(result) {
        result.then(res => res.json()).then(({hasMore, data}) => {
            // console.log(data);
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        });
    }
    /**
     * 需要在当前写一个加载更过的函数，传递给LoadMore,当点击按钮时触发函数
     */
    loadMore() {
        this.setState({
            page:this.state.page+1
            ,isLoading:true//每次加载更多时需要设置为正在加载
        },()=>{
            let res = getList(this.props.cityName, this.state.page);
            this.processData(res);
        })
    }
}