import React, {Component} from 'react';
import {connect} from "react-redux";

import PropTypes from 'prop-types';

import {fetchUsers, addUser} from "../../store/actions";

class Redux extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleAddUser = () => this.props.addUser();

    render() {
        const {users} = this.props;
        return (
            <div>
                {users.data.map((item, key) => <div key={key}>{item.name}</div>)}
                {users.loading && <div>Loading...</div>}
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
    fetchUsers: PropTypes.func,
    addUser: PropTypes.func
};

export default connect(MapStateToProps, {fetchUsers, addUser})(Redux);