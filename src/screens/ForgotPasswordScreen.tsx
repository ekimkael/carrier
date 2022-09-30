import { Text, Link, Input, Stack, Button, FormControl } from "native-base"
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

type Props = { navigation: any }

const ForgotPasswordScreen = ({ navigation }: Props) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Stack mx={4}>
				<Text fontSize="lg" color="gray.400" fontWeight="medium" py={8}>
					Please enter your phone number below to receive your password reset
					instructions.
				</Text>

				<FormControl my={10}>
					<FormControl.Label>Phone number</FormControl.Label>
					<Input
						type="text"
						height={16}
						rounded="2xl"
						keyboardType="number-pad"
						_input={{ fontSize: "lg" }}
						placeholder="Enter your phone number"
					/>
				</FormControl>

				<Button
					height={16}
					rounded="2xl"
					variant="solid"
					_text={{ fontSize: "2xl", fontWeight: "medium" }}
				>
					Send
				</Button>

				<Link
					my={10}
					alignSelf="center"
					_text={{
						fontSize: "md",
						fontWeight: "medium",
						color: "primary.400",
					}}
					onPress={() => navigation.navigate("SignInScreen")}
				>
					Back to Sign in
				</Link>
			</Stack>
		</SafeAreaView>
	)
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
})
