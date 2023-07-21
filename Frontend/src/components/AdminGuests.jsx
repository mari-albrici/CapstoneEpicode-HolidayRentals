/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { getAllGuests } from '../redux/actions';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AdminGuests = () => {
	const guests = useSelector((state) => state.guestReducer.allGuests);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.loginToken.token);

	useEffect(() => {
		dispatch(getAllGuests(token));
	}, []);

	const rows = guests
		? guests.map((guest) => ({
				id: guest.email,
				col1: guest.name,
				col2: guest.lastName,
				col3: guest.role,
		  }))
		: [];

	const columns = [
		{ field: 'id', headerName: 'Email', width: 400 },
		{ field: 'col1', headerName: 'Nome', width: 300 },
		{ field: 'col2', headerName: 'Cognome', width: 300 },
		{ field: 'col3', headerName: 'Ruolo', width: 300 },
	];

	return (
		<>
			<div>
				<Typography variant="h2" sx={{ display: { xs: 'none', sm: 'flex' }, textAlign: 'center', paddingBottom: 2 }}>
					Utenti
				</Typography>
				<Typography variant="h4" sx={{ display: { xs: 'flex', sm: 'none' }, textAlign: 'center', paddingBottom: 2 }}>
					Utenti
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<DataGrid rows={rows} columns={columns} />
				</Box>
			</div>
		</>
	);
};

export default AdminGuests;
