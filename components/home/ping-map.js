import React from "react"
import { colors } from "utils/variables"

// Components
import DesktopPingMap from "./components/ping-map--desktop"
import MobileMap from "./components/ping-map--mobile"

const PingMap = () => (
	<div
		id="ping"
		style={{
			backgroundColor: colors.grey__700,
		}}
	>
		<div className="d-lg-none">
			<MobileMap />
		</div>
		<div className="d-none d-lg-block">
			<DesktopPingMap />
		</div>
	</div>
)
export default PingMap
