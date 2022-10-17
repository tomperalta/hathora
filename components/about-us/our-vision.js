import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

// Icons
import { ReactComponent as IconJoystick } from "assets/icons/about-us/our-vision/icon-joystick.svg"
import { ReactComponent as IconStar } from "assets/icons/about-us/our-vision/icon-star.svg"
import { ReactComponent as IconGraph } from "assets/icons/about-us/our-vision/icon-graph.svg"
import { ReactComponent as IconRocket } from "assets/icons/about-us/our-vision/icon-rocket.svg"
import { ReactComponent as IconFlag } from "assets/icons/about-us/our-vision/icon-flag.svg"

const TimelineItem = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 56px;

	&.aos-animate {
		&::before {
			transform: scale(1);
		}

		.date,
		.card {
			opacity: 1;
		}
	}

	${breakpoint.medium`
    margin-bottom: 120px;

    &:nth-child(odd) {

      .date {
        order: 0;
        right: calc((50% + 64px));
      }

      .card {
        order: 2;
        margin-left: auto;
      }
    }

    &:nth-child(even) {

      .date {
        left: calc((50% + 64px));
      }

      .date {
        order: 1;
      }
    }
  `}

	&:last-child {
		margin-bottom: 0;

		&::after {
			display: none;
		}
	}

	&::before {
		content: "";
		width: 12px;
		height: 12px;
		flex-shrink: 0;
		display: block;
		margin-right: 24px;
		background-color: ${(props) => props.theme};
		border: 10px solid ${colors.grey__700};
		border-radius: 50%;
		outline: 1px solid ${(props) => props.theme};
		transform: scale(0.75);
		transition: all 0.4s ease;

		${breakpoint.medium`
      order: 1;
      margin: 0 32px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    `}
	}

	&::after {
		content: "";
		width: 2px;
		height: calc(100% + 56px);
		position: absolute;
		left: 15px;
		transform: translateY(15px);
		background: ${(props) =>
			props.nextItemTheme
				? `linear-gradient(180deg, ${props.theme} 0%, ${props.nextItemTheme} 50%)`
				: props.theme};
		z-index: -1;

		${breakpoint.medium`
      height: calc(100% + 120px);
      left: 0;
      right: 0;
      margin: auto;
    `}
	}

	.date {
		margin-bottom: 20px;
		opacity: 0;
		transition: all 0.4s ease;

		${breakpoint.medium`
      position: absolute;
      transform: translateY(2px);
      white-space: nowrap;
      margin: 0;
    `}
	}

	.card {
		padding: 24px;
		background-color: ${colors.grey__600};
		border-radius: 8px;
		opacity: 0;
		transition: all 0.4s ease;

		${breakpoint.medium`
      width: calc(50% - 16px - 32px);
      display: flex;
      align-items: center;
    `}

		.card__icon {
			flex-shrink: 0;
		}
	}
`

const StyledOurVision = styled.section`
	display: block;

	${breakpoint.medium`
    position: relative;
  `}

	.our-vision__timeline {
		margin-top: 96px;
	}
`

const OurVision = () => {
	const data = [
		{
			date: "March 2020",
			theme: colors.purple__500,
			content:
				"Our co-founders began work on a multiplayer game, which they expected to take a weekend’s worth of effort. However, it took over 2 months to ship a game. They felt this process could have been significantly easier for developers.",
			icon: <IconJoystick />,
		},
		{
			date: "February 2022",
			theme: colors.purple__400,
			content:
				"Hathora Builder, an opinionated full-stack framework for realtime games, was launched and within 2 months it had over 400 stars on Github.",
			icon: <IconStar />,
		},
		{
			date: "April 2022",
			theme: colors.green__400,
			content:
				"Our co-founders began work on a multiplayer game, which they expected to take a weekend’s worth of effort. However, it took over 2 months to ship a game. They felt this process could have been significantly easier for developers.",
			icon: <IconGraph />,
		},
		{
			date: "July 2022",
			theme: colors.green__500,
			content:
				"Our co-founders began work on a multiplayer game, which they expected to take a weekend’s worth of effort. However, it took over 2 months to ship a game. They felt this process could have been significantly easier for developers.",
			icon: <IconRocket />,
		},
		{
			date: "August 2022",
			theme: colors.green__500,
			content:
				"Our co-founders began work on a multiplayer game, which they expected to take a weekend’s worth of effort. However, it took over 2 months to ship a game. They felt this process could have been significantly easier for developers.",
			icon: <IconFlag />,
		},
	]

	return (
		<StyledOurVision>
			<Container>
				<h2 className="heading--m font-weight--500 text-center dotted-separator">
					This is only the beginning
				</h2>

				<div className="our-vision__timeline">
					{data.map((item, index) => (
						<TimelineItem
							theme={item.theme}
							nextItemTheme={data[index + 1] ? data[index + 1].theme : null}
							key={item.date}
							data-aos
							data-aos-offset="12"
						>
							<div>
								<p className="date text--s font-weight--700">{item.date}</p>

								<div className="card">
									<div className="card__icon mb-3 mb-md-0 me-md-3">
										{item.icon}
									</div>

									<p className="text--s">{item.content}</p>
								</div>
							</div>
						</TimelineItem>
					))}
				</div>
			</Container>
		</StyledOurVision>
	)
}

export default OurVision
