import React from "react"

function SectionHeader(props) {
    return (
        <div className="fd_ec_section_header">
            <h4 className="title">{props.children}</h4>
            <hr />
        </div>
    )
}

export default SectionHeader
