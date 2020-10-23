import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Select from "react-select"

// Available Font
import config from "../config"

function FontPicker(props) {
    const availableFonts = props.settings.type === 'heading' ? config.fonts.heading : config.fonts.body
    const options = availableFonts.map(font => {
        return {
            value: font,
            label: font,
        }
    })

    return (
        <div className="fd_ec_font_picker">
            <p className="name">{props.settings.name}</p>

            <Select
                options={options}
                className="fd_ec_select"
            />
            <small>{props.settings.description}</small>
        </div>
    )
}

export default FontPicker

FontPicker.propTypes = {
    settings: PropTypes.exact({
        name: PropTypes.string.isRequired,
        variable: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}
