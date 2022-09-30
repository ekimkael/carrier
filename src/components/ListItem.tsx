import React from "react"
import { TouchableOpacity } from "react-native"
import { Box, ChevronRightIcon, HStack, Text, VStack } from "native-base"

type Props = {
	title: string
	icon?: JSX.Element
	captionText?: string
	onPress?: () => void
	isTouchable?: boolean
	rightElement?: JSX.Element
}

const ListItem = (props: Props) => {
	const { icon, title, captionText, onPress, isTouchable, rightElement } = props

	if (captionText) {
		return (
			<TouchableOpacity onPress={onPress}>
				<HStack
					my={1}
					py={2.5}
					rounded="lg"
					alignItems="center"
					borderBottomWidth={1}
					borderBottomStyle="solid"
					borderBottomColor="muted.200"
					justifyContent="space-between"
				>
					<HStack alignItems="center" space={3}>
						{icon ? icon : null}
						<VStack>
							<Text fontSize="lg">{title}</Text>

							<Text fontSize="md" color="muted.400">
								{captionText}
							</Text>
						</VStack>
					</HStack>

					<Box>
						{isTouchable ? <ChevronRightIcon /> : null}
						{rightElement ? rightElement : null}
					</Box>
				</HStack>
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableOpacity onPress={onPress}>
				<HStack
					my={1}
					py={2.5}
					rounded="lg"
					alignItems="center"
					borderBottomWidth={1}
					borderBottomStyle="solid"
					borderBottomColor="muted.200"
					justifyContent="space-between"
				>
					<HStack alignItems="center" space={3}>
						{icon ? icon : null}
						<Text fontSize="lg">{title}</Text>
					</HStack>

					<Box>
						{isTouchable ? <ChevronRightIcon /> : null}
						{rightElement ? rightElement : null}
					</Box>
				</HStack>
			</TouchableOpacity>
		)
	}
}

export default ListItem
