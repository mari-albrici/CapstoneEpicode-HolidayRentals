import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { store } from './redux/store';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import NotAuthorizedPage from './components/NotAuthorizedPage';
import SignupPage from './components/SignupPage';
import GuestProfile from './components/GuestProfile';
import LocationPage from './components/LocationPage';
import BookingPage from './components/BookingPage';
import AdminNavigation from './components/AdminNavigation';
import UnitsPage from './components/UnitsPage';
import ThankyouPage from './components/ThankyouPage';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#aed9e0',
		},
		secondary: {
			main: '#faf3dd',
		},
		error: {
			main: '#ffa69e',
		},
		success: {
			main: '#a4c3b2',
		},
		info: {
			main: '#5e6472',
		},
		warning: {
			main: '#b8f2e6',
		},
	},
	typography: {
		fontFamily: 'Poppins',
	},
});

const App = () => {
	const hasRole = useSelector((state) => state.authReducer.role);
	const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<Navigation />
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/thankyou" element={<ThankyouPage />} />

						{isAuthenticated && hasRole === 'guest' && <Route path="/me" element={<GuestProfile />} />}

						{isAuthenticated && hasRole === 'admin' && <Route path="/admin" element={<AdminNavigation />} />}

						<Route path="/lovere" element={<LocationPage />} />
						<Route path="/units" element={<UnitsPage />} />
						<Route path="/book" element={<BookingPage />} />

						<Route path="/" element={<HomePage />} />

						<Route path="/home" element={<HomePage />} />
						<Route path="/not-authorized" element={<NotAuthorizedPage />} />
					</Routes>
					<Footer />
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
