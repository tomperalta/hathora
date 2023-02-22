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
		url: "https://discord.com/invite/hathora",
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
				<span className="font-weight--700">Shared</span> Core
			</>,
			<>
				<span className="font-weight--700">512MB</span> Memory
			</>,
		],
	},
	{
		name: "Medium",
		price: "0.16",
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
		name: "Large",
		price: "0.32",
		features: [
			<>
				<span className="font-weight--700">Shared</span> Core
			</>,
			<>
				<span className="font-weight--700">512MB</span> Memory
			</>,
		],
	},
]
