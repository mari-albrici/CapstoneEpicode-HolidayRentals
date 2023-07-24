import { SET_ACCESS_TOKEN, SET_BALANCE, SET_PAYMENT_LIST } from '../actions';

const initialState = {
	balance: null,
	paymentList: [],
	accessToken: '',
};

const paypalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BALANCE:
			return {
				...state,
				balance: action.payload,
			};
		case SET_PAYMENT_LIST:
			return {
				...state,
				paymentList: action.payload,
			};
		case SET_ACCESS_TOKEN:
			return {
				...state,
				accessToken: action.payload,
			};
		default:
			return state;
	}
};

export default paypalReducer;
