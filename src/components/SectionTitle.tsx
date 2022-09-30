import { Text } from "native-base"
import React from "react"

type Props = { title: string }

const SectionTitle = ({ title }: Props) => {
	return (
		<Text
			mt={8}
			fontSize="sm"
			color="muted.400"
			fontWeight="semibold"
			textTransform="uppercase"
		>
			{title}
		</Text>
	)
}

export default SectionTitle
