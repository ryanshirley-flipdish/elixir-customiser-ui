import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.scss"
import routes from "./routes"

function App() {

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default App