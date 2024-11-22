import React from "react"
import styled from "styled-components"
import Container from "components/container/"
import { colors } from "utils/variables"
import Divider from "components/divider"
import Image from "next/image"
import { readingTime } from "@tryghost/helpers"

const CategoryContainer = styled(Container)`
	padding: 0 1.5rem;
`

const CategoryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
`

const CategoryTitle = styled.h2`
	color: ${colors.purple__400};
	margin: 0;
	border-left: 2px solid ${colors.purple__400};
	padding-left: 10px;
`

const ShowAllButton = styled.button`
	color: ${colors.purple__400};
	border: 1px solid ${colors.purple__400};
	border-radius: 6px;
	padding: 4px 8px;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
`

const CategoryBadge = styled.span`
	background: ${colors.grey__550};
	border-radius: 40px;
	padding: 4px 12px;
	color: ${colors.white};
	border: 1px solid ${colors.white};
`

const ReadingTime = styled.span`
	color: ${colors.grey__400};
	display: flex;
	align-items: center;
`

const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
`

const BlogCard = styled.div`
	background: #151521;
	border-radius: 1.5rem;
	overflow: hidden;
	transition: transform 0.2s;
	cursor: pointer;
	// border: 1px solid yellow;
	padding: 1.5rem;

	&:hover {
		transform: translateY(-4px);
	}
`

const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`
const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 180px;
	border-radius: 10px;
	overflow: hidden;
`

const CardContent = styled.div`
	padding-top: 1.5rem;
`

const CardTitle = styled.h3`
	color: ${colors.white};
	font-size: 1.5rem;
	margin: 1.5rem 0;
`

const CardDescription = styled.p`
	color: ${colors.grey__400};
	margin-bottom: 1rem;
`

const CardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${colors.purple__500};
	font-size: 0.875rem;
`

const PostAuthor = styled.span`
	color: ${colors.purple__500};
`

const PostDate = styled.span`
	color: ${colors.purple__400};
	border-left: 2px solid ${colors.purple__400};
	padding-left: 10px;
`

const StyledArrowIcon = styled.svg`
	margin-left: 5px;
`
const StyledReadingTimeIcon = styled.svg`
	margin-right: 5px;
`

const ShowAllButtonIcon = () => (
	<StyledArrowIcon
		xmlns="http://www.w3.org/2000/svg"
		width="19"
		height="12"
		viewBox="0 0 19 12"
		fill="none"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.2231 0.417513C12.4458 0.194888 12.7478 0.0698242 13.0627 0.0698242C13.3776 0.0698242 13.6796 0.194888 13.9022 0.417513L18.6523 5.16758C18.8749 5.39027 19 5.69226 19 6.00715C19 6.32204 18.8749 6.62403 18.6523 6.84672L13.9022 11.5968C13.6783 11.8131 13.3783 11.9328 13.0669 11.9301C12.7556 11.9274 12.4577 11.8025 12.2376 11.5823C12.0174 11.3621 11.8925 11.0643 11.8898 10.7529C11.8871 10.4416 12.0068 10.1416 12.2231 9.91764L14.9461 7.19467H1.18752C0.872567 7.19467 0.570518 7.06955 0.347815 6.84685C0.125113 6.62415 0 6.3221 0 6.00715C0 5.6922 0.125113 5.39015 0.347815 5.16745C0.570518 4.94475 0.872567 4.81963 1.18752 4.81963H14.9461L12.2231 2.09666C12.0005 1.87397 11.8754 1.57197 11.8754 1.25709C11.8754 0.9422 12.0005 0.640205 12.2231 0.417513Z"
			fill="#B399EA"
		/>
	</StyledArrowIcon>
)

const ReadingTimeIcon = () => (
	<StyledReadingTimeIcon
		xmlns="http://www.w3.org/2000/svg"
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
	>
		<circle cx="6" cy="6" r="5.5" stroke="#8585A6" />
		<path d="M5.92383 3.1521V6.68375H7.97446" stroke="#8585A6" />
	</StyledReadingTimeIcon>
)

// eslint-disable-next-line react/prop-types
const Category = ({ posts = [], tagName = "Latest Posts" }) => {
	// Function to format date
	const formatDate = (dateString) => {
		const date = new Date(dateString)
		return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
	}

	// Don't render the category if there are no posts
	if (posts.length === 0) return null

	return (
		<CategoryContainer>
			<div className="d-none">
				<Divider />
			</div>
			<CategoryHeader>
				<CategoryTitle>{tagName}</CategoryTitle>
				<ShowAllButton>
					Show all <ShowAllButtonIcon />
				</ShowAllButton>
			</CategoryHeader>

			<BlogGrid>
				{posts.map((post) => (
					<BlogCard key={post.id}>
						<CardHeader>
							<CategoryBadge>{post.primary_tag?.name || tagName}</CategoryBadge>
							<ReadingTime>
								<ReadingTimeIcon />
								{readingTime(post, {
									minute: "1min",
									minutes: "%mins",
								})}
							</ReadingTime>
						</CardHeader>

						{post.feature_image && (
							<ImageContainer>
								<Image
									src={post.feature_image}
									alt={post.title}
									layout="fill"
									objectFit="cover"
								/>
							</ImageContainer>
						)}

						<CardContent>
							<CardTitle>{post.title}</CardTitle>
							<CardDescription className="d-none">
								{post.excerpt || post.custom_excerpt}
							</CardDescription>
							<CardFooter>
								<PostAuthor>
									{post.primary_author?.name || "Anonymous"}
								</PostAuthor>
								<PostDate>{formatDate(post.published_at)}</PostDate>
							</CardFooter>
						</CardContent>
					</BlogCard>
				))}
			</BlogGrid>
		</CategoryContainer>
	)
}

export default Category
