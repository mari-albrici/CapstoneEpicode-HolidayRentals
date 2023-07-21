import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccommodation } from '../redux/actions';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import UnitAddDialog from './UnitAddDialog';
import UnitEditDialog from './UnitEditDialog';

const AdminUnits = () => {
	const accommodations = useSelector((state) => state.accommodationReducer.allAccommodations);
	const dispatch = useDispatch();
	const token = useSelector((state) => state.loginToken.token);

	useEffect(() => {
		dispatch(getAccommodation(token));
	}, [dispatch, token]);

	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [selectedId, setSelectedId] = useState(null); // Track the selected row's id

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpenEdit = (id) => {
		// Receive the id as a parameter
		setSelectedId(id); // Set the selected row's id
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
	};

	console.log(accommodations);

	const rows = accommodations
		? accommodations.map((accommodation) => ({
				id: accommodation.id,
				col1: accommodation.name,
				col2: accommodation.beds,
				col3: accommodation.cost,
				col4: accommodation.address,
		  }))
		: [];

	const columns = [
		{ field: 'id', headerName: 'Id Unità', width: 250 },
		{ field: 'col1', headerName: 'Nome', width: 250 },
		{ field: 'col2', headerName: 'Posti letto', width: 250 },
		{ field: 'col3', headerName: '€/notte', width: 250 },
		{ field: 'col4', headerName: 'Indirizzo', width: 250 },
		{
			field: 'action',
			headerName: '',
			width: 250,
			renderCell: (params) => (
				<Button variant="contained" color="info" onClick={() => handleClickOpenEdit(params.row.id)}>
					Modifica
				</Button>
			),
		},
	];

	return (
		<>
			<div>
				<Typography variant="h2" sx={{ display: { xs: 'none', sm: 'flex' }, textAlign: 'center', paddingBottom: 2 }}>
					Alloggi
					<Box sx={{ marginInline: 5 }}>
						<Button variant="contained" onClick={handleClickOpen}>
							Aggiungi alloggio
						</Button>
					</Box>
				</Typography>
				<Typography variant="h4" sx={{ display: { xs: 'flex', sm: 'none' }, textAlign: 'center', paddingBottom: 2 }}>
					Alloggi
					<Box>
						<Button variant="contained" onClick={handleClickOpen}>
							Aggiungi alloggio
						</Button>
					</Box>
				</Typography>

				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<DataGrid rows={rows} columns={columns} />
				</Box>
			</div>

			<UnitAddDialog open={open} handleClose={handleClose} />
			{selectedId && <UnitEditDialog open={openEdit} handleClose={handleCloseEdit} id={selectedId} />}
		</>
	);
};

export default AdminUnits;
