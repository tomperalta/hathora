import React from "react"
import styled from "styled-components"
import Logo from "components/logo"
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

const HeaderContainer = styled.header`
	width: 100%;

	background: ${colors.grey__700};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px;
	margin-top: 32px;

	${breakpoint.medium`
    height: 104px;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0;
  `}
`

const LogoWrapper = styled.div`
	width: 80px;
	height: 20px;

	${breakpoint.medium`
    width: 230px;
    height: 40px;
  `}
`

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`

const ContactLink = styled.a`
	color: ${colors.green__500};
	text-decoration: none;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px;

	${breakpoint.medium`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  `}
`

const CaseStudyButton = styled.a`
	background: transparent;
	border: 1px solid ${colors.green__500};
	color: ${colors.green__500};
	text-decoration: none;
	transition: all 0.2s ease;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px;
	border-radius: 8px;
	padding: 4px 8px;

	&:hover {
		background: ${colors.green__500};
		color: ${colors.grey__700};
	}

	${breakpoint.medium`
    padding: 6px 16px;
    border-radius: 45px;
    font-size: 1rem;
  `}
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
