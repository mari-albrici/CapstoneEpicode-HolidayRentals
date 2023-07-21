import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isAuthenticated: false,
	role: null,
};
const authReducer = createSlice({
	name: 'authSliceReducer',
	initialState,
	reducers: {
		setRole: (state, action) => {
			state.role = action.payload;
		},
		loginSuccess: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
			state.role = state.user.role;
		},
		logout: (state) => {
			state.user = null;
			state.isAuthenticated = false;
			state.role = null;
		},
	},
});

export const { setRole, loginSuccess, logout } = authReducer.actions;
export default authReducer.reducer;
