import React from "react"
import { Icon } from "native-base"
import { Path } from "react-native-svg"

type Props = {}

const SearchIcon = (props: any) => {
	return (
		<Icon viewBox="0 0 24 24" {...props}>
			<Path
				d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M22 22L20 20"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	)
}

export default SearchIcon
