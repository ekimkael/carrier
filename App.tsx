import React from "react"
import RoootNavigator from "./src/navigations/RootNavigator"
import { AuthProvider } from "./src/modules/auth/context/AuthContext"

export default function App() {
	return (
		<AuthProvider>
			<RoootNavigator />
		</AuthProvider>
	)
}
