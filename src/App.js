import React from "react"

import "./App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("changing")
        document.documentElement.style.setProperty(
            "--main-bg-color",
            this.getRandomColor()
        )
        document.documentElement.style.setProperty(
            "--main-bg-color-alternate",
            "white"
        )
        document.documentElement.style.setProperty("--body-font-color", "black")
        document.documentElement.style.setProperty(
            "--heading-font-color",
            this.getRandomColor()
        )
    }

    getRandomColor() {
        var letters = "0123456789ABCDEF"
        var color = "#"
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    render() {
        return (
            <div>
                <h1>FD Template Customiser</h1>
                <button onClick={this.handleClick}>Random Colour</button>
            </div>
        )
    }
}

export default App
