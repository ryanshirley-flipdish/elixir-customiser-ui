import React from "react"
import { ChromePicker } from "react-color"

import "../scss/App.scss"

class customiser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            main_bg_color: "red",
            main_bg_color_alternate: "#fff",
            second_bg_color: "#f7f7f7",
            heading_font: "Libre Baskerville",
            main_font: "Josefin Sans",
            heading_font_color: "#006341",
            body_font_color: "#595959",
            heading_font_color_inverse: "#006341",
            body_font_color_inverse: "#595959",
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("Updating Colours")

        document.documentElement.style.setProperty(
            "--main-bg-color",
            this.state.main_bg_color
        )

        // document.documentElement.style.setProperty(
        //     "--main-bg-color-alternate",
        //     "white"
        // )
        // document.documentElement.style.setProperty("--body-font-color", "black")
        // document.documentElement.style.setProperty(
        //     "--heading-font-color",
        //     this.getRandomColor()
        // )
    }

    handleChangeComplete = (color, event) => {
        console.dir(event)
        this.setState({ main_bg_color: color.hex })

        this.handleClick()
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
                <p>Main Colour</p>
                <ChromePicker 
                    color={this.state.main_bg_color}
                    onChangeComplete={this.handleChangeComplete}
                />

                <button onClick={this.handleClick}>Change Colours</button>
            </div>
        )
    }
}

export default customiser
