import React from "react"
import { Link } from "react-router-dom"

import Customiser from "../../components/customiser"

function home() {
    return (
        <>
            <h1>Flipdish Elixir Customiser UI</h1>
            <h3>Development Environment</h3>

            <div id="fd_customiser">
                <Customiser />
            </div>
        </>
    )
}

export default home
