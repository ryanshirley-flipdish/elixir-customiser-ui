import React, { useState } from "react"
import { ChromePicker } from "react-color"

function ColourPicker(props) {
    const [display, setDisplay] = useState(false)

    /**
     * handleChangeComplete() Handle Colour pixked event
     */
    function handleChangeComplete (color) {
        // this.setState({ main_bg_color: color.hex })
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
                    <ChromePicker onChangeComplete={handleChangeComplete} />
                </div>
            ) : null}
        </div>
    )
}

export default ColourPicker
