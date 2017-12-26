import React, {Component} from 'react';
import './index.less';

export default class LoadMore extends Component {
    render() {
        return (
            <div className="hasMore">
                {this.props.hasMore ?
                    <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>
                    : <div>我是有底线的</div>}
            </div>

        )
    }

    componentDidMount() {
        this.fn = () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                //console.log('滚动');
                //先判断是否是正在加载
                if (this.props.isLoading) {
                    return;
                }
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;//当前元素的位置
                //console.log(this.refs.more);
                //console.log(top);
                if (top < screen){
                   this.props.loadMore();
                }
                //判断按钮距离屏幕顶端的高度 和 可视窗口高度
            }, 50);

        };
        window.addEventListener('scroll', this.fn);
    }

    componentWillUnmount() {
        //移除滚动
        window.removeEventListener('scroll', this.fn);
    }

    loadMore() {
        if (this.props.isLoading) {
            return;
        }
        this.props.loadMore();
    }
}