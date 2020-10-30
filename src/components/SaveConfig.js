import React from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import PropTypes from "prop-types"
import "jspdf-autotable"

function SaveConfig(props) {
    /**
     * save() Save Config
     */
    async function save() {
        // Get Screenshot
        const canvas = await html2canvas(document.body)

        // Create PDF
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({ orientation: "l" })

        // Add Screenshot to PDF
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const imageResizedHeight = (imgProps.height * pdfWidth) / imgProps.width
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imageResizedHeight)

        // Add second page
        pdf.addPage("a4", "l")

        // Headings
        pdf.setFontSize("18")
        pdf.text(`Config: ${props.template.label}`, 15, 20)
        pdf.setFontSize("8")
        pdf.text("Flipdish staff use only", 15, 25)

        // Config Table
        pdf.autoTable({
            head: [["Property", "Value"]],
            body: getConfig(),
            startY: 30,
            tableWidth: 100,
        })

        // Save PDF
        pdf.save(`elixir-config-${props.template.label.replace(" ", "-")}.pdf`)
    }

    /**
     * getConfig() Get CSS root variables
     */
    function getConfig() {
        let config = []
        const { colours, fonts } = props.template.settings

        // Colours
        colours.forEach((colour) => {
            config.push([`--${colour.variable}`, getVariable(colour.variable)])
        })

        // Fonts
        fonts.forEach((font) => {
            config.push([`--${font.variable}`, getVariable(font.variable)])
        })

        return config
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
