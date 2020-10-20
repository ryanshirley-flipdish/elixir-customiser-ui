import React, { useState } from "react"
import { ChromePicker } from "react-color"

function ColourPicker(props) {
    const [display, setDisplay] = useState(false)
    const [colour, setColour] = useState(getComputedStyle(document.documentElement).getPropertyValue(`--${props.variable}`))

    /**
     * handleChangeComplete() Handle Colour picked event
     */
    function handleChangeComplete (color) {
        // Set colour state & root variable
        setColour(color.hex)

        document.documentElement.style.setProperty(
            `--${props.variable}`,
            color.hex
        )
    }

    return (
        <div>
            <p className="name">{props.title}</p>

            <button onClick={() => setDisplay(!display)}>Pick Color</button>

            {display ? (
                <div className="popover">
                    <div className="cover" onClick={() => setDisplay(false)} />
                    <ChromePicker color={colour} onChangeComplete={handleChangeComplete} />
                </div>
            ) : null}
        </div>
    )
}

export default ColourPicker
