import React from "react"

// Libraries
import styled from "styled-components"
import Link from "next/link"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"
import Icon404 from "assets/icons/404/icon-404.svg"
import Image from "next/image"

const Styled404 = styled.section`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	padding: 60px 0;
`

const Page404 = () => (
	<Styled404>
		<Container>
			<div className="row">
				<div className="col-12 col-md-6 mb-5 mb-md-0">
					<h1 className="heading--l mb-4">
						Sorry! We couldn’t find the page you were looking for.
					</h1>

					<p className="text--l mb-4">
						Check that your URL is correct or return{" "}
						<Link href="/" passHref legacyBehavior>
							<a className="color--green__500 color-hover--purple__500 text-decoration-underline">
								home
							</a>
						</Link>
						.
					</p>

					<p>
						Still having trouble?
						<Button
							theme="borderless"
							type="link"
							href="mailto:info@hathora.dev"
							className="ms-2"
						>
							Contact Us
							<IconArrow />
						</Button>
					</p>
				</div>

				<div className="col-12 col-md-6">
					<Image src={Icon404} width="544" height="344" alt="" />
				</div>
			</div>
		</Container>
	</Styled404>
)

export default Page404
