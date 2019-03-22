import {call} from 'redux-saga/effects';

import MaybeWorker from './maybeWorker';

export const is = {
    func: (fn) => fn && {}.toString.call(fn) === '[object Function]',
};

export const makeEffect = fn => payload => is.func(fn) ? call(fn, payload) : fn;

export const makeMapper = map => is.func(map) ? map : () => map;

export const pipe = (...ops) => ops.reduce((a, b) => (arg) => b(a(arg)));

export const noop = (args) => args;

export function request(api, ...args) {
    const callEffect = call(api, ...args);
    return new MaybeWorker(callEffect);
}