import { useEffect, useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import createPersistedState from "use-persisted-state"

const useColorSchemeState = createPersistedState("colorScheme")

export default function useColorScheme() {
	const systemPrefersDark = useMediaQuery(
		{
			query: "(prefers-color-scheme: dark)",
		},
		undefined
	)

	const [isDark, setIsDark] = useColorSchemeState()
	const value = useMemo(
		() => (isDark === undefined ? !!systemPrefersDark : isDark),
		[isDark, systemPrefersDark]
	)

	useEffect(() => {
		if (value) {
			document.body.classList.add("dark-mode")
		} else {
			document.body.classList.remove("dark-mode")
		}
	}, [value])

	return {
		isDark: value,
		setIsDark,
	}
}
