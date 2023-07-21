/* eslint-disable react-hooks/exhaustive-deps */
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getAllBookings } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const AdminBookingsPreview = () => {
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
		  }))
		: [];

	const columns = [
		{ field: 'id', headerName: 'Id prenotazione', width: 200 },
		{ field: 'col1', headerName: 'Email', width: 200 },
		{ field: 'col2', headerName: 'Unità', width: 180 },
		{ field: 'col3', headerName: 'Check in', width: 180 },
	];

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 3,
		page: 0,
	});

	return (
		<div>
			<DataGrid rows={rows} columns={columns} paginationModel={paginationModel} onPaginationModelChange={setPaginationModel} />
		</div>
	);
};

export default AdminBookingsPreview;
