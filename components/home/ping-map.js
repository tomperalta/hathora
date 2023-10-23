import React from "react"

// Components
import DesktopPingMap from "./components/ping-map--desktop"
import MobileMap from "./components/ping-map--mobile"

const PingMap = () => (
	<div id="ping">
		<div className="d-lg-none">
			<MobileMap />
		</div>
		<div className="d-none d-lg-block">
			<DesktopPingMap />
		</div>
	</div>
)

export default PingMap
