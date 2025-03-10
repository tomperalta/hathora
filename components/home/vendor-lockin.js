import React, { useState, useEffect, useRef } from "react"

// Styles
import styled from "styled-components"

// Components
import Container from "components/container"
import Button from "components/button"

// Utils
import breakpoint from "utils/breakpoints/"

// Icons
import { ReactComponent as Icon1 } from "assets/icons/home/vendor-lockin/icon-1.svg"
// import { ReactComponent as Icon2 } from "assets/icons/home/vendor-lockin/icon-2.svg"
import { ReactComponent as Icon3 } from "assets/icons/home/vendor-lockin/icon-3.svg"
import { ReactComponent as Icon4 } from "assets/icons/home/vendor-lockin/icon-4.svg"
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

// Animations
import NoVendorLockin from "assets/animations/home/vendor-lockin/no-vendor-lockin.json"
import ObservableLottie from "components/observable-lottie"

const StyledVendorLockin = styled.section`
	${breakpoint.medium`
		padding-bottom: 0 !important;
	`}

	.highlight {
		background: linear-gradient(81.2deg, #ab47ff -3.76%, #4dffae 49.24%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.item-wrapper {
		gap: 64px;

		${breakpoint.medium`
      gap: 0;
    `}

		/* HIDES MOBILE  */
		&--mobile {
			${breakpoint.medium`
				height: 0;
				overflow: hidden;
			`}
		}
	}

	.desktop-wrapper {
		.content {
			width: 375px;
			height: 80vh;
			display: flex;
			align-items: center;
		}

		.icon-column {
			height: 70vh;
			position: sticky;
			top: 15vh;

			.icon {
				opacity: 0;
				transition: opacity 0.5s ease-in-out;

				&.hidden {
					width: 0;
					height: 0;
				}

				&.visible {
					opacity: 1;
				}

				svg {
					width: 100%;
					height: auto;

					${breakpoint.medium`
						width: 640px;
						height: auto;
					`}
				}
			}
		}
	}

	.item {
		width: 100%;

		.content {
			${breakpoint.medium`
        width: 375px;
      `}
		}

		.heading--m {
			@media screen and (max-width: 767px) {
				font-size: 2rem;
				line-height: 1em;
			}
		}

		.icon {
			width: 100%;

			${breakpoint.medium`
				height: 100%;
				position: sticky;
				top: 0;
				display: flex;
				align-items: center;
				background: red;
			`}

			svg {
				width: 100%;
				height: auto;
			}
		}
	}
`

const VendorLockin = () => {
	/**
	 * STATE
	 */
	const [activeSlide, setActiveSlide] = useState(0)
	const contentRefs = useRef([])

	const data = [
		{
			title: "No vendor",
			highlightedWord: "lockin",
			description: "Deploy your game server with no SDK integration",
			url: "#",
			icon: (
				<div
					style={{
						width: "100%",
						position: "relative",
						top: -40,
					}}
				>
					<Icon1 />
				</div>
			),
		},
		{
			title: "1 API call to rule",
			highlightedWord: "them all",
			description: "Request a game server for a match with 1 API call",
			url: "#",
			icon: <ObservableLottie animationData={NoVendorLockin} />,
		},
		{
			title: "Lightening fast",
			highlightedWord: "autoscaler",
			description: "Spin up servers in <2 minutes to meet unexpected demand",
			url: "#",
			icon: <Icon3 />,
		},
		{
			title: "Manage your servers with",
			highlightedWord: "ease",
			description: "Get live metrics and logs for your game servers",
			url: "#",
			icon: <Icon4 />,
		},
	]

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = contentRefs.current.indexOf(entry.target)
						setActiveSlide(index)
						entry.target.classList.add("visible")
					} else {
						entry.target.classList.remove("visible")
					}
				})
			},
			{ threshold: 0.5 }
		)

		contentRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref)
		})

		return () => {
			contentRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref)
			})
		}
	}, [])

	console.log(setActiveSlide)

	return (
		<StyledVendorLockin>
			<Container>
				<div className="header text-center" style={{ marginBottom: 32 }}>
					<h2 className="heading--l">No vendor lockin</h2>

					<p className="text--l">Placeholder for copy</p>
				</div>

				{/* MOBILE:start */}
				<div className="item-wrapper item-wrapper--mobile d-flex flex-column">
					{data.map((item) => (
						<div
							key={item.title}
							className="item d-flex flex-column align-items-center justify-content-between"
						>
							<div className="icon d-flex">{item.icon}</div>

							<div className="content">
								<h3 className="heading--m font-weight--700 color--purple__500 mb-2">
									{item.title}
									<br />
									<span className="highlight">{item.highlightedWord}</span>
								</h3>
								<p className="text--l font-weight--400">{item.description}</p>
							</div>
						</div>
					))}
				</div>
				{/* MOBILE:end */}

				{/* DESKTOP:start */}
				<div className="desktop-wrapper d-none flex-row d-md-flex justify-content-between">
					<div className="content-column d-flex flex-column">
						{data.map((item, index) => (
							<div
								className="content"
								key={item.title}
								ref={(el) => {
									contentRefs.current[index] = el
								}}
							>
								<div>
									<h3 className="heading--m font-weight--700 color--purple__500 mb-2">
										{item.title}
										<br />
										<span className="highlight">{item.highlightedWord}</span>
									</h3>
									<p className="text--l font-weight--400">{item.description}</p>

									<Button
										type="link"
										href={item.url}
										className="d-inline-flex mt-4"
										theme="borderless"
									>
										Read more
										<IconArrow />
									</Button>
								</div>
							</div>
						))}
					</div>

					<div className="icon-column d-flex align-items-center">
						{data.map((item, index) => (
							<div
								key={item.title}
								className={`icon ${
									activeSlide === index ? "visible" : "hidden"
								}`}
							>
								{item.icon}
							</div>
						))}
					</div>
				</div>
				{/* DESKTOP:end */}
			</Container>
		</StyledVendorLockin>
	)
}

export default VendorLockin
