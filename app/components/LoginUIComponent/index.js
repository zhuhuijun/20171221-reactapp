import React, {Component} from 'react';
import './index.less';

export default class LoginUIComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            userpwd:''
        }
    }

    render() {
        return (
            <div className="login-ui">
                {/*ref 非受控 受控onchange+state*/}
                <input type="text"
                       value={this.state.username}
                       onChange={this.changeUserName.bind(this)}
                       placeholder="用户名"
                />
                <input type="password" value={this.state.userpwd}
                       placeholder="密码" onChange={this.changeUserpwd.bind(this)}/>
                <button type="button"
                        onClick={this.loignMethod.bind(this)}
                        className="back">登录
                </button>
            </div>
        )
    }

    loignMethod() {
        //alert(this.state.username);
        this.props.loginForChild(this.state.username, this.state.username);
    }

    changeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    changeUserpwd(e){
        this.setState({
            userpwd: e.target.value
        })
    }
}