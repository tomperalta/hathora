import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.button`
	position: relative;
	width: 77px;
	height: 32px;
	background: var(--theme-toggle-bg);
	border-radius: 20px;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ToggleKnob = styled.div`
	position: absolute;
	left: ${(props) =>
		props.resolvedTheme === "dark" ? "4px" : "calc(100% - 26px)"};
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	background: var(--theme-toggle-knob);
	border-radius: 50%;
	transition: all 0.3s ease;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const ToggleText = styled.span`
	position: absolute;
	left: ${(props) =>
		props.resolvedTheme === "dark" ? "calc(100% - 44px)" : "12px"};
	top: 50%;
	transform: translateY(-50%);
	color: var(--theme-toggle-color);
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
`

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const otherTheme = resolvedTheme === "dark" ? "light" : "dark"

	return (
		<ToggleWrapper
			type="button"
			onClick={() => setTheme(otherTheme)}
			resolvedTheme={resolvedTheme}
		>
			<ToggleText resolvedTheme={resolvedTheme}>
				{resolvedTheme === "dark" ? "Dark" : "Light"}
			</ToggleText>
			<ToggleKnob resolvedTheme={resolvedTheme} />
		</ToggleWrapper>
	)
}
