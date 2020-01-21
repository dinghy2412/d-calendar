import { createStore, applyMiddleware, compose } from 'redux';
import {promiseMiddleware, registerModal} from 'Src/kredux';
import Modals from 'Src/modal/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

const middlewares = [
    promiseMiddleware()
];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
    // middlewares.push(require('redux-logger').createLogger());
}

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

export default function configStore() {
    const store = createStore(() => ({}), enhancer);
    Modals.forEach((item) => {
        registerModal(item, store);
    });
    return store;
}
