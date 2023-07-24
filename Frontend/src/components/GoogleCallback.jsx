import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGuest, SET_TOKEN } from '../redux/actions';
import { loginSuccess } from '../redux/reducers/authReducer';

const GoogleCallback = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const authorizationCode = urlParams.get('code');
		if (authorizationCode) {
			const fetchData = async () => {
				try {
					const response = await fetch(`http://localhost:8080/google/callback?code=${authorizationCode}`);
					const data = await response.json();
					if (response.ok) {
						dispatch({ type: SET_TOKEN, payload: data.accessToken });
						dispatch(loginSuccess(data));
						navigate('/home');
						dispatch(getGuest(data.accessToken));
					} else {
						console.log('Error trying to login');
					}
				} catch (error) {
					console.log(error);
				}
			};

			fetchData();
		} else {
			console.log('Error loading authorization, check your settings');
		}
	}, [dispatch, navigate]);

	return (
		<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
			<CircularProgress variant="plain" />
		</Box>
	);
};

export default GoogleCallback;
