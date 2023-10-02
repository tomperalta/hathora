import React from "react"

// Components
import DesktopPingMap from "./components/ping-map--desktop"

const PingMap = () => (
	<section>
		<div className="d-none d-lg-block">
			<DesktopPingMap />
		</div>
	</section>
)

export default PingMap
