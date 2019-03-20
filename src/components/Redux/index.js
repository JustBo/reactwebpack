import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetch, addUser} from '../../store/actions';
import PropTypes from 'prop-types';

class Redux extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    handleAddUser = () => this.props.addUser();

    render() {
        const {users} = this.props;
        return (
            <div>
                {Object.keys(users).map((item, key) => <div key={key}>{users[item].name}</div>)}
                <button onClick={this.handleAddUser}>
                    Add user
                </button>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        users: state.users
    }
}

Redux.propTypes = {
    users: PropTypes.object,
    fetch: PropTypes.func,
    addUser: PropTypes.func,
};

export default connect(MapStateToProps, { fetch, addUser })(Redux);