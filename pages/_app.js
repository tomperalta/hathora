// Layout
import PrimaryLayout from "layouts/layout-primary"

const App = ({ Component, pageProps }) => (
	<PrimaryLayout>
		<Component {...pageProps} />
	</PrimaryLayout>
)
export default App
