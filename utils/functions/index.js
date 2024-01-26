export const validateEmail = (email) =>
	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)

export const encodePings = (pings) => {
	const serializedData = JSON.stringify(pings)

	return btoa(encodeURIComponent(serializedData))
}

export const decodePings = (pings) => {
	const decodedData = decodeURIComponent(atob(pings))

	return JSON.parse(decodedData)
}

export const copyTextToClipboard = async (text) => {
	try {
		await navigator.clipboard.writeText(text)
	} catch (err) {
		console.log(err)
	}
}

export default validateEmail
