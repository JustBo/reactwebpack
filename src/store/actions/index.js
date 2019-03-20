import * as types from './actionTypes';

const initial = {
    1: {
        name: 'Bohdan'
    },
    2: {
        name: 'Ivan'
    }
};

export function fetch() {
    return {
        type: types.FETCH_USERS,
        payload: initial
    }
}

export function addUser() {
    return {
        type: types.ADD_USER,
        payload: "new user"
    }
}