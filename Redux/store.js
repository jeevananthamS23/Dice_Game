import {
    combineReducers,
    createStore
} from "redux";

const InitialState = {
    value: 0
};

const val = 0;

function Increment(state = val, action) {
    switch (action.type) {
        case 'INC':
            const val1 = state;
            return val1 + 1;
        case 'DEC':
            const val2 = state;
            return val2 - 1;
        default:
            return state;
    }
}


function Counter(state = InitialState, action) {
    switch (action.type) {
        case 'INC':
            const val1 = state.value;
            return {
                value: val1 + 1
            };
        case 'DEC':
            const val2 = state.value;
            return {
                value: val2 - 1
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: Counter,
    Inc: Increment
})

const store = createStore(rootReducer);

export default store;