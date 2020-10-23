import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ChromePicker } from "react-color"

function ColourPicker(props) {
    const [display, setDisplay] = useState(false)
    const [colour, setColour] = useState(false)

    useEffect(() => {
        if (!colour) {
            setColour(
                getComputedStyle(document.documentElement).getPropertyValue(
                    `--${props.variable}`
                )
            )
        }
    }, [colour, props.variable])

    /**
     * handleChangeComplete() Handle Colour picked event
     */
    function handleChangeComplete(color) {
        // Set colour state & root variable
        setColour(color.hex)

        if (props.forceRGB) {
            document.documentElement.style.setProperty(
                `--${props.variable}`,
                `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`
            )
        } else {
            document.documentElement.style.setProperty(
                `--${props.variable}`,
                color.hex
            )
        }
    }

    return (
        <div className="fd_ec_colour_picker">
            <p className="name">{props.title}</p>

            <button onClick={() => setDisplay(!display)}>Pick Color</button>

            {display ? (
                <div className="popover">
                    <div className="cover" onClick={() => setDisplay(false)} />
                    <ChromePicker
                        color={colour}
                        onChange={handleChangeComplete}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default ColourPicker

ColourPicker.propTypes = {
    variable: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    forceRGB: PropTypes.bool.isRequired,
}
