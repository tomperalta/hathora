import GlobalStyles from "assets/styles/globalStyles"

const PrimaryLayout = ({ children }) => (
	<>
		<GlobalStyles />
		<main>{children}</main>
	</>
)

export default PrimaryLayout
