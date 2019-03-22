import {createRoutine} from 'redux-saga-routines';

export const fetchUsers = createRoutine('FETCH_USERS');
export const addUser = createRoutine('ADD_USER');

// export const FETCH_USERS = 'FETCH_USERS';
// export const FETCH_USER_START = 'FETCH_USER_START';
// export const FETCH_USER_SUCESS = 'FETCH_USER_SUCESS';
// export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

// export const ADD_USER = 'ADD_USER';
// export const ADD_USER_START = 'ADD_USER_START';
// export const ADD_USER_SUCESS = 'ADD_USER_SUCESS';
// export const ADD_USER_FAIL = 'ADD_USER_FAIL';