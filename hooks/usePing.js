import { useEffect, useState } from "react"

const usePing = (url) => {
	const [ping, setPing] = useState(null)
	const [socket, setSocket] = useState(null)

	useEffect(() => {
		// Initialize WebSocket connection
		const newSocket = new WebSocket(url)

		newSocket.addEventListener("open", () => {
			const startTime = Date.now() // Record the start time
			newSocket.send("Ping") // Send a ping message

			newSocket.addEventListener("message", () => {
				const endTime = Date.now() // Record the end time
				const responseTime = endTime - startTime // Calculate the ping time
				setPing(responseTime)
			})

			// Close the WebSocket connection after getting the response
			newSocket.addEventListener("close", () => {
				newSocket.close()
			})

			setSocket(newSocket)
		})

		return () => {
			// Clean up the WebSocket connection when the component unmounts
			if (socket) {
				socket.close()
			}
		}
	}, [url, socket])

	return ping
}

export default usePing
