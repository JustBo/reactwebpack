import {call, put} from 'redux-saga/effects';

import {noop, pipe, makeEffect, makeMapper} from '.';

class MaybeWorker {
    constructor(maybeEffect) {
        this.maybeEffect = maybeEffect;
        this.someWorker = noop;
        this.noneWorker = noop;
        this.successMapper = noop;
    }

    /**
     * Perform action if Maybe returned Some result
     * You can pass a function, generator or saga effect
     */
    some(worker) {
        this.someWorker = makeEffect(worker);
        return this;
    }

    /**
     * Perform action if Maybe returned None result
     * You can pass a function, generator or saga effect
     */
    none(worker) {
        this.noneWorker = makeEffect(worker);
        return this;
    }

    /**
     * Returns create redux saga call effect
     */
    run() {

        const dispatchRoutines = !!this.routine;

        const runner = function* () {

            if (dispatchRoutines) {
                yield put(this.routine.request())
            }

            try {
                const some = yield this.maybeEffect;
                if (dispatchRoutines) {
                    yield pipe(
                        this.successMapper,
                        this.routine.success,
                        put
                    )(some);
                }

                yield this.someWorker(some);

                return {some};

            } catch (error) {
                if (dispatchRoutines) {
                    yield pipe(
                        this.failureMapper,
                        this.routine.failure,
                        put
                    )(error);

                }

                yield this.noneWorker(error);

                return {none: error};
            } finally {
                if (dispatchRoutines) {
                    yield put(this.routine.fulfill());
                }
            }
        };
        return call([this, runner])
    }

    bind(routine) {
        this.routine = routine;
        return this;
    }

    /**
     * Provide some value mapper which will be passed to routine.success
     * @param {any} map mapping function which accepts Some argument or any value
     * @returns {MaybeWorker}
     */
    mapSuccess(map) {
        this.successMapper = makeMapper(map);
        return this;
    }

    /**
     * Provide none value mapper which will be passed to routine.failure
     * @param {any} map mapping function which accepts Some argument or any value
     * @returns {MaybeWorker}
     */
    mapFailure(map) {
        this.failureMapper = makeMapper(map);
        return this;
    }
}

export default MaybeWorker;
