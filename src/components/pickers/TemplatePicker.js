import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import config from "../../config"

function TemplatePicker(props) {
    const { setLoading, setSelectedTemplate } = props

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
        }, 500)
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
        <Select
            options={options}
            isSearchable={false}
            onChange={(temp) => handleTemplateChange(temp.value)}
            className="fd_ec_select"
        />
    )
}

export default TemplatePicker

TemplatePicker.propTypes = {
    setLoading: PropTypes.func.isRequired,
    setSelectedTemplate: PropTypes.func.isRequired,
}
