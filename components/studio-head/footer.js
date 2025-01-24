import React from "react"
import styled from "styled-components"
import Logo from "components/logo"
import { colors } from "utils/variables"

const FooterContainer = styled.footer`
	width: 100%;
	height: 104px;
	background: ${colors.grey__700};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 160px;
`

const LogoWrapper = styled.div`
	width: 230px;
	height: 40px;
`

const Footer = () => (
	<FooterContainer>
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
	</FooterContainer>
)

export default Footer
