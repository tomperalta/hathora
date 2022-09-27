import { createSlice } from "@reduxjs/toolkit"

export const signUpModalSlice = createSlice({
	name: "signUpModal",
	initialState: {
		value: false,
	},
	reducers: {
		openSignUpModal: (state) => {
			state.value = true
		},
		closeSignUpModal: (state) => {
			state.value = false
		},
	},
})

export const { openSignUpModal, closeSignUpModal } = signUpModalSlice.actions

export default signUpModalSlice.reducer
