import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignInScreen from "../screens/SignInScreen"
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen"

const AuthStack = createNativeStackNavigator()

export function AuthNavigators() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{ title: "", headerShadowVisible: false }}
			/>

			<AuthStack.Screen
				name="ForgotPasswordScreen"
				component={ForgotPasswordScreen}
				options={{
					headerTintColor: "black",
					headerShadowVisible: false,
					title: "Forgot your password",
				}}
			/>
		</AuthStack.Navigator>
	)
}
