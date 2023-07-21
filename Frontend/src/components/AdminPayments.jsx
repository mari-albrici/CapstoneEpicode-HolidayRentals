/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoices } from '../redux/actions';
import { Box, Button, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import NewPaymentDialog from './NewPaymentDialog';

const AdminPayments = () => {
	const paymentList = useSelector((state) => state.paypalReducer.paymentList);
	const dispatch = useDispatch();

	console.log(paymentList);

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const rows =
		paymentList &&
		paymentList.map((payment) => ({
			id: payment.id,
			col1: payment.primary_recipients[0].billing_info.email_address,
			col2: payment.status,
			col3: payment.amount.currency_code + payment.amount.value,
			col4: payment.detail.invoice_date,
		}));

	const columns = [
		{ field: 'id', headerName: 'Id fattura', width: 400 },
		{ field: 'col1', headerName: 'Email cliente', width: 300 },
		{ field: 'col2', headerName: 'Stato', width: 100 },
		{ field: 'col3', headerName: 'Totale', width: 300 },
		{ field: 'col4', headerName: 'Data fattura', width: 300 },
	];

	useEffect(() => {
		dispatch(getInvoices());
	}, [dispatch]);

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 10,
		page: 0,
	});

	return (
		<>
			<div>
				<Typography variant="h2" sx={{ display: { xs: 'none', sm: 'flex' }, textAlign: 'center', paddingBottom: 2 }}>
					Pagamenti
				</Typography>
				<Typography variant="h4" sx={{ display: { xs: 'flex', sm: 'none' }, textAlign: 'center', paddingBottom: 2 }}>
					Pagamenti
				</Typography>
				<Box>
					<Grid container sx={{ justifyContent: 'spaceBetween', margin: 2 }}>
						<Grid item sm={6}>
							<Typography variant="h6">Saldo: €</Typography>
						</Grid>
						<Grid item sm={6}>
							<Button variant="contained" color="secondary" onClick={handleOpen}>
								Nuovo pagamento
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<DataGrid rows={rows} columns={columns} paginationModel={paginationModel} onPaginationModelChange={setPaginationModel} />
				</Box>
			</div>

			<NewPaymentDialog open={open} handleClose={handleClose} />
		</>
	);
};

export default AdminPayments;
