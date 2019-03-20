import * as types from '../actions/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return {...state, ...action.payload};
        case types.ADD_USER:
            return {...state, 4: {name: action.payload}};
    }
    return state;
}