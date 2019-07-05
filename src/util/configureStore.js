import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../store';

export default function configureStore(history, initialState) {
  // Build middleware. These are functions that can process the actions before they reach the store.
  const windowIfDefined = typeof window === 'undefined' ? null : window;

  // If devTools is installed, connect to it
  const devToolsExtension =
    windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    devToolsExtension ? devToolsExtension() : next => next
  )(createStore);

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer();
  const store = createStoreWithMiddleware(allReducers, initialState);

  return store;
}

function buildRootReducer() {
  return combineReducers(
    Object.assign({}, reducers, {
      routing: routerReducer
    })
  );
}
