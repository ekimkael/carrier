import React from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SafeAreaView, StyleSheet } from "react-native"
import { schema } from "../modules/auth/utils/validations"
import { Text, Link, Input, Stack, Button, FormControl } from "native-base"

type Props = { navigation: any }

const ForgotPasswordScreen = ({ navigation }: Props) => {
	const methods = useForm<any>({
		mode: "onChange",
		resolver: yupResolver(schema.forgotPassword),
	})
	const { control, handleSubmit } = methods
	const { errors, isValid } = methods?.formState

	const onSubmit = (inputs: any) => {
		console.log(inputs)
		// navigation.navigate("HomeScreen")
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<Stack mx={4}>
				<Text fontSize="lg" color="gray.400" fontWeight="medium" py={8}>
					Please enter your phone number below to receive your password reset
					instructions.
				</Text>

				<FormControl my={10} isInvalid={!!errors?.phone}>
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

				<Button
					height={16}
					rounded="2xl"
					variant="solid"
					isDisabled={!isValid}
					onPress={handleSubmit(onSubmit)}
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
