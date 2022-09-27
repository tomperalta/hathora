import React from "react"

// Data
import { socialMediaLinks } from "settings"

console.log(socialMediaLinks)

const SocialMedia = () => (
	<ul className="d-flex align-items-center">
		{socialMediaLinks.map((link) => (
			<li className="d-inline-flex" key={link.title}>
				<a
					href={link.url}
					className="d-inline-flex"
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.icon()}
				</a>
			</li>
		))}
	</ul>
)

export default SocialMedia
