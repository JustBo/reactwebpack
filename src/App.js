import React, {Component} from 'react';
import './App.css';
import Hook from "./components/Hook/Hook";
// import Lazy from "./components/Lazy";
import Memo from "./components/Memo/Memo";
import Pure from "./components/PureComponent/Pure";
import Refs from "./components/Refs";
import Webworker from "./components/Webworker";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Hook/>
                {/*<Lazy/>*/}
                <Memo/>
                <Pure/>
                <Refs/>
                <Webworker/>
            </div>
        );
    }
}

export default App;
