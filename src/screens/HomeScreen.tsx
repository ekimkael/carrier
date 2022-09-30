import React from "react"
import { StyleSheet, View } from "react-native"
import PackagesSheet from "../components/PackagesSheet"
import { Box, Heading, Text, VStack } from "native-base"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type Props = { navigation: NativeStackNavigationProp<any> }

const HomeScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.safeArea}>
			<VStack justifyContent="center" alignItems="center" py={8}>
				<VStack
					justifyContent="center"
					alignItems="center"
					borderColor="black"
					borderStyle="solid"
					borderWidth={16}
					rounded="full"
					boxSize={48}
				>
					<Heading fontSize="4xl">1.678</Heading>
					<Heading fontSize="2xl" color="muted.400">
						Go
					</Heading>
				</VStack>
				<Text fontSize="lg" fontWeight="medium" color="muted.400" my={2}>
					Remaining data
				</Text>
			</VStack>

			<PackagesSheet navigation={navigation} />
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		// backgroundColor: "#fff",
	},
})
