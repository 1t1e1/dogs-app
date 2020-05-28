import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.isExact}
                        component={route.component}
                    ></Route>
                ))}
            </Switch>
        </div>
    );
}

export default App;
