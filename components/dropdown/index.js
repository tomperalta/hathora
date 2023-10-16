import React, { useState } from "react"

// Libraries
import styled from "styled-components"

// Utils
import { DropdownProps } from "utils/prop-types"
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/components/dropdown/icon-arrow-down.svg"

const StyledDropdown = styled.div`
	.dropdown__toggler {
		padding: 8px 12px 8px 8px;
		border: 1px solid
			${(props) => (props.active ? colors.green__500 : colors.grey__200)};
		border-radius: 4px;
		transition: border-color 0.3s ease;

		svg {
			margin-left: 12px;
			transform: rotate(${(props) => (props.active ? "180deg" : "0deg")});
			transition: transform 0.3s ease;
		}
	}

	.dropdown__options {
		display: ${(props) => (props.active ? "block" : "none")};
		background-color: ${colors.grey__700};

		button {
			padding: 8px 24px;

			&:hover {
				color: ${colors.purple__500};
			}

			&.active {
				color: ${colors.green__500};
			}
		}
	}
`

const Dropdown = (props) => {
	/**
	 * PROPS
	 */
	const { options, callbackFunction } = props

	/**
	 * STATE
	 */
	const [active, setActive] = useState(false)
	const [selectedOption, setSelectedOption] = useState(options[0])

	/**
	 * METHODS
	 */
	const toggleDropdown = () => {
		setActive(!active)
	}

	const handleOptionChange = (option) => {
		const { value } = option

		callbackFunction(value)
		setSelectedOption(option)
		setActive(false)
	}

	return (
		<StyledDropdown
			active={active}
			className="dropdown text--s font-weight--600"
		>
			<button
				type="button"
				className="dropdown__toggler"
				onClick={toggleDropdown}
			>
				{selectedOption.label}

				<IconArrow />
			</button>

			<div className="dropdown__options">
				<ul>
					{options.map((option) => (
						<li key={option}>
							<button
								type="button"
								className={selectedOption === option && "active"}
								onClick={() => handleOptionChange(option)}
							>
								{option.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</StyledDropdown>
	)
}

export default Dropdown

Dropdown.propTypes = DropdownProps
