"use client"

/* eslint-disable */
import React, { useState, useRef, useEffect } from "react"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function ObservableLottie({
	animationData,
	className,
	loop = false,
	threshold = 0.5,
}) {
	const containerRef = useRef(null)
	const lottieRef = useRef(null) // Stores the Lottie instance
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold }
		)

		if (containerRef.current) observer.observe(containerRef.current)

		return () => observer.disconnect()
	}, [threshold])

	useEffect(() => {
		if (lottieRef.current) {
			isVisible ? lottieRef.current.play() : lottieRef.current.pause()
		}
	}, [isVisible])

	return (
		<div ref={containerRef} className={className}>
			<Lottie lottieRef={lottieRef} animationData={animationData} loop={loop} />
		</div>
	)
}
