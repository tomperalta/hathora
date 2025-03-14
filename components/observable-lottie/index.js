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
	pauseOnClick = false,
}) {
	const containerRef = useRef(null)
	const lottieRef = useRef(null) // Stores the Lottie instance
	const [isVisible, setIsVisible] = useState(false)
	const [isPlaying, setIsPlaying] = useState(true)

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

	const handleTogglePlay = () => {
		if (pauseOnClick && lottieRef.current) {
			if (isPlaying) {
				lottieRef.current.pause()
			} else {
				lottieRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<div ref={containerRef} className={className} onClick={handleTogglePlay}>
			<Lottie lottieRef={lottieRef} animationData={animationData} loop={loop} />
		</div>
	)
}
