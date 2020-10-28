import React from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import PropTypes from "prop-types"

function SaveConfig(props) {
    /**
     * save() Save Config
     */
    async function save() {
        // Get Screenshot
        const canvas = await html2canvas(document.body)

        // Create PDF
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF()

        // Add Screenshot to PDF
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

        // Add config
        pdf.setFontSize("12")
        pdf.text(getConfig(), 10, 100, { align: "left", maxWidth: 100 })

        // Save PDF
        pdf.save("elixir-config.pdf")
    }

    /**
     * getConfig() Get CSS root variables
     */
    function getConfig() {
        let config = {}
        const { colours, fonts } = props.template.settings


        // Colours
        colours.forEach((colour) => {
            config[colour.variable] = getVariable(colour.variable)
        })

        // Fonts
        fonts.forEach((font) => {
            config[font.variable] = getVariable(font.variable)
        })

        return JSON.stringify(config)
    }

    /**
     * getVariable() Get CSS variable
     */
    function getVariable(variable) {
        return getComputedStyle(document.documentElement).getPropertyValue(
            `--${variable}`
        )
    }

    return (
        <div className="fd_ec_save_config">
            <hr />
            <div id="fd_ec_preview"></div>

            <button onClick={save}>Save Screenshot</button>
        </div>
    )
}

export default SaveConfig

SaveConfig.propTypes = {
    template: PropTypes.object.isRequired,
}
