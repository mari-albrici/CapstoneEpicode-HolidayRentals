import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editGuestProfile } from '../redux/actions';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Input } from '@mui/material';

const GuestEditDialog = (props) => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		lastname: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const editedProfileSubmit = async (event) => {
		event.preventDefault();
		try {
			dispatch(editGuestProfile(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dialog open={props.open} handleClose={props.handleClose}>
			<DialogTitle>Modifica profilo</DialogTitle>
			<DialogContent>
				<form onSubmit={editedProfileSubmit}>
					<Container className="form-group">
						<FormLabel>Email:</FormLabel>
						<Input
							required
							type="text"
							className="form-control mb-3 border border-1 border-info"
							name="email"
							placeholder="Enter email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</Container>
					<Container className="form-group">
						<FormLabel>Name:</FormLabel>
						<Input
							required
							type="text"
							className="form-control mb-3 border border-1 border-info"
							name="name"
							placeholder="Enter name"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</Container>
					<Container className="form-group">
						<FormLabel>Lastname:</FormLabel>
						<Input
							required
							type="text"
							className="form-control mb-3 border border-1 border-info"
							name="lastname"
							placeholder="Enter lastname"
							value={formData.lastname}
							onChange={handleInputChange}
						/>
					</Container>
					<DialogActions>
						<Button onClick={props.handleClose} variant="outlined" color="info">
							Close
						</Button>
						<Button type="submit" variant="outlined" color="info">
							Save
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default GuestEditDialog;
