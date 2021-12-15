import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_CLEAR,
	LOGIN_NOTIFICATION,
	LOGIN_NOTIFICATION_CLEAR,
	ALL_LAWYERS_REQUEST,
	ALL_LAWYERS_SUCCESS,
	ALL_LAWYERS_FAIL,
	ALL_LAWYERS_CLEAR,
} from "../constants/userConstants"

export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return { loading: true }

		case LOGIN_SUCCESS:
			return { loading: false, user: action.payload }

		case LOGIN_FAIL:
			return { loading: false, error: action.payload }

		case LOGIN_CLEAR:
			return {}

		default:
			return state
	}
}

export const registerReducer = (state = {}, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return { loading: true }

		case REGISTER_SUCCESS:
			return { loading: false }

		case REGISTER_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const notificationReducer = (state = {}, action) => {
	switch (action.payload) {
		case LOGIN_NOTIFICATION:
			return { notification: true }

		case LOGIN_NOTIFICATION_CLEAR:
			return {}

		default:
			return state
	}
}

export const allLawyersReducer = (state = {}, action) => {
	switch (action.type) {
		case ALL_LAWYERS_REQUEST:
			return { loading: true }

		case ALL_LAWYERS_SUCCESS:
			return { loading: false, lawyers: action.payload.lawyers }

		case ALL_LAWYERS_FAIL:
			return { loading: false, error: action.payload }

		case ALL_LAWYERS_CLEAR:
			return {}

		default:
			return state
	}
}
