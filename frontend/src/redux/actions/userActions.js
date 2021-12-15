import axios from "axios"
import {
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_FAIL,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	LOGIN_CLEAR,
	LOGIN_NOTIFICATION,
	LOGIN_NOTIFICATION_CLEAR,
	ALL_LAWYERS_FAIL,
	ALL_LAWYERS_REQUEST,
	ALL_LAWYERS_SUCCESS,
} from "../constants/userConstants"
import { APPOINTMENTS_GET_CLEAR } from "../constants/appointmentConstant"

export const loginAction = (input) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST })
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		}

		const { data } = await axios.post("http://localhost:5000/api/user/login", input, config)
		dispatch({ type: LOGIN_NOTIFICATION })

		dispatch({ type: LOGIN_SUCCESS, payload: data })

		localStorage.setItem("user", JSON.stringify(data))
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		dispatch({ type: LOGIN_FAIL, payload: message })
	}
}

export const registerAction = (input) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST })

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		}

		const { data } = await axios.post("http://localhost:5000/api/user/register", input, config)

		dispatch({ type: REGISTER_SUCCESS })
		dispatch({ type: LOGIN_SUCCESS, payload: data })
		dispatch({ type: LOGIN_NOTIFICATION })

		localStorage.setItem("user", JSON.stringify(data))
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		dispatch({ type: REGISTER_FAIL, payload: message })
	}
}

export const notificationCLear = () => (dispatch) => {
	dispatch({ type: LOGIN_NOTIFICATION_CLEAR })
}

export const logout = () => (dispatch) => {
	localStorage.removeItem("user")
	dispatch({ type: LOGIN_CLEAR })
	dispatch({ type: APPOINTMENTS_GET_CLEAR })
}

export const getAllLawyers = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_LAWYERS_REQUEST })
		const { data } = await axios.get("http://localhost:5000/api/user/lawyers")
		console.log(data)
		dispatch({ type: ALL_LAWYERS_SUCCESS, payload: data })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		dispatch({ type: ALL_LAWYERS_FAIL, payload: message })
	}
}
