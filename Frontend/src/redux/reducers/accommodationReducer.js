import { SET_ACCOMMODATIONS } from '../actions';

const initialState = {
	allAccommodations: null,
};

const accommodationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACCOMMODATIONS:
			return {
				...state,
				allAccommodations: action.payload,
			};
		default:
			return state;
	}
};

export default accommodationReducer;
