import React from "react"
import { Icon } from "native-base"
import { Path } from "react-native-svg"

type Props = {}

const UserIcon = (props: any) => {
	return (
		<Icon viewBox="0 0 24 24" {...props}>
			<Path
				d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	)
}

export default UserIcon
