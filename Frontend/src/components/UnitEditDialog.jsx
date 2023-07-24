import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAccommodation, getAccommodation } from '../redux/actions';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Input } from '@mui/material';

const UnitEditDialog = (props) => {
	const [formData, setFormData] = useState({
		id: props.id,
		name: '',
		address: '',
		beds: '',
		cost: '',
	});

	const dispatch = useDispatch();
	const token = useSelector((state) => state.loginToken.token);

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const newUnitSubmit = async (event) => {
		event.preventDefault();
		try {
			dispatch(editAccommodation(formData, props.id));
			dispatch(getAccommodation(token));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dialog open={props.open} handleClose={props.handleClose}>
			<DialogTitle>Modifica alloggio</DialogTitle>
			<DialogContent>
				<form onSubmit={newUnitSubmit}>
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
						<Button type="submit" variant="outlined" color="info" handleClose={props.handleClose}>
							Save
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default UnitEditDialog;
