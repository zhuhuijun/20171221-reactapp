import React, {Component} from 'react';
import {getInfo} from '../../../fetch/detail';

export default class Info extends Component {
    render() {
        return (
            <div>Home</div>
        )
    }

    componentDidMount() {
        getInfo(this.props.id).then(res => res.json()).then(data => {
            console.info(data);
        });
    }
}