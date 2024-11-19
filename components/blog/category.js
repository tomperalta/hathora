import React from "react"
import styled from "styled-components"
import Container from "components/container/"
import { colors } from "utils/variables"
import Divider from "components/divider"

const CategoryContainer = styled(Container)`
	padding: 0 28px;
`

const CategoryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
`

const CategoryTitle = styled.h2`
	color: ${colors.purple__400};
	margin: 0;
`

const ShowAllButton = styled.button`
	background: transparent;
	color: ${colors.purple__400};
	border: 1px solid ${colors.purple__400};
	border-radius: 0.375rem;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
`

const BlogCard = styled.div`
	background: #151521;
	border-radius: 0.75rem;
	overflow: hidden;
	transition: transform 0.2s;
	cursor: pointer;
	border: 2px solid yellow;
	padding: 20px;

	&:hover {
		transform: translateY(-4px);
	}
`

const CategoryBadge = styled.span`
	background: ${colors.grey__550};
	border-radius: 0.375rem;
	padding: 0.5rem 1rem;
`

const ReadingTime = styled.span`
	color: ${colors.purple__400};
`

const CardImage = styled.div`
	height: 200px;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.7) 100%
	);
	background-size: cover;
	background-position: center;
	position: relative;
	padding: 1rem;
`

const CardContent = styled.div`
	padding: 1.5rem;
`

const CardTitle = styled.h3`
	color: ${colors.white};
	font-size: 1.5rem;
	margin-bottom: 1rem;
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
`

const PLACEHOLDER_POSTS = [
	{
		id: 1,
		category: "Changelogs",
		readingTime: "12min reading",
		date: "June 2024",
		title: "Changelogs: June 2024",
		description:
			"For our Enterprise customers, managing compute resources just got easier and more powerful.",
		author: "Gabi Weinberg",
		authorDate: "Aug 12, 2024",
		image: "https://placehold.co/400",
	},
	{
		id: 2,
		category: "Changelogs",
		readingTime: "12min reading",
		date: "May 2024",
		title: "Changelogs: May 2024",
		description:
			"For our Enterprise customers, managing compute resources just got easier and more powerful.",
		author: "Gabi Weinberg",
		authorDate: "Aug 12, 2024",
		image: "https://placehold.co/400",
	},
	{
		id: 3,
		category: "Changelogs",
		readingTime: "12min reading",
		date: "April 2024",
		title: "Changelogs: April 2024",
		description:
			"For our Enterprise customers, managing compute resources just got easier and more powerful.",
		author: "Gabi Weinberg",
		authorDate: "Aug 12, 2024",
		image: "https://placehold.co/400",
	},
]

const Category = () => (
	<CategoryContainer>
		<div className="d-none">
			<Divider />
		</div>
		<CategoryHeader>
			<CategoryTitle className="heading--m font-weight--500">
				Changelogs
			</CategoryTitle>
			<ShowAllButton>Show All</ShowAllButton>
		</CategoryHeader>

		<BlogGrid>
			{PLACEHOLDER_POSTS.map((post) => (
				<BlogCard key={post.id}>
					<div className="d-flex justify-content-between">
						<CategoryBadge>{post.category}</CategoryBadge>
						<ReadingTime>{post.readingTime}</ReadingTime>
					</div>
					<CardImage style={{ backgroundImage: `url(${post.image})` }} />
					<CardContent>
						<CardTitle>{post.title}</CardTitle>
						<CardDescription className="d-none">
							{post.description}
						</CardDescription>
						<CardFooter>
							<PostAuthor>{post.author}</PostAuthor>
							<span>|</span>
							<PostDate>{post.authorDate}</PostDate>
						</CardFooter>
					</CardContent>
				</BlogCard>
			))}
		</BlogGrid>
	</CategoryContainer>
)

export default Category
