import React, { useState } from "react"

// Libraries
import styled from "styled-components"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/components/accordion/icon-arrow-down.svg"
import { colors } from "utils/variables"
import { AccordionProps } from "utils/prop-types"

const StyledAccordion = styled.div`
	border-bottom: 1px solid
		${(props) => (props.active ? colors.green__500 : colors.purple__500)};

	.accordion__toggler {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 24px;
		color: ${(props) => (props.active ? colors.purple__500 : colors.white)};

		svg {
			flex-shrink: 0;
			margin-left: 16px;
			transform: rotate(${(props) => (props.active ? "180deg" : "0deg")});
		}
	}

	.accordion__content {
		max-height: ${(props) => (props.active ? "1000px" : "0")};
		padding: ${(props) => (props.active ? "16px 24px 24px 24px" : "0")};
		overflow: hidden;

		a {
			color: ${colors.green__500};
			text-decoration: underline;

			&:hover {
				color: ${colors.purple__500};
			}
		}
	}
`

const Accordion = (props) => {
	/**
	 * PROPS
	 */
	const { active: defaultState, title, children } = props

	/**
	 * STATE
	 */
	const [active, setActive] = useState(defaultState || false)

	/**
	 * METHODS
	 */
	const toggleAccordion = () => {
		setActive(!active)
	}

	return (
		<StyledAccordion active={active} className="text--s">
			<button
				type="button"
				className="accordion__toggler font-weight--700"
				onClick={toggleAccordion}
			>
				{title}

				<IconArrow />
			</button>

			<div className="accordion__content">{children}</div>
		</StyledAccordion>
	)
}

export default Accordion
Accordion.propTypes = AccordionProps
