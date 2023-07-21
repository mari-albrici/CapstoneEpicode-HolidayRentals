import { Button, Container, Input, FormGroup, FormLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions';

const SignupPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		lastname: '',
		password: '',
		role: 'guest',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleRegistrationSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(signUp(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Container maxWidth={'md'} sx={{ justifyContent: 'center' }}>
				<Container sx={{ textAlign: 'center' }}>
					<h2>Registration</h2>
				</Container>
				<Container sx={{ display: 'block', border: 1, borderColor: 'info.main', borderRadius: 5, padding: '1rem' }} maxWidth={'md'}>
					<form onSubmit={handleRegistrationSubmit}>
						<FormGroup>
							<FormLabel>Email:</FormLabel>
							<Input required type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
						</FormGroup>
						<FormGroup>
							<FormLabel>Name:</FormLabel>
							<Input required type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} />
						</FormGroup>
						<FormGroup>
							<FormLabel>Lastname:</FormLabel>
							<Input required type="text" name="lastname" placeholder="Enter lastname" value={formData.lastname} onChange={handleInputChange} />
						</FormGroup>
						<FormGroup>
							<FormLabel>Password:</FormLabel>
							<Input required type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} />
						</FormGroup>
						<Container sx={{ justifyContent: 'center', textAlign: 'center', mt: 3 }}>
							<Button type="submit" variant="outlined" color="success">
								Sign Up
							</Button>
						</Container>
					</form>
				</Container>
			</Container>
		</>
	);
};

export default SignupPage;
