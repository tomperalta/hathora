import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.button`
	position: relative;
	width: 80px;
	height: 40px;
	background: ${(props) =>
		props.resolvedTheme === "dark" ? "#2D3748" : "#E2E8F0"};
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
		props.resolvedTheme === "dark" ? "4px" : "calc(100% - 36px)"};
	top: 50%;
	transform: translateY(-50%);
	width: 32px;
	height: 32px;
	background: white;
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
	color: ${(props) => (props.resolvedTheme === "dark" ? "white" : "black")};
	font-weight: 500;
	font-size: 14px;
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
				{resolvedTheme === "dark" ? "Light" : "Dark"}
			</ToggleText>
			<ToggleKnob resolvedTheme={resolvedTheme} />
		</ToggleWrapper>
	)
}
