import React, {Component} from 'react';
import HeaderBackComponent from "../../components/HomeHeader/HeaderBackComponent/index";
import {connect} from 'react-redux';
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import ChoiceCity from "../../components/ChoiceCity/index";

class City extends Component {
    render() {
        return (
            <div>
                <HeaderBackComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChoiceCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }

    /**
     * 当前城市选择组件得到的结果
     * @param city
     */
    changeCity(city) {
        let old = this.props.userInfo;
        old.cityName = city;
        this.props.userActions.update(old);
        this.props.history.push('/');
    }
}

export default connect(
    state => {
        return {userInfo: state.userInfo}
    },
    dispatch => {
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    }
)(City)