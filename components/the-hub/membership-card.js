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
			rgba(255, 255, 255, 0.06) -2.39%,
			rgba(0, 0, 0, 0) 75.56%
		),
		#232337;
	padding: 24px;
	width: 100%;
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
	font-family: "Space Grotesk";
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;
`

const CardDescription = styled.p`
	color: var(--neutrals-neutrals-grey-300, #b8b8cf);
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 24px 0;
`

const PricingSection = styled.div`
	padding: 1.5rem 2rem;
	display: inline-block;
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
`

const FeatureItem = styled.div`
	display: flex;
	gap: 1rem;
	align-items: flex-start;
`

const Checkmark = styled.span`
	color: white;
	background: rgba(255, 255, 255, 0.1);
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	flex-shrink: 0;
`

const FeatureContent = styled.div`
	flex: 1;
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

const MembershipCard = ({
	title,
	description,
	features,
	pricing,
	images,
	buttonText,
	url,
}) => (
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
			{features.map((feature) => (
				<FeatureItem key={feature.title}>
					<Checkmark>✓</Checkmark>
					<FeatureContent>
						<FeatureTitle>{feature.title}</FeatureTitle>
						<FeatureDescription>{feature.description}</FeatureDescription>
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

MembershipCard.propTypes = {
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

MembershipCard.defaultProps = {
	pricing: null,
	images: null,
	contact: null,
	url: "#",
	buttonText: "Learn More",
}

export default MembershipCard
