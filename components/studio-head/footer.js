import React from "react"
import styled from "styled-components"
import Logo from "components/logo"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

const FooterContainer = styled.footer`
	width: 100%;
	height: 50px;
	background: ${colors.grey__700};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 64px;
	padding-bottom: 24px;
`

const LogoWrapper = styled.div`
	width: 120px;
	height: 20px;

	${breakpoint.medium`
    width: 230px;
		height: 40px;
  `}
`

const Footer = () => (
	<FooterContainer>
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
	</FooterContainer>
)

export default Footer
