import React, {Component} from 'react';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: props.value
        }
    }

    render() {
        return (

            <input type="text"
                   value={this.state.inputvalue}
                   onKeyUp={this.search.bind(this)}
                   onChange={this.change.bind(this)}/>

        )
    }

    change(e) {
        this.setState({
            inputvalue: e.target.value
        })
    }

    search(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.props.fn(this.state.inputvalue);
    }
}