import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';
import root from './reducer';
import main from './components/mainview/reducer';
import { reducer as form } from 'redux-form';  
import client from './components/client/reducer';
import signup from './components/signup/reducer';
import login from './components/login/reducer';
import createSagaMiddleware from 'redux-saga';  
import { routeChanged } from './actions';
import IndexSagas from './components/index-sagas';


// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();


const initialState = {};

export const history = createHistory();

const middleware = [
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(sagaMiddleware)
];

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */



// if (window.devToolsExtension) 
//     middleware.push(window.devToolsExtension());

export const store = createStore(
    combineReducers({ root, main, form, client, signup, login, router: routerReducer }),
    initialState,
    // composeSetup(applyMiddleware(sagaMiddleware)), 
    compose(...middleware)
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

history.listen((location, action) => {
    store.dispatch(routeChanged())
});

store.dispatch(routeChanged());

