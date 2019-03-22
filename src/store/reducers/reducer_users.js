import * as types from '../actions/actionTypes';

import {createReducer} from './createReducer';

const initialState = {
    data: [],
    loading: false,
    error: ''
};

const userReducer = {
    [types.fetchUsers]: {
        REQUEST: (state) => ({...state, data: [...state.data], loading: true}),
        SUCCESS: (state, payload) => ({...state, data: [...state.data, ...payload]}),
        FAILURE: (state, payload) => ({...state, data: [...state.data, ...payload], error: 'error in fetching users'}),
        FULFILL: (state) => ({...state, data: [...state.data], loading: false}),
    },
    [types.addUser]: {
        REQUEST: (state) => ({...state, data: [...state.data], loading: true}),
        SUCCESS: (state, payload) => ({...state, data: [...state.data, payload]}),
        FAILURE: (state, payload) => ({...state, data: [...state.data, ...payload], error: 'error in adding users'}),
        FULFILL: (state) => ({...state, data: [...state.data], loading: false})
    },
};

export default createReducer(userReducer, initialState);