import React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router'
import BaseStylesPage from "../pages/BaseStylesPage.jsx";
import ComponentsPage from "../pages/ComponentsPage.jsx";
import InputsPage from "../pages/InputsPage.jsx"

export const HomePath = "/";
export const ComponentsPagePath = "components";
export const InputsPagePath = "inputs";

const App = () =>
    <Router history={browserHistory}>
        <Route
            path={HomePath}
        >
            <IndexRoute component={BaseStylesPage}/>
            <Route
                path={ComponentsPagePath}
                component={ComponentsPage}
            />
            <Route
                path={InputsPagePath}
                component={InputsPage}
            />
        </Route>
    </Router>

export default App
