import React, { useEffect, useRef } from "react"

// Libraries
import Link from "next/link"
import styled, { css } from "styled-components"

// Utils
import { colors } from "utils/variables"
import { ButtonProps } from "utils/prop-types"

export const ButtonStyles = css`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 16px 40px;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.5em;
	letter-spacing: 0.02em;
	white-space: nowrap;
	border-radius: 45px;
	white-space: nowrap;
	cursor: pointer;
	z-index: 10;

	&:disabled {
		pointer-events: none;
	}

	${(props) =>
		props.theme === "fill" &&
		`
			background-color: ${colors.green__500};
			color: ${colors.grey__700};
      transition: all 0.3s ease;

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
		`
			position: relative;
			color: ${colors.grey__700};
			overflow: hidden;

			// 👇🏻 esto hace de background
			&::before {
				content: "";
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: ${colors.green__500};
				transition: all 0.2s ease;
				z-index: -1;
			}

			// 👇🏻 esto es el gradient que se va a mover
			// dinámicamente en base a las variables de CSS "x" e "y"
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
        will-change: width, height, opacity;
				z-index: -1;
			}

			// 👇🏻 acá mostramos el gradient en hover
			&:hover {
				&::after {
					opacity: 1;
				}
			}

			&:disabled {
				&::before {
					background-color: ${colors.grey__400};
				}
			}
		`}

	${(props) =>
		props.theme === "outline" &&
		`
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
		`
			position: relative;
			padding: 0;
			color: ${colors.grey__200};
			text-transform: uppercase;
			letter-spacing: 0.05em;
			border-radius: 0;
			border-bottom: 1px solid transparent;

			&::before {
				content: "";
				width: 0;
				height: 1px;
				display: inline-block;
				position: absolute;
				top: calc(100% + 4px);
				right: 0;
				left: 0;
				margin: auto;
				background-color: ${colors.green__500};
				transition: all 0.2s ease;
			}

			&:hover {
				&::before {
					width: 100%;
				}
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
const StyledNext = styled.a`
	display: flex;
	flex-direction: column;

	svg {
		width: 20px;
	}
	${ButtonStyles};
`
const StyledButtonLink = styled.a`
	${ButtonStyles};
`

const Button = (props) => {
	// Props
	const {
		theme,
		type,
		href,
		external,
		disabled,
		children,
		className,
		onClick,
	} = props

	// Hooks
	const ref = useRef()

	useEffect(() => {
		const handleMouseMove = (event) => {
			const { pageX, pageY, target } = event

			const x = pageX - target.offsetLeft
			const y = pageY - target.offsetTop

			target.style.setProperty("--x", `${x}px`)
			target.style.setProperty("--y", `${y}px`)
		}

		document
			.querySelectorAll('[data-theme="gradient"]')
			.forEach((button) =>
				button.addEventListener("mousemove", handleMouseMove, { passive: true })
			)

		return () =>
			document
				.querySelectorAll('[data-theme="gradient"]')
				.forEach((button) =>
					button.removeEventListener("mousemove", handleMouseMove)
				)
	}, [])

	/**
	 * Returns a <button type="button"></button>
	 */
	if (type === "button") {
		return (
			<StyledButton
				ref={ref}
				theme={theme}
				data-theme={theme}
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
				data-theme={theme}
				className={className}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</StyledButton>
		)
	}

	/**
	 * Returns a <button type="arrow"></button>
	 */

	if (type === "next") {
		return (
			<StyledNext
				ref={ref}
				type="next"
				className={className}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</StyledNext>
		)
	}

	/**
	 * Returns a Next <Link></Link>
	 */
	if (!external) {
		return (
			<Link href={href} passHref>
				<StyledButtonLink
					ref={ref}
					theme={theme}
					data-theme={theme}
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
			data-theme={theme}
			href={href}
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
	href: "/",
	external: false,
	disabled: false,
	className: null,
	onClick: null,
}

export default Button
