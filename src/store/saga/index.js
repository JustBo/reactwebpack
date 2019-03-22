import { all, fork, takeEvery } from 'redux-saga/effects';

import * as types from "../actions/actionTypes";
import {fetchUserAsync, addUserAsync} from "./users";

export function* watchFetchUsers() {
    yield takeEvery(types.fetchUsers.trigger().type, fetchUserAsync);
}

export function* watchAddUser() {
    yield takeEvery(types.addUser.trigger().type, addUserAsync);
}

export default function* saga() {
    yield all([
        fork(watchFetchUsers),
        fork(watchAddUser),
    ])
}