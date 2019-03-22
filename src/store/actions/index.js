import * as types from './actionTypes';

// Action Creators

// fetch users
export const fetchUsers = () => {
    return types.fetchUsers.trigger()
};
// add user
export const addUser = () => {
    return types.addUser.trigger()
};