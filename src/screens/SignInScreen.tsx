import {
	Box,
	Text,
	Link,
	Input,
	Stack,
	Button,
	Heading,
	FormControl,
} from "native-base"
import React, { useContext } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SafeAreaView, StyleSheet } from "react-native"
import { schema } from "../modules/auth/utils/validations"
import { AuthContext } from "../modules/auth/context/AuthContext"

type Props = { navigation: any }

const SignInScreen = ({ navigation }: Props) => {
	const auth = useContext(AuthContext)
	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(schema.signin),
	})
	const { control, handleSubmit } = methods
	const { errors, isValid } = methods?.formState

	const onSubmit = (inputs: any) => {
		auth?.setIsLoggedIn(true)
	}

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
					<FormControl isInvalid={!!errors?.phone}>
						<FormControl.Label>Phone number</FormControl.Label>
						<Controller
							name="phone"
							control={control}
							render={({ field: { onChange } }) => (
								<Input
									type="text"
									height={16}
									rounded="2xl"
									onChangeText={onChange}
									keyboardType="number-pad"
									_input={{ fontSize: "lg" }}
									placeholder="Enter your phone number"
								/>
							)}
						/>

						{errors && errors?.phone ? (
							<FormControl.ErrorMessage>
								{errors?.phone?.message}
							</FormControl.ErrorMessage>
						) : null}
					</FormControl>

					<FormControl isInvalid={!!errors?.password}>
						<FormControl.Label>Password</FormControl.Label>
						<Controller
							name="password"
							control={control}
							render={({ field: { onChange } }) => (
								<Input
									height={16}
									rounded="2xl"
									type="password"
									onChangeText={onChange}
									_input={{ fontSize: "lg" }}
									placeholder="Enter your password"
								/>
							)}
						/>

						{errors && errors?.password ? (
							<FormControl.ErrorMessage>
								{errors?.password?.message}
							</FormControl.ErrorMessage>
						) : null}

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
					isDisabled={!isValid}
					onPress={handleSubmit(onSubmit)}
					_text={{ fontSize: "2xl", fontWeight: "medium" }}
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
