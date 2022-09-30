import React, { useMemo, useRef } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { FormControl, HStack, Input, Text } from "native-base"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import SearchIcon from "./icons/SearchIcon"

type Props = { navigation: NativeStackNavigationProp<any> }

const PackagesSheet = ({ navigation }: Props) => {
	const bottomSheetRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ["10%", "50%", "90%"], [])

	return (
		<BottomSheet index={1} ref={bottomSheetRef} snapPoints={snapPoints}>
			<BottomSheetView>
				<HStack py={2} width="full" alignItems="center" justifyContent="center">
					<Text fontSize="md" fontWeight="semibold" color="muted.400">
						Packages
					</Text>
				</HStack>

				<FormControl>
					<Input
						mx={4}
						type="text"
						rounded="xl"
						variant="filled"
						_input={{ fontSize: "lg" }}
						placeholder="Search your package name"
						InputLeftElement={<SearchIcon color="transparent" ml={3} />}
					/>
				</FormControl>

				<HStack my={8}>
					<TouchableOpacity
						onPress={() => navigation?.navigate("SubscriptionScreen")}
					>
						<Text>Go to subscribe</Text>
					</TouchableOpacity>
				</HStack>
			</BottomSheetView>
		</BottomSheet>
	)
}

export default PackagesSheet

const styles = StyleSheet.create({})
