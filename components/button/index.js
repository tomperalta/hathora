import React, { useEffect, useRef } from "react"

// Libraries
import Link from "next/link"
import styled, { css } from "styled-components"

// Utils
import { colors } from "utils/variables"
import { ButtonProps } from "utils/prop-types"

// Icons
// import IconShadowDetailsTurquoise from "assets/icons/components/button/icon-shadow-details--turquoise.svg"

export const ButtonStyles = css`
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
		props.theme === "gradient" &&
		css`
			position: relative;
			color: ${colors.grey__700};
			overflow: hidden;

			&::before {
				content: "";
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: ${colors.green__500};
				z-index: -1;
			}

			&::after {
				// --size: 0;
				// --y: 0;
				// --x: 0;
				content: "";
				width: 200%;
				height: 200%;
				top: var(--y);
				left: var(--x);
				position: absolute;
				background: radial-gradient(
					circle,
					rgba(160, 62, 247, 1) 0%,
					rgba(42, 252, 97, 1) 97%
				);
				transition: all 0.3s ease;
				border-radius: 45px;
				transform: translate(-50%, -50%);
				transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
				opacity: 0;
				z-index: -1;
			}

			&:hover {
				&::after {
					// --size: 200%;
					opacity: 1;
				}
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
			border-bottom: 1px solid transparent;

			&:hover {
				border-bottom: 1px solid ${colors.green__500};
			}

			&:disabled {
				color: ${colors.grey__400};
			}
		`}

  span {
		position: relative;
		z-index: 5;
	}

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
	// Props
	const { theme, type, to, external, disabled, children, className, onClick } =
		props

	// Hooks
	const ref = useRef()

	useEffect(() => {
		if (theme === "gradient" && ref.current) {
			ref.current.addEventListener("mousemove", (event) => {
				const { pageX, pageY, target } = event

				const x = pageX - target.offsetLeft
				const y = pageY - target.offsetTop

				target.style.setProperty("--x", `${x}px`)
				target.style.setProperty("--y", `${y}px`)
			})
		}
	})

	/**
	 * Returns a <button type="button"></button>
	 */
	if (type === "button") {
		return (
			<StyledButton
				ref={ref}
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
				ref={ref}
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
				<StyledButtonLink
					ref={ref}
					theme={theme}
					className={className}
					onClick={onClick}
				>
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
			ref={ref}
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
