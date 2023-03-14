import React from "react"

// Icons
import IconDiscord from "assets/icons/social-media/icon-discord.svg"
import IconGitHub from "assets/icons/social-media/icon-github.svg"
import IconTwitter from "assets/icons/social-media/icon-twitter.svg"
import IconYouTube from "assets/icons/social-media/icon-youtube.svg"
import IconLinkedIn from "assets/icons/social-media/icon-linkedin.svg"

export const siteMetadata = {
	defaultTitle: "Hathora | Serverless Cloud Platform for Multiplayer Games",
	defaultDescription:
		"Seamlessly deploy, scale, and manage server-authoritative game backends globally on our edge network. Our optimized network minimizes latency and improves players’ experience.",
	defaultImage: "/open-graph.png",
}

export const socialMediaLinks = [
	{
		title: "Discord",
		url: "https://discord.gg/hathora",
		icon: IconDiscord,
	},
	{
		title: "GitHub",
		url: "https://github.com/hathora",
		icon: IconGitHub,
	},
	{
		title: "Twitter",
		url: "https://twitter.com/HathoraDev",
		icon: IconTwitter,
	},
	{
		title: "YouTube",
		url: "https://www.youtube.com/channel/UCwJhOa1fXbkitI0u94PJOHg",
		icon: IconYouTube,
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/company/hathora/",
		icon: IconLinkedIn,
	},
]

export const plans = [
	{
		name: "Tiny",
		price: "0.04",
		features: [
			<>
				<span className="font-weight--700">Shared</span> Core
			</>,
			<>
				<span className="font-weight--700">512MB</span> Memory
			</>,
		],
	},
	{
		name: "Small",
		price: "0.08",
		features: [
			<>
				<span className="font-weight--700">1</span> Core
			</>,
			<>
				<span className="font-weight--700">2GB</span> Memory
			</>,
		],
	},
	{
		name: "Medium",
		price: "0.16",
		features: [
			<>
				<span className="font-weight--700">2</span> Cores
			</>,
			<>
				<span className="font-weight--700">4GB</span> Memory
			</>,
		],
	},
	{
		name: "Large",
		price: "0.32",
		features: [
			<>
				<span className="font-weight--700">4</span> Cores
			</>,
			<>
				<span className="font-weight--700">8GB</span> Memory
			</>,
		],
	},
]

export const pricesPerMatch = [
	{
		title: "Turn-based",
		description: "(low CPU, low bandwidth)",
		features: [
			{
				key: "Size",
				value: "Tiny",
			},
			{
				key: "Match Length (minutes)",
				value: "15",
			},
			{
				key: "Matches per Container",
				value: "100",
			},
			{
				key: "Bandwidth per game (MB)",
				value: "1",
			},
		],
		prices: [
			{
				key: "Average Price per Match",
				value: "$0.0002",
			},
			{
				key: "$500 Credit Gets You",
				value: "2.3m Matches",
			},
		],
	},
	{
		title: "RTS",
		description: "(low CPU, high bandwidth)",
		features: [
			{
				key: "Size",
				value: "Small",
			},
			{
				key: "Game Length (minutes)",
				value: "45",
			},
			{
				key: "Games per Process",
				value: "10",
			},
			{
				key: "Bandwidth per game (MB)",
				value: "100",
			},
		],
		prices: [
			{
				key: "Total Price per game",
				value: "$0.02",
			},
			{
				key: "$500 Credit Gets You",
				value: "28k Matches",
			},
		],
	},
	{
		title: "FPS",
		description: "(high CPU, high bandwidth)",
		features: [
			{
				key: "Size",
				value: "Medium",
			},
			{
				key: "Game Length (minutes)",
				value: "20",
			},
			{
				key: "Games per Process",
				value: "1",
			},
			{
				key: "Bandwidth per game (MB)",
				value: "200",
			},
		],
		prices: [
			{
				key: "Total Price per game",
				value: "$0.08",
			},
			{
				key: "$500 Credit Gets You",
				value: "6.5k Matches",
			},
		],
	},
]
