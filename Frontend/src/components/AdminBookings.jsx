/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../redux/actions';

const AdminBookings = () => {
	const bookings = useSelector((state) => state.bookingsReducer.allBookings);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.loginToken.token);

	useEffect(() => {
		dispatch(getAllBookings(token));
	}, []);

	const rows = bookings
		? bookings.map((booking) => ({
				id: booking.id,
				col1: booking.email,
				col2: booking.unitId === 1 ? 'Casa sul Lago' : booking.unitId === 2 ? 'Casa sul Lago 2' : '',
				col3: booking.startDate,
				col4: booking.endDate,
		  }))
		: [];

	const columns = [
		{ field: 'id', headerName: 'Id prenotazione', width: 400 },
		{ field: 'col1', headerName: 'Email', width: 300 },
		{ field: 'col2', headerName: 'Unità', width: 300 },
		{ field: 'col3', headerName: 'Check in', width: 300 },
		{ field: 'col4', headerName: 'Check out', width: 300 }, // Changed field name to 'col5'
	];

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 10,
		page: 0,
	});

	return (
		<>
			<div>
				<Typography variant="h2" sx={{ display: { xs: 'none', sm: 'flex' }, textAlign: 'center', paddingBottom: 2 }}>
					Prenotazioni
				</Typography>
				<Typography variant="h4" sx={{ display: { xs: 'flex', sm: 'none' }, textAlign: 'center', paddingBottom: 2 }}>
					Prenotazioni
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<DataGrid rows={rows} columns={columns} paginationModel={paginationModel} onPaginationModelChange={setPaginationModel} />
				</Box>
			</div>
		</>
	);
};

export default AdminBookings;
