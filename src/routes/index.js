import React from "react"

// Pages
import Home from "./home/home"
import Error404 from "./404"

const routes = [
    { name: "Home", path: "/", exact: true, main: () => <Home /> },
    {
        name: "404",
        main: () => <Error404 />,
    },
]

export default routes