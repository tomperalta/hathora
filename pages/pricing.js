import React from "react"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import SEO from "components/seo"

// Sections

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledPricing = styled.main`
	> section {
		padding: 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}

		&:first-child {
			${breakpoint.medium`
        padding-top: 204px;
      `}
		}
	}
`

const Pricing = () => (
	<StyledPricing>
		<SEO />
	</StyledPricing>
)

export default Pricing

Pricing.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
