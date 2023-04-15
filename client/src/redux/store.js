// import {createStore, applyMiddleware, compose} from "redux";
// import rootReducer from "./reducer";
// import thunkMiddleware from "redux-thunk";


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// )

// export default store;

import reducer from "./reducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;

