import { SET_ADMIN } from '../actions';

const initialState = {
	admin: null,
	role: 'admin',
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ADMIN:
			return {
				...state,
				admin: action.payload,
			};
		default:
			return state;
	}
};

export default adminReducer;
