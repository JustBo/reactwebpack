import React, {Component} from 'react';

import worker from "./worker";
import WebWorker from "./WebworkerSetup";


class Webworker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    fetchUsers = () => {
        const users = [];

        const userDetails = {
            name: "Jane Doe",
            email: "jane.doe@gmail.com",
            id: 1
        };

        for (let i = 0; i < 10000000; i++) {
            userDetails.id = i++;
            userDetails.dateJoined = Date.now();

            users.push(userDetails);
        }

        this.setState({
            count: users.length
        });
    };

    fetchWebWorker = () => {
        this.worker.postMessage("Fetch Users");

        this.worker.addEventListener("message", event => {
            this.setState({
                count: event.data.length
            });
        });
    };

    componentDidMount = () => {
        this.worker = new WebWorker(worker);
    };

    render() {
        return (
            <div className="App-bottom">
                <h2>Web worker</h2>
                <section className="App-left">
                    <p className="text-center">Total User Count: {this.state.count}</p>
                    <button className="btn-direct" onClick={this.fetchUsers}>
                        Fetch Users Directly
                    </button>
                </section>
                <section className="App-right">
                    <p className="text-center">Total User Count: {this.state.count}</p>
                    <button className="btn-worker" onClick={this.fetchWebWorker}>
                        Fetch Users with Web Worker
                    </button>
                </section>
            </div>
        );
    }
}

export default Webworker;