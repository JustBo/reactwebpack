import React, {Component} from 'react';
import View from "./View";

class Memo extends Component {
    names = ["Peter", "Bruce", "Clark"];
    state = {name: "Anonymous"};

    componentDidMount() {
        setInterval(() => {
            const name = this.generateName();
            this.setState({name});
        }, 5000);
    }

    generateName = () =>
        this.names[Math.floor(Math.random() * this.names.length)];

    render() {
        return (
            <>
                <h2>Memo</h2>
                <View name={this.state.name}/>
            </>
        );
    }
}

export default Memo;