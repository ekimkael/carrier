import { StyleSheet, View } from "react-native"
import React from "react"
import {
	Box,
	Button,
	FormControl,
	Heading,
	HStack,
	Input,
	Radio,
	Text,
	VStack,
} from "native-base"
import SectionTitle from "../components/SectionTitle"

type Props = {}

const SubscriptionScreen = (props: Props) => {
	return (
		<View>
			<VStack mx={4} my={12}>
				<Text fontSize="lg" textAlign="center" color="muted.400">
					You're about to subscribe to:
				</Text>
				<VStack alignItems="center" my={5}>
					<Heading fontSize="3xl">Blue Go L</Heading>
					<Text fontSize="lg" color="muted.500">
						2 Go/day • available 1 month
					</Text>
				</VStack>

				<Box>
					<SectionTitle title="Payment methods" />

					<Radio.Group
						defaultValue="1"
						name="payment_method"
						accessibilityLabel="Pick your favorite number"
					>
						<HStack space={8} flexWrap="wrap">
							<Radio value="1" size="lg" my={2}>
								MTN Money
							</Radio>
							<Radio value="2" size="lg" my={2}>
								Orange Money
							</Radio>
							<Radio value="3" size="lg" my={2}>
								Credit Card
							</Radio>
						</HStack>
					</Radio.Group>
				</Box>

				<FormControl my={10}>
					<Input
						type="text"
						height={16}
						rounded="2xl"
						keyboardType="number-pad"
						_input={{ fontSize: "2xl" }}
						placeholder="Enter your phone number"
					/>
				</FormControl>

				<Button
					height={16}
					rounded="2xl"
					variant="solid"
					_text={{ fontSize: "2xl", fontWeight: "medium" }}
				>
					Subscribe
				</Button>
			</VStack>
		</View>
	)
}

export default SubscriptionScreen

const styles = StyleSheet.create({})
