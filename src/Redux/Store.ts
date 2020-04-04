import {applyMiddleware, combineReducers, createStore} from "redux";
import optionsReducer from "./Reducers/OptionsReducer/options-reducer";
import environmentReducer from "./Reducers/EnvironmentReducer/environment-reducer"
import startReducer from "./Reducers/start-reducer";
import finishReducer from "./Reducers/finish-reducer";
import thunkMiddleware from "redux-thunk";


let rootReducer = combineReducers({
        Start: startReducer,
        Options: optionsReducer,
        Environment: environmentReducer,
        Finish: finishReducer
    }
);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//                  applyMiddleware ^, якщо треба буде використовувати санки

export default store;