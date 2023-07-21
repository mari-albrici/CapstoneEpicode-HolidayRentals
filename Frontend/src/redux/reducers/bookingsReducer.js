import { SET_ALL_BOOKINGS } from '../actions';

const initialState = {
	allBookings: null,
};

const bookingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_BOOKINGS:
			return {
				...state,
				allBookings: action.payload,
			};
		// Altri casi di riduttori
		default:
			return state;
	}
};

export default bookingsReducer;
