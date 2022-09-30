import React from "react"
import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

// import theme from "../theme"
import { HomeStack } from "./StackNavigators"
// import DrawerNavigator from "./DrawerNavigator"

export default function RootNavigator() {
	// =============COMPONENT=============

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<NativeBaseProvider>
					<StatusBar style="auto" />
					{/* <DrawerNavigator /> */}
					<HomeStack />
				</NativeBaseProvider>
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}
