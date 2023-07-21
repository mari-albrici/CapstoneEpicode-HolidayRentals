import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAccommodation } from '../redux/actions';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Input } from '@mui/material';

const UnitAddDialog = (props) => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		address: '',
		beds: '',
		cost: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const newUnitSubmit = async (event) => {
		event.preventDefault();
		try {
			dispatch(addAccommodation(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dialog open={props.open} handleClose={props.handleClose}>
			<DialogTitle>Aggiungi nuovo alloggio</DialogTitle>
			<DialogContent>
				<form onSubmit={newUnitSubmit}>
					<Container className="form-group">
						<FormLabel>Id:</FormLabel>
						<Input required type="number" name="id" placeholder="Id alloggio" value={formData.id} onChange={handleInputChange} />
					</Container>
					<Container className="form-group">
						<FormLabel>Name:</FormLabel>
						<Input required type="text" name="name" placeholder="Nome alloggio" value={formData.name} onChange={handleInputChange} />
					</Container>
					<Container className="form-group">
						<FormLabel>Indirizzo:</FormLabel>
						<Input required type="text" name="address" placeholder="Indirizzo alloggio" value={formData.address} onChange={handleInputChange} />
					</Container>
					<Container className="form-group">
						<FormLabel>Posti letto:</FormLabel>
						<Input required type="number" name="beds" placeholder="Posti letto" value={formData.beds} onChange={handleInputChange} />
					</Container>
					<Container className="form-group">
						<FormLabel>Costo per notte:</FormLabel>
						<Input required type="number" name="cost" placeholder="€/notte" value={formData.cost} onChange={handleInputChange} />
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

export default UnitAddDialog;
