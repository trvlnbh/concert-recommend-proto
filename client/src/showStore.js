import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddlware from "redux-thunk";
import { createLogger } from "redux-logger";
import movieBrowserReducer from "./components/show/show-browser/showbrowserReducers";

const rootReducer = combineReducers({
    movieBrowser: movieBrowserReducer
});

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(
            thunkMiddlware,
            loggerMiddleware
        )
    )
);

export default store;

// 삭제하셈