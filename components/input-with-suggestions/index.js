import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import { InputWithSuggestionsProps } from "utils/prop-types"
import { colors } from "utils/variables"

const StyledInputWithSuggestions = styled.div`
	input {
		color: ${colors.white};
		padding: 0 12px 12px 12px;
		color: ${colors.grey__200};
		border-bottom: 1px solid ${colors.grey__400};
		border-radius: 0;
		-webkit-appearance: none;

		&:focus {
			border-color: ${colors.green__500};
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	.suggestions {
		margin-top: 8px;
		display: ${(props) => (props.showSuggestions ? "block" : "none")};
		background-color: ${colors.grey__600};

		button {
			width: 100%;
			padding: 8px 24px;
			text-align: left;

			&:hover {
				color: ${colors.purple__500};
			}
		}
	}
`

const InputWithSuggestions = (props) => {
	/**
	 * PROPS
	 */
	const { defaultValue, suggestions, callbackFunction } = props

	/**
	 * STATE
	 */
	const [value, setValue] = useState(defaultValue)
	const [showSuggestions, setShowSuggestions] = useState(false)

	/**
	 * METHODS
	 */
	const handleInputChange = (newValue) => {
		setValue(newValue)
		setShowSuggestions(false)
		callbackFunction(newValue)
	}

	return (
		<StyledInputWithSuggestions showSuggestions={showSuggestions}>
			<input
				type="number"
				value={value}
				className="text--m"
				onChange={(event) => handleInputChange(event.target.value)}
				onFocus={() => setShowSuggestions(true)}
			/>

			<ul className="suggestions text--s">
				{suggestions.map((suggestion) => (
					<li key={suggestion}>
						<button type="button" onClick={() => handleInputChange(suggestion)}>
							{suggestion}
						</button>
					</li>
				))}
			</ul>
		</StyledInputWithSuggestions>
	)
}

export default InputWithSuggestions

InputWithSuggestions.propTypes = InputWithSuggestionsProps
