import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

// Components
import DesktopPingMap from "./components/ping-map--desktop"
import MobileMap from "./components/ping-map--mobile"

const PingMap = () => {
	const [pingData, setPingData] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const {
			query: { pings },
		} = router

		if (pings) {
			console.log(`PINGS EXISTS!`)
			try {
				const decodedData = decodeURIComponent(atob(pings))
				setPingData(JSON.parse(decodedData))
			} catch (e) {
				console.error("Error decoding ping data:", e)
			}
		}
	}, [])

	return (
		<div id="ping">
			<div className="d-lg-none">
				<MobileMap pingData={pingData} />
			</div>
			<div className="d-none d-lg-block">
				<DesktopPingMap pingData={pingData} />
			</div>
		</div>
	)
}

export default PingMap
