import React from "react"
import { render } from "@testing-library/react"
import Customiser from "./customiser"

test("renders learn react link", () => {
    const { getByText } = render(<Customiser />)
    const linkElement = getByText(/FD Template Customiser/i)
    expect(linkElement).toBeInTheDocument()
})
