import React, {PureComponent} from 'react';
import View from "./View";

const names = ["Peter", "Bruce", "Clark"];

class Pure extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            name: "Anonymous"
        };
    }

    componentDidMount() {
        setInterval(() => {
            const name = this.generateName();
            this.setState({name});
        }, 1000);
    }

    generateName = () =>
        names[Math.floor(Math.random() * names.length)];

    render() {
        // console.log('render');
        return (
            <>
                <h2>Pure</h2>
                <View name={this.state.name}/>
            </>
        );
    }
}

export default Pure;