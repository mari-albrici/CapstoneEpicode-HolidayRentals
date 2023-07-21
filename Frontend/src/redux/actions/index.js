import { loginSuccess, setRole, logout } from '../reducers/authReducer';

export const SET_CURRENT_GUEST = 'SET_CURRENT_GUEST';
export const SET_CURRENT_GUESTEMAIL = 'SET_CURRENT_GUESTEMAIL';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_ALL_GUESTS = 'SET_ALL_GUESTS';
export const SET_ACCOMMODATIONS = 'SET_ACCOMMODATIONS';
export const SET_ALL_BOOKINGS = 'SET_ALL_BOOKINGS';
export const SET_ADMIN = 'SET_ADMIN';

const getGuestEndpoint = 'http://localhost:8080/users/me';
const editGuestEndpoint = 'http://localhost:8080/users/me';
const loginEndpoint = 'http://localhost:8080/auth/login';
const signUpEndpoint = 'http://localhost:8080/auth/register';
const getAccommodationEndpoint = 'http://localhost:8080/units';
const getAllGuestsEndpoint = 'http://localhost:8080/users';
const getAllBookingsEndpoint = 'http://localhost:8080/bookings';
const saveBookingEndpoint = 'http://localhost:8080/bookings';

const getCalendlyApi = 'https://api.calendly.com/activity_log_entries';

export const login = (formData, navigate) => {
	return async (dispatch) => {
		try {
			const response = await fetch(loginEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			if (response.ok) {
				dispatch({ type: SET_TOKEN, payload: data.accessToken });
				dispatch({ type: SET_CURRENT_GUESTEMAIL, payload: formData.email });
				dispatch(loginSuccess(data));
				navigate('/');
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const logoutUser = () => {
	return async (dispatch) => {
		dispatch(logout());
		dispatch({ type: SET_CURRENT_GUEST, payload: null });
		dispatch({ type: SET_CURRENT_GUESTEMAIL, payload: null });
	};
};

export const signUp = (formData, navigate) => {
	return async (dispatch) => {
		try {
			const response = await fetch(signUpEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			if (response.ok) {
				dispatch({ type: SET_TOKEN, payload: data.accessToken });
				dispatch({ type: SET_CURRENT_GUESTEMAIL, payload: formData.email });
				dispatch(loginSuccess(data));
				navigate('/');
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getGuest = () => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;
			const response = await fetch(getGuestEndpoint, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const guest = await response.json();
			if (response.ok) {
				dispatch({ type: SET_CURRENT_GUEST, payload: guest });
				dispatch(setRole(guest.role));
			} else {
				console.log("Errore nella richiesta di ottenere l'utente");
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAccommodation = () => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;
			console.log(token);
			const response = await fetch(getAccommodationEndpoint, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (response.ok) {
				const accommodations = await response.json();
				console.log(accommodations.content);
				dispatch({ type: SET_ACCOMMODATIONS, payload: accommodations.content });
			} else {
				console.log("Errore nella richiesta di ottenere l'utente");
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const editAccommodation = (formData, accommodationName) => {
	return async (dispatch, getState) => {
		console.log(formData);
		console.log('ACCOMMODATION: ' + accommodationName);
		try {
			const token = getState().loginToken.token;
			const response = await fetch(getAccommodationEndpoint + '/' + accommodationName, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			console.log(response);
			const accommodations = await response.json();
			console.log(accommodations);
			if (response.ok) {
				dispatch({ type: SET_ACCOMMODATIONS, payload: accommodations.content });
			} else {
				console.log('Errore nella richiesta');
			}
		} catch (error) {
			console.log(error + ' - ERRORE NEL CATCH');
		}
	};
};

export const addAccommodation = (formData) => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;
			console.log(token);
			const response = await fetch(getAccommodationEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			const accommodations = await response.json();
			if (response.ok) {
				console.log(accommodations);
			} else {
				console.log('Errore nella richiesta');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const editGuestProfile = (formData, navigate) => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;
			console.log(token);
			const email = getState().guestReducer.email;
			console.log(email);

			const response = await fetch(editGuestEndpoint + `?email=${email}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			if (response.ok) {
				console.log(data.accessToken);
				dispatch({ type: SET_TOKEN, payload: data.accessToken });
				dispatch({ type: SET_CURRENT_GUESTEMAIL, payload: formData.email });
				navigate('/me');
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllGuests = () => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;
			console.log(token);

			const response = await fetch(getAllGuestsEndpoint, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (response.ok) {
				const guests = await response.json();
				console.log('GUESTS:', guests);
				console.log('GUESTS CONTENT:', guests.content);
				dispatch({ type: 'SET_ALL_GUESTS', payload: guests.content });
			} else {
				console.log('Errore nella richiesta - ALL GUESTS');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllBookings = (token) => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(getAllBookingsEndpoint, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			const bookings = await response.json();
			if (response.ok) {
				console.log('BOOKINGS:', bookings.content);
				dispatch({ type: 'SET_ALL_BOOKINGS', payload: bookings.content });
			} else {
				console.log('Error in request - ALL BOOKINGS');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const saveBooking = (formData, navigate) => {
	return async (dispatch, getState) => {
		try {
			const token = getState().loginToken.token;

			const response = await fetch(saveBookingEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
				body: JSON.stringify(formData),
			});
			console.log(formData);
			const data = await response.json();
			if (response.ok) {
				console.log(data);
				navigate('/thankyou');
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
};

/* CALENDLY */

export const getCalendly = () => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(getCalendlyApi, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_CALENDLY_API_KEY}`,
				},
			});
			const events = await response.json();
			if (response.ok) {
				console.log(events);
			} else {
				console.log('Errore nella richiesta - CALENDLY');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

/* PAYPAL */
export const SET_BALANCE = 'SET_BALANCE';
export const SET_PAYMENT_LIST = 'SET_PAYMENT_LIST';

const getInvoicesEndpoint = 'https://api-m.sandbox.paypal.com/v2/invoicing/invoices';
// const getSingleInvoiceEndpoint = 'https://api-m.paypal.com/v2/invoicing/invoices/{invoice_id}';
const postCreateInvoicesEndpoint = 'https:/api-m.sandbox.paypal.com/v2/invoicing/invoices';
// const postSendInvoicesEndpoint = 'https://api-m.paypal.com/v2/invoicing/invoices/{invoice_id}/send';
// const deleteInvoiceEndpoint = 'https://api-m.paypal.com/v2/invoicing/invoices/{invoice_id}';

export const getInvoices = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(getInvoicesEndpoint, {
				method: 'GET',
				headers: {
					Authorization: `Bearer A21AAL3NoDbrlfuIXwmAPDIo6IThlac0OKtSmxrQLUSnkv8gMKLHd5UtzcrXfxAkrbCySUlYfSdB2uUyVOpS2AgB_AhV6I2dQ`,
				},
			});
			const list = await response.json();
			console.log(response);
			if (response.ok) {
				dispatch({ type: SET_PAYMENT_LIST, payload: list.items });
				console.log(list.items);
			} else {
				console.log('Errore nella richiesta - PAYPAL');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const postInvoice = (formData) => {
	return async () => {
		try {
			const response = await fetch(postCreateInvoicesEndpoint, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_PAYPAL_API_KEY}`,
				},
				body: JSON.stringify(formData),
			});
			const invoice = await response.json();
			if (response.ok) {
				console.log(invoice);
			} else {
				console.log('Errore nella richiesta - PAYPAL CREATE INVOICE');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
