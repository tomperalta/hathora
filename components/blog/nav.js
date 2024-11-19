import React from "react"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"

const NavContainer = styled(Container)`
	border: 1px solid coral;
	margin-top: 143px;
	padding: 24px 0;
`

export default function Nav() {
	return <NavContainer>Nav</NavContainer>
}
