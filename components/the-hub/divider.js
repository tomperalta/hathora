import React from "react"

const Line = () => {
	// Generate a unique ID for each instance
	const uniqueId = React.useId()
	const gradientId = `paint-linear-${uniqueId}`

	return (
		<svg
			width="420"
			height="4"
			viewBox="0 0 420 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 2.00006L420 2.00006"
				stroke={`url(#${gradientId})`}
				strokeWidth="2.2"
				strokeMiterlimit="10"
				strokeLinejoin="round"
				strokeDasharray="0.65 6.5"
			/>
			<defs>
				<linearGradient
					id={gradientId}
					x1="3.27804"
					y1="2.00008"
					x2="420.955"
					y2="2.00004"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#AF64EE" stopOpacity="0" />
					<stop offset="0.291667" stopColor="#AF64EE" />
					<stop offset="0.5" stopColor="#02FE57" />
					<stop offset="0.776042" stopColor="#AF64EE" />
					<stop offset="1" stopColor="#AF64EE" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default Line
