import React from "react"
import styled from "styled-components"
import Logo from "components/logo"
import { colors } from "utils/variables"

const HeaderContainer = styled.header`
	width: 100%;
	height: 104px;
	background: ${colors.grey__700};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 160px;
`

const LogoWrapper = styled.div`
	width: 230px;
	height: 40px;
`

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`

const ContactLink = styled.a`
	color: ${colors.green__500};
	text-decoration: none;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
`

const CaseStudyButton = styled.a`
	background: transparent;
	border: 1px solid ${colors.green__500};
	color: ${colors.green__500};
	padding: 6px 16px;
	border-radius: 45px;
	text-decoration: none;
	font-size: 1rem;
	transition: all 0.2s ease;

	&:hover {
		background: ${colors.green__500};
		color: ${colors.grey__700};
	}
`

const Header = () => (
	<HeaderContainer>
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
		<NavLinks>
			<ContactLink href="/contact">Contact Us</ContactLink>
			<CaseStudyButton href="/case-study">Get the case study</CaseStudyButton>
		</NavLinks>
	</HeaderContainer>
)

export default Header
