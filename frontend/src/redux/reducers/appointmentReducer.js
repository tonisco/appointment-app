import {
	APPOINTMENTS_CREATE_FAIL,
	APPOINTMENTS_CREATE_REQUEST,
	APPOINTMENTS_CREATE_SUCCESS,
	APPOINTMENTS_DELETE_FAIL,
	APPOINTMENTS_DELETE_REQUEST,
	APPOINTMENTS_DELETE_SUCCESS,
	APPOINTMENTS_GET_CLEAR,
	APPOINTMENTS_GET_FAIL,
	APPOINTMENTS_GET_REQUEST,
	APPOINTMENTS_GET_SUCCESS,
	APPOINTMENTS_DATE_FAIL,
	APPOINTMENTS_DATE_REQUEST,
	APPOINTMENTS_DATE_SUCCESS,
	APPOINTMENTS_CREATE_CLEAR,
	APPOINTMENTS_DELETE_CLEAR,
	APPOINTMENTS_DATE_CLEAR,
} from "../constants/appointmentConstant"

export const appointmentCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case APPOINTMENTS_CREATE_REQUEST:
			return { loading: true }

		case APPOINTMENTS_CREATE_SUCCESS:
			return { loading: false, message: action.payload }

		case APPOINTMENTS_CREATE_FAIL:
			return { loading: false, error: action.payload }

		case APPOINTMENTS_CREATE_CLEAR:
			return {}

		default:
			return state
	}
}

export const appointmentGetReducer = (state = {}, action) => {
	switch (action.type) {
		case APPOINTMENTS_GET_REQUEST:
			return { loading: true }

		case APPOINTMENTS_GET_SUCCESS:
			return { loading: false, appointment: action.payload }

		case APPOINTMENTS_GET_FAIL:
			return { loading: false, error: action.payload }

		case APPOINTMENTS_GET_CLEAR:
			return {}

		default:
			return state
	}
}

export const appointmentDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case APPOINTMENTS_DELETE_REQUEST:
			return { loading: true }

		case APPOINTMENTS_DELETE_SUCCESS:
			return { loading: false, appointment: action.payload }

		case APPOINTMENTS_DELETE_FAIL:
			return { loading: false, error: action.payload }

		case APPOINTMENTS_DELETE_CLEAR:
			return {}

		default:
			return state
	}
}

export const appointmentDateReducer = (state = {}, action) => {
	switch (action.type) {
		case APPOINTMENTS_DATE_REQUEST:
			return { loading: true }

		case APPOINTMENTS_DATE_SUCCESS:
			return { loading: false, date: action.payload }

		case APPOINTMENTS_DATE_FAIL:
			return { loading: false, error: action.payload }

		case APPOINTMENTS_DATE_CLEAR:
			return {}

		default:
			return state
	}
}
