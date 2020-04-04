import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Redux/Store";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {withSuspense} from "./HOCs/withSuspense";
import StartPageContainer from "./Components/StartPage/StartPageContainer";
import EnvironmentContainer from "./Components/Environment/EnvironmentContainer";


const App = () => {
    return (
        <Switch>
            <Route exact path="/"
                   render={withSuspense(StartPageContainer)}/>
            <Route exact path="/ride"
                   render={withSuspense(EnvironmentContainer)}/>
            {/*<Route path="/finish"*/}
            {/*       render={withSuspense(FinishPage)}/>*/}
            <Route exact path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>
    );
};


const BicycleApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

export default BicycleApp;

// <div className="App">
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//         <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Learn React
//         </a>
//     </header>
// </div>