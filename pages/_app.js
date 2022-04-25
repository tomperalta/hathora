// Layout
import PrimaryLayout from "layouts/layout-primary"

// Styles
import "assets/styles/reset.css"
import "assets/styles/bootstrap.scss"

const MyApp = ({ Component, pageProps }) => (
	<PrimaryLayout>
		<Component {...pageProps} />
	</PrimaryLayout>
)
export default MyApp
