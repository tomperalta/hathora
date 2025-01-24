import React from "react"
import styled from "styled-components"
import Logo from "components/logo"

const FooterContainer = styled.footer`
	width: 100%;
	background: #0a0a19;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	margin-top: 250px;
`

const LogoWrapper = styled.div`
	svg {
		width: 120px;
		height: auto;
	}
`

const Footer = () => (
	<FooterContainer>
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
	</FooterContainer>
)

export default Footer
