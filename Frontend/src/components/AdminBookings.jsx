/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getAllBookings } from '../redux/actions';

const AdminBookings = () => {
	const bookings = useSelector((state) => state.bookingsReducer.allBookings);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.loginToken.token);

	useEffect(() => {
		dispatch(getAllBookings(token));
	}, []);

	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpenEdit = (id) => {
		setSelectedId(id);
		setOpenEdit(true);
	};

	const handleClickDelete = (id) => {
		dispatch(deleteBooking(id));
		dispatch(getAllBookings(token));
	};

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
		{ field: 'col4', headerName: 'Check out', width: 300 },
		{
			field: 'action',
			headerName: '',
			width: 150,
			renderCell: (params) => (
				<Button variant="contained" color="info" onClick={() => handleClickOpenEdit(params.row.id)}>
					Modifica
				</Button>
			),
		},
		{
			field: 'action2',
			headerName: '',
			width: 150,
			renderCell: (params) => (
				<Button variant="contained" color="warning" onClick={() => handleClickDelete(params.row.id)}>
					Elimina
				</Button>
			),
		},
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
