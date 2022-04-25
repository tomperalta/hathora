// Layout
import PrimaryLayout from "layouts/layout-primary"

const MyApp = ({ Component, pageProps }) => (
	<PrimaryLayout>
		<Component {...pageProps} />
	</PrimaryLayout>
)
export default MyApp
