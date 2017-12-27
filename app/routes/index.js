import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch//只匹配一次
} from 'react-router-dom';
import Home from "../containers/Home";
import Detail from "../containers/Detail";
export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/*exact 绝对匹配*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                    </Switch>

                </Router>
            </div>

        )
    }
}