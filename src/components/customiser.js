import React, { useState } from "react"
import config from "../config"

// Styling
import "../scss/App.scss"

// Components
import SectionHeader from "./SectionHeader"
import ColourPicker from "./pickers/ColourPicker"
import TemplatePicker from "./pickers/TemplatePicker"
import FontPicker from "./pickers/FontPicker"

function Customiser() {
    const [open, setOpen] = useState(true)
    const [selectedTemplate, setSelectedTemplate] = useState()
    const [loading, setLoading] = useState(false)
    const { elixirs } = config

    return (
        <>
            <div className="fd_ec_header" onClick={() => setOpen(!open)}>
                <h3>Customise Website</h3>
            </div>
            <div className={"fd_ec_body" + (open ? " fd_ec_body_open" : "")}>
                <SectionHeader>Template</SectionHeader>
                <TemplatePicker
                    setSelectedTemplate={setSelectedTemplate}
                    selectedTemplate={selectedTemplate}
                    setLoading={setLoading}
                />

                {loading ? (
                    "Loading..."
                ) : selectedTemplate ? (
                    <>
                        <SectionHeader>Colours</SectionHeader>
                        {elixirs[selectedTemplate].settings.colours.map(
                            (setting) => (
                                <ColourPicker
                                    setting={setting}
                                    key={setting.variable}
                                />
                            )
                        )}

                        <SectionHeader>Fonts</SectionHeader>
                        {elixirs[selectedTemplate].settings.fonts.map(
                            (setting) => (
                                <FontPicker
                                    setting={setting}
                                    key={setting.variable}
                                />
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
