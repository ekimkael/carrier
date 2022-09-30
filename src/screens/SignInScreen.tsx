import {
	Box,
	Text,
	Link,
	Input,
	Stack,
	Button,
	Heading,
	FormControl,
	WarningOutlineIcon,
} from "native-base"
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

type Props = { navigation: any }

const SignInScreen = ({ navigation }: Props) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Stack mx={4}>
				<Stack py={3} direction="column" alignItems="center">
					<Heading>Welcome back</Heading>

					<Text fontSize="lg" color="gray.400" fontWeight="medium">
						Sign in to your account
					</Text>
				</Stack>

				<Box my={10}>
					<FormControl>
						<FormControl.Label>Phone number</FormControl.Label>
						<Input
							type="text"
							height={16}
							rounded="2xl"
							keyboardType="number-pad"
							_input={{ fontSize: "lg" }}
							placeholder="Enter your phone number"
						/>
						<FormControl.ErrorMessage
							leftIcon={<WarningOutlineIcon size="xs" />}
						>
							Atleast 9 characters are required.
						</FormControl.ErrorMessage>
					</FormControl>

					<FormControl>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							height={16}
							rounded="2xl"
							type="password"
							_input={{ fontSize: "lg" }}
							placeholder="Enter your password"
						/>
						<FormControl.ErrorMessage
							leftIcon={<WarningOutlineIcon size="xs" />}
						>
							Atleast 6 characters are required.
						</FormControl.ErrorMessage>

						<Link
							mt={2}
							alignSelf="flex-end"
							_text={{
								fontSize: "md",
								fontWeight: "500",
								color: "primary.400",
							}}
							onPress={() => navigation.navigate("ForgotPasswordScreen")}
						>
							Forget password?
						</Link>
					</FormControl>
				</Box>

				<Button
					height={16}
					rounded="2xl"
					variant="solid"
					_text={{ fontSize: "2xl", fontWeight: "medium" }}
					onPress={() => navigation.navigate("HomeScreen")}
				>
					Sign in
				</Button>
			</Stack>
		</SafeAreaView>
	)
}

export default SignInScreen

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
})
