import * as types from '../actions/actionTypes';
import {request} from '../../utils';

const initial = [
    {
        name: 'Bohdan'
    },
    {
        name: 'Ivan'
    }
];

export function* fetchUserAsync() {
    const fetchData = new Promise(resolve => setTimeout(() => resolve(initial), 2000));
    yield request(() => fetchData)
        .bind(types.fetchUsers)
        .some(() => console.log('Success'))
        .none(() => console.log('Failed'))
        .run();
}

export function* addUserAsync() {
    const fetchData = new Promise(resolve => setTimeout(() => resolve({name: 'Vlad'}), 2000));
    yield request(() => fetchData)
        .bind(types.addUser)
        .some(() => console.log('Success'))
        .none(() => console.log('Failed'))
        .run();
}