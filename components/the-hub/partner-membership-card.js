import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

const CardWrapper = styled.div`
	border-radius: 24px;
	border: 1px solid #2f2f2f;
	background: linear-gradient(
			224deg,
			rgba(255, 255, 255, 0.09) -2.39%,
			rgba(0, 0, 0, 0) 75.56%
		),
		rgba(2, 254, 87, 0);
	backdrop-filter: blur(17px);
	display: flex;
	padding: 24px 32px;
	flex-direction: column;
	align-items: flex-start;
	gap: 45px;
	align-self: stretch;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-4px);
	}

	${breakpoint.medium`
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	`}
`

const StyledButton = styled.a`
	display: inline-block;
	text-decoration: none;
	padding: 12px 24px;
	background: ${colors.green__500};
	border-radius: 45px;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	color: #1e1e1e;
	margin-top: 12px;
`

const CardHeader = styled.div`
	grid-column: 1;
`

const CardTitle = styled.h2`
	color: #fff;
	text-shadow: 0px 0px 24px rgba(175, 100, 238, 0.58);
	-webkit-text-stroke-width: 0.5;
	-webkit-text-stroke-color: #000;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;
`

const CardDescription = styled.p`
	color: #b8b8cf;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 12px 0;
`

const PricingSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;

	${breakpoint.medium`
		display: inline-block;
		text-align: left;
		width: auto;
	`}
`

const DiscountLabel = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	color: ${colors.green__500};
`

const Price = styled.p`
	margin: 0;
	font-size: 1.25rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${colors.green__500};
`

const OriginalPrice = styled.span`
	text-decoration: line-through;
	color: ${colors.green__400};
`

const DiscountedPrice = styled.span`
	color: #4ade80;
`

const FeaturesList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	grid-column: 2;

	@media (min-width: 769px) {
		height: 100%;
		justify-content: center;
	}
`

const FeatureItem = styled.div`
	display: flex;
	gap: 1rem;
	align-items: flex-start;
`

const Checkmark = styled.svg`
	width: 21px;
	height: 21px;
	fill: none;
`

const FeatureContent = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		.description {
			height: 0;
			overflow: hidden;
			transition: height 0.3s ease-out;
		}

		&.expanded .description {
			height: auto;
			margin-top: 8px;
		}
	}
`

const ChevronIcon = styled.svg`
	width: 20px;
	height: 20px;
	transition: transform 0.3s ease;
	transform: ${(props) => (props.$expanded ? "rotate(-180deg)" : "rotate(0)")};

	@media (min-width: 769px) {
		display: none;
	}
`

const FeatureTitle = styled.h3`
	font-size: 15px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-decoration-line: underline;
	text-decoration-style: solid;
	text-decoration-skip-ink: auto;
	text-decoration-thickness: auto;
	text-underline-offset: auto;
	text-underline-position: from-font;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	@media (min-width: 769px) {
		cursor: default;
	}
`

const FeatureDescription = styled.p`
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

const ImagesContainer = styled.div`
	grid-column: 1 / -1;
	display: flex;
	gap: 1rem;
	margin-top: 2rem;

	img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}
`

const PartnerMembershipCard = ({
	title,
	description,
	features,
	pricing,
	images,
	buttonText,
	url,
}) => {
	const [expandedFeatures, setExpandedFeatures] = React.useState([])

	const toggleFeature = (index) => {
		setExpandedFeatures((prev) => {
			if (prev.includes(index)) {
				return prev.filter((i) => i !== index)
			}
			return [...prev, index]
		})
	}

	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				{pricing && (
					<PricingSection className="d-none d-md-inline-block">
						<DiscountLabel>{pricing.discountLabel}</DiscountLabel>
						<Price>
							{pricing.original && (
								<OriginalPrice>${pricing.original}</OriginalPrice>
							)}
							{pricing.discounted && (
								<DiscountedPrice>${pricing.discounted}</DiscountedPrice>
							)}
						</Price>
						<StyledButton href={url}>{buttonText}</StyledButton>
					</PricingSection>
				)}
			</CardHeader>
			<FeaturesList>
				{features.map((feature, index) => (
					<FeatureItem key={feature.title}>
						<Checkmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
							<path
								opacity="0.1"
								d="M10.0342 0.470215C4.49249 0.470215 0 4.94737 0 10.4702C0 15.9931 4.49249 20.4702 10.0342 20.4702C15.576 20.4702 20.0685 15.9931 20.0685 10.4702C20.062 4.95003 15.5733 0.476644 10.0342 0.470215Z"
								fill="white"
							/>
							<path
								d="M15.826 7.30383L10.1022 15.0447C9.96574 15.2252 9.76219 15.3434 9.53734 15.3729C9.31248 15.4023 9.08518 15.3405 8.9065 15.2013L4.81922 11.9447C4.45854 11.657 4.40014 11.1324 4.68877 10.773C4.97741 10.4136 5.50377 10.3554 5.86445 10.643L9.27275 13.3605L14.4797 6.318C14.6504 6.06266 14.9482 5.92148 15.2547 5.95053C15.5612 5.97958 15.8269 6.17414 15.9463 6.45698C16.0657 6.73981 16.0194 7.06515 15.826 7.30383Z"
								fill="white"
							/>
						</Checkmark>
						<FeatureContent
							className={expandedFeatures.includes(index) ? "expanded" : ""}
						>
							<FeatureTitle onClick={() => toggleFeature(index)}>
								{feature.title}
								<ChevronIcon
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									$expanded={expandedFeatures.includes(index)}
								>
									<path
										d="M6 9L12 15L18 9"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</ChevronIcon>
							</FeatureTitle>
							<div className="description">
								<FeatureDescription>{feature.description}</FeatureDescription>
							</div>
						</FeatureContent>
					</FeatureItem>
				))}
			</FeaturesList>
			{images && (
				<ImagesContainer>
					{images.map((image) => (
						<img
							key={image}
							src={image}
							alt="Suite view"
							style={{ width: "100%" }}
						/>
					))}
				</ImagesContainer>
			)}

			{pricing && (
				<PricingSection className="d-md-inline-block d-md-none">
					<DiscountLabel>{pricing.discountLabel}</DiscountLabel>
					<Price>
						{pricing.original && (
							<OriginalPrice>${pricing.original}</OriginalPrice>
						)}
						{pricing.discounted && (
							<DiscountedPrice>${pricing.discounted}</DiscountedPrice>
						)}
					</Price>
					<StyledButton href={url}>{buttonText}</StyledButton>
				</PricingSection>
			)}
		</CardWrapper>
	)
}

PartnerMembershipCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
	pricing: PropTypes.shape({
		discountLabel: PropTypes.string,
		original: PropTypes.number,
		discounted: PropTypes.number,
	}),
	images: PropTypes.arrayOf(PropTypes.string),
	contact: PropTypes.shape({
		label: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}),
	buttonText: PropTypes.string,
	url: PropTypes.string,
}

PartnerMembershipCard.defaultProps = {
	pricing: null,
	images: null,
	contact: null,
	url: "#",
	buttonText: "Learn More",
}

export default PartnerMembershipCard
