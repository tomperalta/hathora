import { configureStore } from "@reduxjs/toolkit"
import signUpModalReducer from "redux/slices/sign-up-modal"

export default configureStore({
	reducer: {
		signUpModal: signUpModalReducer,
	},
})
