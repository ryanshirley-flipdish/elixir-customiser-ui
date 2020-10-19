import React from "react"

// Styling
import "../scss/App.scss"

// Components
import SectionHeader from "./SectionHeader"
import ColourPicker from "./ColourPicker"

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
    }

    render() {
        return (
            <>
                <div className="fd_ec_header">
                    <h3>Customise Website</h3>
                </div>
                <div className="fd_ec_body">
                    <SectionHeader>Colours</SectionHeader>
                    <ColourPicker variable="main-bg-color" title="Main Background" />
                    <ColourPicker variable="main-bg-color-alternate" title="Alternate Background" />
                    <ColourPicker variable="heading-font-color" title="Headings" />
                    <ColourPicker variable="body-font-color" title="Body" />
                </div>
            </>
        )
    }
}

export default customiser
