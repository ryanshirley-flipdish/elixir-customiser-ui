import React, { useState } from "react"

// Styling
import "../scss/App.scss"

// Components
import SectionHeader from "./SectionHeader"
import ColourPicker from "./ColourPicker"

function Customiser() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="fd_ec_header" onClick={() => setOpen(!open)}>
                <h3>Customise Website</h3>
            </div>
            <div className={"fd_ec_body" + (open ? " fd_ec_body_open" : "")}>
                <SectionHeader>Colours</SectionHeader>
                <ColourPicker
                    variable="main-bg-color"
                    title="Main Background"
                />
                <ColourPicker
                    variable="main-bg-color=alternate"
                    title="Main Background Alternate"
                />
                <ColourPicker
                    variable="second-bg-color"
                    title="Second Background"
                />
                <ColourPicker variable="heading-font-color" title="Headings" />
                <ColourPicker variable="body-font-color" title="Body" />
                <ColourPicker variable="heading-font-color-inverse" title="Headings Inverse" />
                <ColourPicker variable="body-font-color-inverse" title="Body Inverse" />
            </div>
        </>
    )
}

export default Customiser
