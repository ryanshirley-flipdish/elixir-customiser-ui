import React, { useState } from "react"
import PropTypes from "prop-types"
import Select from "react-select"

// Available Font
import config from "../../config"

function FontPicker(props) {
    const { setting } = props,
        availableFonts =
            setting.type === "heading"
                ? config.fonts.heading
                : config.fonts.body,
        options = availableFonts.map((font) => {
            return {
                value: font,
                label: font,
            }
        })
    const [font, setFont] = useState(getFont)

    /**
     * getFont() Returns font
     */
    function getFont() {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(`--${setting.variable}`)
            .replaceAll('"', "")
    }

    /**
     * handleFontChange() Handle font change event
     */
    function handleFontChange(font) {
        // Remove font from google fonts
        var oldFont = document.getElementById(`fd-ec-${setting.variable}`)
        if (oldFont) oldFont.parentNode.removeChild(oldFont)

        // Add new font
        var newCSS = document.createElement("link")
        newCSS.id = `fd-ec-${setting.variable}`
        newCSS.rel = "stylesheet"
        newCSS.href = `https://fonts.googleapis.com/css2?family=${font.replaceAll(' ', '+')}&display=swap`
        document.head.appendChild(newCSS)

        // Set colour state & root variable
        setFont(font)

        document.documentElement.style.setProperty(
            `--${setting.variable}`,
            `"${font}"`
        )
    }

    return (
        <div className="fd_ec_font_picker">
            <p className="name">{setting.name}</p>

            <Select
                options={options}
                defaultValue={{
                    label: font,
                    value: font,
                }}
                onChange={(font) => handleFontChange(font.value)}
                className="fd_ec_select"
            />
            <small>{setting.description}</small>
        </div>
    )
}

export default FontPicker

FontPicker.propTypes = {
    setting: PropTypes.exact({
        name: PropTypes.string.isRequired,
        variable: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}
