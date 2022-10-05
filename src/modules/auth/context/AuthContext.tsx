import React, { createContext, useState } from "react"

type Props = { children?: React.ReactNode }
interface IAppContext {
	isLoading: boolean
	isLoggedIn: boolean
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAppContext | null>({} as IAppContext)

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<AuthContext.Provider value={{ isLoading, isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	)
}
