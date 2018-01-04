import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch//只匹配一次
} from 'react-router-dom';
import Home from "../containers/Home";
import Detail from "../containers/Detail";
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City/index";

export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/*exact 绝对匹配*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                        <Route path="/login/:route?" component={Login}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/city" component={City}></Route>
                    </Switch>

                </Router>
            </div>

        )
    }
}