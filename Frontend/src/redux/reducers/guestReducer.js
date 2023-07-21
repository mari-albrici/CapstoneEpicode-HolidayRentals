import { SET_ALL_GUESTS, SET_CURRENT_GUEST, SET_CURRENT_GUESTEMAIL } from '../actions';

const initialState = {
	currentGuest: null,
	email: null,
	allGuests: null,
};

const guestReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_GUEST:
			return {
				...state,
				currentGuest: action.payload,
			};
		case SET_CURRENT_GUESTEMAIL:
			return {
				...state,
				email: action.payload,
			};
		case SET_ALL_GUESTS:
			return {
				...state,
				allGuests: action.payload,
			};
		// Altri casi di riduttori
		default:
			return state;
	}
};

export default guestReducer;
