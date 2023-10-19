import React, { useState } from "react"

// Libraries
import styled from "styled-components"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/components/accordion/icon-arrow-down.svg"
import { colors } from "utils/variables"
import { AccordionProps } from "utils/prop-types"

const StyledAccordion = styled.div`
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
	}
`

const Accordion = (props) => {
	/**
	 * PROPS
	 */
	const { title, children } = props

	/**
	 * STATE
	 */
	const [active, setActive] = useState(false)

	/**
	 * METHODS
	 */
	const toggleAccordion = () => {
		setActive(!active)
	}

	return (
		<StyledAccordion active={active}>
			<button
				type="button"
				className="accordion__toggler"
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
