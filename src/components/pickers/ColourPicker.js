import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ChromePicker } from "react-color"

function ColourPicker(props) {
    const { setting } = props
    const [display, setDisplay] = useState(false)
    const [colour, setColour] = useState()
    const blackRgb = {
        r: 0,
        g: 0,
        b: 0,
    }
    const [rgb, setRgb] = useState(blackRgb)

    useEffect(() => {
        if (!colour) {
            const c = getComputedStyle(
                document.documentElement
            ).getPropertyValue(`--${setting.variable}`)

            setColour(c)

            if (!c) {
                // No colour value set
                setRgb(blackRgb)
            } else {
                if (!setting.forceRGB) {
                    // Hex
                    const srgb = hexToRgb(c)
                    setRgb(srgb ? srgb : blackRgb)
                } else {
                    // RGB string
                    const rgbArray = c
                        .substring(4, c.length - 1)
                        .replace(/ /g, "")
                        .split(",")

                    setRgb({
                        r: rgbArray[0],
                        g: rgbArray[1],
                        b: rgbArray[2],
                    })
                }
            }
        }
    }, [colour, setting.variable])

    /**
     * handleChangeComplete() Handle Colour picked event
     */
    function handleChangeComplete(color) {
        // Set colour state & root variable
        setColour(color.hex)
        setRgb(color.rgb)

        if (setting.forceRGB) {
            document.documentElement.style.setProperty(
                `--${setting.variable}`,
                `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`
            )
        } else {
            document.documentElement.style.setProperty(
                `--${setting.variable}`,
                color.hex
            )
        }
    }

    /**
     * hexToRgb() Convert hex to RGB
     */
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null
    }

    return (
        <div className="fd_ec_colour_picker">
            <p className="name">{setting.name}</p>

            <div
                className="fd_ec_colour_swatch"
                onClick={() => setDisplay(!display)}
            >
                <div
                    style={{
                        background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1})`,
                    }}
                />
            </div>

            {display ? (
                <div className="popover">
                    <div className="cover" onClick={() => setDisplay(false)} />
                    <ChromePicker
                        color={colour}
                        onChange={handleChangeComplete}
                    />
                </div>
            ) : null}

            <small>{setting.description}</small>
        </div>
    )
}

export default ColourPicker

ColourPicker.propTypes = {
    setting: PropTypes.exact({
        name: PropTypes.string.isRequired,
        variable: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        forceRGB: PropTypes.bool.isRequired,
    }).isRequired,
}
