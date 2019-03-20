import { createStore} from 'redux';

const configureStore = reducers => {
		return createStore(reducers);
};

export default configureStore;