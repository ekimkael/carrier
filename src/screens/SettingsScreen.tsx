import React, { useState } from "react"
import { Box, Heading, Text, VStack } from "native-base"
import { SafeAreaView, StyleSheet, Switch } from "react-native"

import ListItem from "../components/ListItem"
import SectionTitle from "../components/SectionTitle"

type Props = {}

const SettingsScreen = (props: Props) => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	return (
		<SafeAreaView style={styles.safeArea}>
			<VStack justifyContent="center" alignItems="center" space={4} my={8}>
				<Box rounded="full" width={24} height={24} bg="gray.200" />
				<Box>
					<Heading textAlign="center">Travis Reeves</Heading>
					<Text
						fontSize="lg"
						color="gray.400"
						textAlign="center"
						fontWeight="medium"
					>
						620 20 20 20
					</Text>

					<Text fontSize="lg" fontWeight="medium" textAlign="center">
						Edit
					</Text>
				</Box>
			</VStack>

			<VStack>
				<SectionTitle title="General settings" />

				<ListItem
					title="Notifications"
					onPress={toggleSwitch}
					rightElement={
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					}
				/>
				<ListItem title="Payment methods" isTouchable={true} />
				<ListItem title="My Rewards" isTouchable={true} />
			</VStack>
		</SafeAreaView>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	safeArea: {
		marginHorizontal: 16,
	},
})
