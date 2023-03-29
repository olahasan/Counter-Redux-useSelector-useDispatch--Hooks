import { createStore } from "redux";
import reducer from './CombineReducers';

const devToolExtention =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devToolExtention)
export default store;