import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

function SunIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
			<path
				d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
				fill="none"
			/>
		</svg>
	)
}

function MoonIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const StyledButton = styled.button`
	background: ${(props) =>
		props.theme.mode === "dark"
			? "rgba(39, 39, 42, 0.9)"
			: "rgba(255, 255, 255, 0.9)"};
	padding: 0.5rem 0.75rem;
	border-radius: 9999px;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
	border: 1px solid
		${(props) =>
			props.theme.mode === "dark"
				? "rgba(255, 255, 255, 0.1)"
				: "rgba(0, 0, 0, 0.05)"};
	backdrop-filter: blur(4px);
	transition: all 0.2s;

	&:hover {
		border-color: ${(props) =>
			props.theme.mode === "dark"
				? "rgba(255, 255, 255, 0.2)"
				: "rgba(0, 0, 0, 0.1)"};
	}
`

const StyledSunIcon = styled(SunIcon)`
	height: 1.5rem;
	width: 1.5rem;
	fill: ${(props) => (props.theme.mode === "dark" ? "none" : "#fafafa")};
	stroke: ${(props) => (props.theme.mode === "dark" ? "#10b981" : "#6b7280")};
	transition: all 0.2s;
	display: ${(props) => (props.theme.mode === "dark" ? "none" : "block")};

	${StyledButton}:hover & {
		fill: ${(props) => (props.theme.mode === "dark" ? "#f0fdf4" : "#e5e7eb")};
		stroke: ${(props) => (props.theme.mode === "dark" ? "#14b8a6" : "#374151")};
	}
`

const StyledMoonIcon = styled(MoonIcon)`
	height: 1.5rem;
	width: 1.5rem;
	fill: #374151;
	stroke: #6b7280;
	transition: all 0.2s;
	display: ${(props) => (props.theme.mode === "dark" ? "block" : "none")};
`

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()
	const otherTheme = resolvedTheme === "dark" ? "light" : "dark"
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<StyledButton
			type="button"
			aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
			onClick={() => setTheme(otherTheme)}
		>
			<StyledSunIcon />
			<StyledMoonIcon />
		</StyledButton>
	)
}
