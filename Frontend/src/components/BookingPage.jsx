import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { saveBooking } from '../redux/actions';
import {
	Box,
	Button,
	Card,
	CardContent,
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	Input,
	Typography,
} from '@mui/material';

const BookingPage = () => {
	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleCheckboxChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		name: '',
		lastName: '',
		phoneNo: '',
		guests: '',
		startDate: '',
		endDate: '',
		unitId: undefined,
	});

	const newBookingSubmit = async (event) => {
		event.preventDefault();
		try {
			dispatch(saveBooking(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Box sx={{ justifyContent: 'center', m: 4 }}>
				<Container sx={{ justifyContent: 'center' }}>
					<Container>
						<Typography variant="h3" sx={{ textAlign: 'center' }}>
							Prenota ora il tuo soggiorno a Lovere
						</Typography>
					</Container>

					<Card className="m-3">
						<CardContent>
							<form onSubmit={newBookingSubmit}>
								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Email</FormLabel>
									<Input type="email" placeholder="Email" name="email" value={formData.guest} onChange={handleInputChange} />
								</FormGroup>

								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Nome</FormLabel>
									<Input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} />
								</FormGroup>
								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Last name</FormLabel>
									<Input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
								</FormGroup>

								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Telefono</FormLabel>
									<Input type="text" placeholder="Telefono" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
								</FormGroup>

								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Data check-in</FormLabel>
									<Input type="date" placeholder="Check-in" name="startDate" value={formData.startDate} onChange={handleInputChange} />
								</FormGroup>

								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Data check-out</FormLabel>
									<Input type="date" placeholder="Check-out" name="endDate" value={formData.endDate} onChange={handleInputChange} />
								</FormGroup>

								<FormGroup sx={{ paddingBlock: 2 }}>
									<FormLabel>Numero ospiti</FormLabel>
									<Input type="number" placeholder="Ospiti" name="guests" value={formData.guests} onChange={handleInputChange} />
								</FormGroup>

								<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
									<FormLabel component="legend">Scegli l'alloggio</FormLabel>
									<FormGroup>
										<FormControlLabel control={<Checkbox onChange={handleCheckboxChange} name="unitId" value="1" />} label="Casa sul Lago" />
										<FormControlLabel control={<Checkbox onChange={handleCheckboxChange} name="unitId" value="2" />} label="Casa sul Lago 2" />
									</FormGroup>
									<FormHelperText>Scegliere 1 alloggio.</FormHelperText>
								</FormControl>

								<Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
									<Button type="submit" variant="contained">
										<Typography variant="h6">Prenota ora</Typography>
									</Button>
								</Box>
							</form>
						</CardContent>
					</Card>
				</Container>
			</Box>
		</>
	);
};

export default BookingPage;
