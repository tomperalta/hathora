import React from "react"
import { colors } from "utils/variables"

// Components
import DesktopPingMap from "./components/ping-map--desktop"
import MobileMap from "./components/ping-map--mobile"
import { PingMapsWrapperProps } from "../../utils/prop-types"

const PingMap = (props) => {
	/**
	 * PROPS
	 */
	const { disabledMobileMap, disabledCopyBtns, limitedRegions, mobileRegions } =
		props
	return (
		<div
			id="ping"
			style={{
				backgroundColor: colors.grey__700,
			}}
		>
			{!disabledMobileMap && (
				<div className="d-lg-none">
					<MobileMap
						disabledCopyBtns={disabledCopyBtns}
						mobileRegions={mobileRegions}
					/>
				</div>
			)}
			<div className={`${disabledMobileMap ? "d-block" : "d-none d-lg-block"}`}>
				<DesktopPingMap
					disabledCopyBtns={disabledCopyBtns}
					limitedRegions={limitedRegions}
				/>
			</div>
		</div>
	)
}
export default PingMap

PingMap.propTypes = PingMapsWrapperProps
