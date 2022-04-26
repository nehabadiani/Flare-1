import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllEventsReducer } from './reducers/events';

const rootReducer = combineReducers({
    events:getAllEventsReducer
});

const initialState ={

};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;