import React from "react"
import html2canvas from "html2canvas"

function SaveConfig() {
    /**
     * saveConfig() Save Config
     */
    function saveConfig() {
        html2canvas(document.body).then(function (canvas) {
            var image = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream")

                console.log(image);

            // var a = document.createElement("a")
            // a.setAttribute("download", "elixir-screenshot.png")
            // a.setAttribute("href", image)
            // a.click()
        })
    }

    return (
        <div className="fd_ec_save_config">
            <hr />
            <div id="fd_ec_preview"></div>

            <button onClick={saveConfig}>Save Screenshot</button>
        </div>
    )
}

export default SaveConfig
