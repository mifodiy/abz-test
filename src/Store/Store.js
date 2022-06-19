import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import usersReducer from '../Redux/Users/UsersReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga  from './../Redux/Users/UsersSagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    users: usersReducer,
    form: formReducer
});

const middlewares = applyMiddleware(thunk, sagaMiddleware);

const store = createStore(reducers, middlewares);
sagaMiddleware.run(rootSaga);


export default store;
