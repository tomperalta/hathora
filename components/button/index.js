import React from "react"

// Libraries
import Link from "next/link"
import styled, { css } from "styled-components"

// Utils
import { colors } from "utils/variables"
import { ButtonProps } from "utils/prop-types"

// Icons
// import IconShadowDetailsTurquoise from "assets/icons/components/button/icon-shadow-details--turquoise.svg"

export const ButtonStyles = css`
	display: inline-flex;
	align-items: center;
	padding: 16px 40px;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.5em;
	letter-spacing: 0.02em;
	border-radius: 45px;
	cursor: pointer;

	&:disabled {
		pointer-events: none;
	}

	${(props) =>
		props.theme === "fill" &&
		css`
			background-color: ${colors.green__500};
			color: ${colors.grey__700};

			&:hover {
				background-color: ${colors.purple__500};
			}

			&:disabled {
				background-color: ${colors.grey__400};
				color: ${colors.grey__600};
			}
		`}

	${(props) =>
		props.theme === "outline" &&
		css`
			border: 1px solid ${colors.green__500};
			color: ${colors.green__500};

			&:hover {
				border-color: ${colors.purple__500};
				color: ${colors.purple__500};
			}

			&:disabled {
				border-color: ${colors.grey__400};
				color: ${colors.grey__400};
			}
		`}

  ${(props) =>
		props.theme === "borderless" &&
		css`
			padding: 0;
			color: ${colors.grey__200};
			text-transform: uppercase;
			letter-spacing: 0.05em;
			border-radius: 0;

			&:hover {
				border-bottom: 1px solid ${colors.green__500};
			}

			&:disabled {
				color: ${colors.grey__400};
			}
		`}

  svg {
		margin-left: 8px;
	}
`

const StyledButton = styled.button`
	font: inherit;
	background: none;
	border: 0;
	${ButtonStyles};
`

const StyledButtonLink = styled.a`
	${ButtonStyles};
`

const Button = (props) => {
	const { theme, type, to, external, disabled, children, className, onClick } =
		props

	/**
	 * Returns a <button type="button"></button>
	 */
	if (type === "button") {
		return (
			<StyledButton
				theme={theme}
				type="button"
				className={className}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</StyledButton>
		)
	}

	/**
	 * Returns a <button type="submit"></button>
	 */
	if (type === "submit") {
		return (
			<StyledButton
				theme={theme}
				type="submit"
				className={className}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</StyledButton>
		)
	}

	/**
	 * Returns a Next <Link></Link>
	 */
	if (!external) {
		return (
			<Link href={to} passHref>
				<StyledButtonLink theme={theme} className={className} onClick={onClick}>
					{children}
				</StyledButtonLink>
			</Link>
		)
	}

	/**
	 * Returns a <a></a>
	 */
	return (
		<StyledButtonLink
			className={className}
			theme={theme}
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			onClick={onClick}
		>
			{children}
		</StyledButtonLink>
	)
}

Button.propTypes = ButtonProps

Button.defaultProps = {
	theme: "fill",
	type: "button",
	to: "/",
	external: false,
	disabled: false,
	className: null,
	onClick: null,
}

export default Button
