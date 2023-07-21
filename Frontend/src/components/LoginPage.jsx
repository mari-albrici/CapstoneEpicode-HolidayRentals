import { Button, Container, FormGroup, FormLabel, Input, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleLoginSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(login(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container maxWidth={'md'} sx={{ justifyContent: 'center' }}>
			<Container sx={{ textAlign: 'center' }}>
				<h2>Login</h2>
			</Container>
			<Container sx={{ display: 'block', border: 1, borderColor: 'info.main', borderRadius: 5, padding: '1rem' }} maxWidth={'md'}>
				<form onSubmit={handleLoginSubmit}>
					<FormGroup>
						<FormLabel>Email:</FormLabel>
						<Input
							type="email"
							className="form-control shadow mb-3 border border-1 border-info"
							name="email"
							placeholder="Enter email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel>Password:</FormLabel>
						<Input
							type="password"
							className="form-control shadow border border-1 border-info"
							name="password"
							placeholder="Enter password"
							value={formData.password}
							onChange={handleInputChange}
						/>
					</FormGroup>
					<Container sx={{ justifyContent: 'center', textAlign: 'center', mt: 3 }}>
						<Button type="submit" variant="outlined" color="success">
							Login
						</Button>
						<hr />
						<p className="mt-4">
							Don't have an account? <br />
							<Link className="text-decoration-none fw-bold text-success" to="/signup">
								Sign up
							</Link>
						</p>

						<p className="mt-4">
							Need an admin login? <br />
							<Link className="text-decoration-none fw-bold" to="/adminLogin">
								Admin Login
							</Link>
						</p>
					</Container>
				</form>
			</Container>
		</Container>
	);
};

export default LoginPage;
