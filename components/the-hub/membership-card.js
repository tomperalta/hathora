import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Card = styled.div`
	background-color: #1e1f2e;
	border-radius: 2rem;
	padding: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
`

const CardHeader = styled.div`
	grid-column: 1;
`

const CardTitle = styled.h2`
	margin: 0 0 1rem 0;
	font-size: 2.5rem;
	color: white;
	font-weight: 500;
	font-family: "Space Grotesk", sans-serif;
`

const CardDescription = styled.p`
	color: #9ca3af;
	margin: 0;
	font-size: 1.125rem;
	line-height: 1.6;
	margin-bottom: 2rem;
`

const PricingSection = styled.div`
	border: 1px solid #4ade80;
	border-radius: 2rem;
	padding: 1.5rem 2rem;
	display: inline-block;
`

const DiscountLabel = styled.p`
	margin: 0 0 0.5rem 0;
	color: #4ade80;
	font-size: 0.875rem;
`

const Price = styled.p`
	margin: 0;
	font-size: 1.25rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const OriginalPrice = styled.span`
	text-decoration: line-through;
	color: #9ca3af;
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
	margin: 0;
	font-weight: 500;
	color: white;
	font-size: 1rem;
	text-decoration: underline;
`

const FeatureDescription = styled.p`
	margin: 0.25rem 0 0 0;
	color: #9ca3af;
	font-size: 0.875rem;
	line-height: 1.5;
`

const MembershipCard = ({ title, description, features, pricing }) => (
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
			{pricing && (
				<PricingSection>
					<DiscountLabel>{pricing.discountLabel}</DiscountLabel>
					<Price>
						<OriginalPrice>${pricing.original}</OriginalPrice>
						<DiscountedPrice>${pricing.discounted}</DiscountedPrice>
					</Price>
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
	</Card>
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
		discountLabel: PropTypes.string.isRequired,
		original: PropTypes.number.isRequired,
		discounted: PropTypes.number.isRequired,
	}),
}

MembershipCard.defaultProps = {
	pricing: null,
}

export default MembershipCard
