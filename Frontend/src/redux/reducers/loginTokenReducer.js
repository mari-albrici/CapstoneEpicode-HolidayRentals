import { SET_TOKEN } from '../actions';

const initialState = {
	token: '',
};

const loginTokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};

export default loginTokenReducer;
