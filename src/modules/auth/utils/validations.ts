import * as yup from "yup"

export const schema = {
	signin: yup.object().shape({
		phone: yup
			.string()
			.matches(
				/^(\+?237)?(6[5978])\d{7}$/,
				"This is not a valid Cameroon number"
			)
			.required("A phone number is required"),
		password: yup.string().min(8).required(),
	}),
	forgotPassword: yup.object().shape({
		phone: yup
			.string()
			.matches(
				/^(\+?237)?(6[5978])\d{7}$/,
				"This is not a valid Cameroon number"
			)
			.required("A phone number is required"),
	}),
}
