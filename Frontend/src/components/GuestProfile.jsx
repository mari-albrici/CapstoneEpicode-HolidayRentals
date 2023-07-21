/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGuest } from '../redux/actions';
import { Button, Card, CardContent, Typography } from '@mui/material';
import GuestEditDialog from './GuestEditDialog';
import { Box } from '@mui/system';
import lovere from '../assets/Filler/Lovere.jpeg';

const GuestProfile = () => {
	const guest = useSelector((state) => state.guestReducer.currentGuest);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		dispatch(getGuest());
	}, []);

	return (
		<>
			<Box sx={{ margin: 2, maxWidth: '100%', height: '25px', backgroundColor: 'secondary.main' }}></Box>
			<Box sx={{ m: 3, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
				<img src={lovere} alt="Lovere" style={{ maxWidth: '350px' }} />
				<Card>
					<CardContent>
						{guest ? (
							<>
								<CardContent>
									<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
										Benvenuto a Casa sul Lago
									</Typography>
									<Typography variant="h5" component="div">
										{guest.name} {} {guest.lastName}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										ospite
									</Typography>
									<Typography variant="body2">
										Nome: {guest.name} {} {guest.lastName}
									</Typography>
									<Typography variant="body2">Email: {guest.email}</Typography>
								</CardContent>
								<Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
									<Button variant="contained" size="small" onClick={handleClickOpen}>
										Modifica profilo
									</Button>
								</Box>
							</>
						) : null}

						<GuestEditDialog open={open} handleClose={handleClose} />
					</CardContent>
				</Card>
				<img src={lovere} alt="Lovere" style={{ maxWidth: '350px' }} />
			</Box>
			<Box sx={{ margin: 2, maxWidth: '100%', height: '25px', backgroundColor: 'secondary.main' }}></Box>
		</>
	);
};

export default GuestProfile;
