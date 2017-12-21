import React, {Component} from 'react';
import RouterMap from "../routes/index";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                done: true
            })
        }, 100);

    }

    render() {
        return (
            <div>
                {this.state.done ? <RouterMap/> : <div>...</div>}
            </div>
        )
    }
}