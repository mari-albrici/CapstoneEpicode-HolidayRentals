import { SET_BALANCE, SET_PAYMENT_LIST } from '../actions';

const initialState = {
	balance: null,
	paymentList: [],
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
		default:
			return state;
	}
};

export default paypalReducer;
