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
		url: "github.com/hathora",
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
		name: "Free",
		price: "0",
		periodicity: "month",
		cta: {
			theme: "outline",
			label: "Free Forever",
			href: "/",
		},
		features: [
			"50 CCU",
			"1GB bandwidth",
			"Up to X memory",
			"Game supported in 1 region",
			"2 cores",
		],
	},
	{
		name: "Turn-based",
		price: "25",
		periodicity: "month",
		cta: {
			theme: "gradient",
			label: "Start trial",
			href: "/",
		},
		features: [
			"1000 MAU",
			"Up to X bandwidth",
			"Up to X memory",
			"Game supportted in 1 region",
			"2 cores",
			"Email support available",
		],
	},
	{
		name: "Realtime",
		price: "100",
		periodicity: "month",
		cta: {
			theme: "gradient",
			label: "Start Trial",
			href: "/",
		},
		features: [
			"1000 MAU",
			"Up to X bandwidth",
			"Up to X memory",
			"Game supportted in 2 regions",
			"2 cores",
			"Email support available",
		],
	},
	{
		name: "Unlimited",
		price: null,
		periodicity: null,
		cta: {
			theme: "outline",
			label: "Contact Us",
			url: "mailto:hello@hathora.dev",
		},
		features: [
			"Pay-as-you-go based on usage",
			"Unlimited bandwidth",
			"Unlimited memory",
			"Game supported globally",
			"Unlimited cores",
			"24/7 support available",
		],
	},
]
