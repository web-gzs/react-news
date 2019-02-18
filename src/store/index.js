import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import state from './state';
import thunk from 'redux-thunk';
let store = createStore(
    reducer,
    state,
    applyMiddleware(thunk)
) 

export default store