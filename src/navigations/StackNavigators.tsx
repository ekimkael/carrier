import * as React from "react"
import { IconButton } from "native-base"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import UserIcon from "../components/icons/UserIcon"
import SettingsScreen from "../screens/SettingsScreen"
import SubscriptionScreen from "../screens/SubscriptionScreen"

const RootStack = createNativeStackNavigator()

export function HomeStack() {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={({ navigation }) => ({
						title: "Dashboard",
						headerTintColor: "black",
						headerShadowVisible: false,
						headerRight: () => (
							<IconButton
								size="lg"
								variant="unstyled"
								icon={<UserIcon color="transparent" />}
								onPress={() => navigation.navigate("SettingsScreen")}
							/>
						),
					})}
				/>

				<RootStack.Screen
					name="SettingsScreen"
					component={SettingsScreen}
					options={{
						title: "Settings",
						headerTintColor: "black",
						headerShadowVisible: false,
					}}
				/>
			</RootStack.Group>

			<RootStack.Group screenOptions={{ presentation: "modal" }}>
				<RootStack.Screen
					name="SubscriptionScreen"
					component={SubscriptionScreen}
					options={{ headerShown: false }}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	)
}
