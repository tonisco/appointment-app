import axios from "axios"
import { logout } from "./userActions"
import {
	APPOINTMENTS_CREATE_FAIL,
	APPOINTMENTS_CREATE_REQUEST,
	APPOINTMENTS_CREATE_SUCCESS,
	APPOINTMENTS_DELETE_FAIL,
	APPOINTMENTS_DELETE_REQUEST,
	APPOINTMENTS_DELETE_SUCCESS,
	APPOINTMENTS_GET_FAIL,
	APPOINTMENTS_GET_REQUEST,
	APPOINTMENTS_GET_SUCCESS,
	APPOINTMENTS_DATE_FAIL,
	APPOINTMENTS_DATE_REQUEST,
	APPOINTMENTS_DATE_SUCCESS,
} from "../constants/appointmentConstant"

export const getAppointment = (page = 1) => async (dispatch, getState) => {
	try {
		dispatch({ type: APPOINTMENTS_GET_REQUEST })

		const { user } = getState().user

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.get(
			`http://localhost:5000/api/appointment?page=${page}`,
			config
		)
		dispatch({ type: APPOINTMENTS_GET_SUCCESS, payload: data })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		if (message === "Not authorized, token failed") dispatch(logout())
		dispatch({ type: APPOINTMENTS_GET_FAIL, payload: message })
	}
}

export const createAppointment = (input) => async (dispatch, getState) => {
	try {
		dispatch({ type: APPOINTMENTS_CREATE_REQUEST })

		const { user } = getState().user

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.post("http://localhost:5000/api/appointment", input, config)
		dispatch({ type: APPOINTMENTS_CREATE_SUCCESS, payload: data })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		if (message === "Not authorized, token failed") dispatch(logout())
		dispatch({ type: APPOINTMENTS_CREATE_FAIL, payload: message })
	}
}

export const deleteAppointment = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: APPOINTMENTS_DELETE_REQUEST })

		const { user } = getState().user

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		await axios.delete(`http://localhost:5000/api/appointment?id=${id}&page=1`, config)
		dispatch({ type: APPOINTMENTS_DELETE_SUCCESS, payload: "Appointment deleted" })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		if (message === "Not authorized, token failed") dispatch(logout())
		dispatch({ type: APPOINTMENTS_DELETE_FAIL, payload: message })
	}
}

export const getAppointmentDates = (lawyer, sdate, edate) => async (dispatch) => {
	try {
		dispatch({ type: APPOINTMENTS_DATE_REQUEST })

		const { data } = await axios.get(
			`http://localhost:5000/api/appointment/dates?sdate=${sdate}&edate=${edate}&lawyer=${lawyer}`
		)
		dispatch({ type: APPOINTMENTS_DATE_SUCCESS, payload: data })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.response
		dispatch({ type: APPOINTMENTS_DATE_FAIL, payload: message })
	}
}
