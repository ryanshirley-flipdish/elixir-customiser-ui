import React, { useState, useEffect } from "react"
import config from "../config"

// Styling
import "../scss/App.scss"

// Components
import Select from "react-select"
import SectionHeader from "./SectionHeader"
import ColourPicker from "./ColourPicker"
import FontPicker from "./FontPicker"

function Customiser() {
    const [open, setOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [selectedTemplate, setSelectedTemplate] = useState()

    /**
     * handleTemplateChange() - Handle changing templates
     */
    function handleTemplateChange(newTemplate) {
        setLoading(true)

        // Remove old stylesheets
        var oldCSS = document.getElementById("elixirTemplate")
        if (oldCSS) oldCSS.parentNode.removeChild(oldCSS)

        // Add new stylesheets
        var newCSS = document.createElement("link")
        newCSS.id = "elixirTemplate"
        newCSS.rel = "stylesheet"
        newCSS.href = elixirs[newTemplate].css
        document.head.appendChild(newCSS)

        setTimeout(() => {
            setSelectedTemplate(newTemplate)
            setLoading(false)
        }, 1000)
    }

    // Format Elixir List
    const { elixirs } = config
    const options = []
    for (const [key, elixir] of Object.entries(elixirs)) {
        options.push({
            value: key,
            label: elixir.label,
        })
    }

    return (
        <>
            <div className="fd_ec_header" onClick={() => setOpen(!open)}>
                <h3>Customise Website</h3>
            </div>
            <div className={"fd_ec_body" + (open ? " fd_ec_body_open" : "")}>
                <SectionHeader>Template</SectionHeader>
                <Select
                    options={options}
                    onChange={(temp) => handleTemplateChange(temp.value)}
                    className="fd_ec_select"
                />

                {loading ? 'Loading...' : selectedTemplate ? (
                    <>
                        <SectionHeader>Colours</SectionHeader>
                        {elixirs[selectedTemplate].settings.colours.map(
                            (setting) => (
                                <>
                                    <ColourPicker
                                        variable={setting.variable}
                                        title={setting.name}
                                        key={setting.variable}
                                        forceRGB={setting.forceRGB}
                                    />
                                    <small>{setting.description}</small>
                                </>
                            )
                        )}

                        <SectionHeader>Fonts</SectionHeader>
                        {elixirs[selectedTemplate].settings.fonts.map(
                            (setting) => (
                                <>
                                    <FontPicker
                                        setting={setting}
                                        ket={setting.variable}
                                    />
                                </>
                            )
                        )}
                    </>
                ) : (
                    "No template selected"
                )}
            </div>
        </>
    )
}

export default Customiser
