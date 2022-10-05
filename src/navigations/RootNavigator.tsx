import React, { useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"
import { ActivityIndicator, View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

// import theme from "../theme"
import { HomeStack } from "./StackNavigators"
import { AuthNavigators } from "./AuthNavigators"
import { AuthContext } from "../modules/auth/context/AuthContext"

export default function RootNavigator() {
	const data = useContext(AuthContext)
	console.log(data)

	// =============COMPONENT=============

	// if (data?.isLoading) {
	// 	return (
	// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
	// 			<ActivityIndicator size="large" />
	// 		</View>
	// 	)
	// }

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<NativeBaseProvider>
					<StatusBar style="auto" />
					{data?.isLoggedIn ? <HomeStack /> : <AuthNavigators />}
				</NativeBaseProvider>
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}
