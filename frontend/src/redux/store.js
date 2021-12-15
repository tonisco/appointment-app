import { combineReducers, applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
	loginReducer,
	registerReducer,
	notificationReducer,
	allLawyersReducer,
} from "./reducers/userReducer"
import {
	appointmentCreateReducer,
	appointmentGetReducer,
	appointmentDeleteReducer,
	appointmentDateReducer,
} from "./reducers/appointmentReducer"

const reducer = combineReducers({
	user: loginReducer,
	register: registerReducer,
	notification: notificationReducer,
	lawyers: allLawyersReducer,
	appointmentCreate: appointmentCreateReducer,
	appointmentGet: appointmentGetReducer,
	appointmentDelete: appointmentDeleteReducer,
	appointmentDate: appointmentDateReducer,
})

const initialUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
	user: {
		user: initialUser,
	},
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store
