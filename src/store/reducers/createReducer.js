const typeDelimiter = '/';

const makeType = (prefix, type) => prefix.concat(type).join(typeDelimiter);

const extractType = (type) => {
    const sagaRoutineEnding = '/TRIGGER';
    if (type.endsWith(sagaRoutineEnding)) {
        return type.substring(0, type.length - sagaRoutineEnding.length);
    }
    return type;
}

const iterator = (reducers = {}, initial = {}, prefix = []) => {
    const reducerTypes = Object.keys(reducers);

    return reducerTypes.reduce((acc, type) => {
        const reducer = reducers[type];

        return typeof (reducer) === 'function'
            ? ({
                ...acc,
                [makeType(prefix, type)]: reducer
            })
            : iterator(
                reducer,
                acc,
                [makeType(prefix, extractType(type))]
            )
    }, initial);
}

export function createReducer(reducerMap, initialState) {
    const flattened = iterator(reducerMap);

    return (state = initialState, action) => {
        const reducer = flattened[action.type];
        return reducer ? reducer(state, action.payload) : state;
    }
}