import React, {Component} from 'react';

import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import './App.css';

import routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <aside>
                        {routes.map((item, key) => <Link key={key} to={item.path}>{item.name}</Link>)}
                    </aside>
                    <Switch>
                        {routes.map((item, key) => <Route key={key} {...item}/>)}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
