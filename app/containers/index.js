import React, {Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreators的对象
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
import {getStorage, setStorage, LOCALKEY} from '../local';

class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        let city = getStorage(LOCALKEY().CITY_KEY);
        if (city == null || city.city == undefined) {
            city = '杭州';
            this.props.userActions.update({
                cityName: city
            });
        } else {
            this.props.userActions.update({
                cityName: city.city
            });
        }
        setTimeout(() => {
            this.setState({
                done: true
            })
        }, 100);


        //先去本地查找是否有cityName
        console.info(this.props.userActions);
    }

    render() {
        return (
            <div>
                {this.state.done ? <RouterMap/> : <div>加载中</div>}
            </div>
        )
    }
}

export default connect(
    state => {//mapState2Props
        return {}
    },
    dispatch => {//mapDispatch2Props
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    }
)(App);