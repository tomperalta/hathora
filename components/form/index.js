// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables/"

const Form = styled.form`
	width: 100%;

	.form__input {
		position: relative;

		.form__message {
			position: absolute;
			top: calc(100% + 4px);
			left: 0;
			font-size: 0.875rem;
			line-height: 1.42em;

			&--success {
				color: ${colors.green__500};

				& + input {
					border-color: ${colors.green__500};
				}
			}

			&--error {
				color: red;

				& + input {
					border-color: red;
				}
			}
		}
	}

	input {
		width: 100%;
		padding-bottom: 12px;
		color: ${colors.grey__200};
		font-size: 0.875rem;
		line-height: 1.42em;
		border-bottom: 1px solid ${colors.purple__500};

		&:focus {
			&::placeholder {
				color: ${colors.grey__200};
			}
		}
	}
`

export default Form
