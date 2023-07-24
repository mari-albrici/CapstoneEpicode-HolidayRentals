import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, getInvoices } from '../redux/actions';

const AdminPaymentsPreview = () => {
	const paymentList = useSelector((state) => state.paypalReducer.paymentList);
	const accessToken = useSelector((state) => state.paypalReducer.accessToken);
	const dispatch = useDispatch();

	const rows =
		paymentList &&
		paymentList.map((payment) => ({
			id: payment.id,
			col1: payment.primary_recipients[0].billing_info.email_address,
			col2: payment.amount.currency_code + payment.amount.value,
			col3: payment.detail.invoice_date,
		}));

	const columns = [
		{ field: 'col1', headerName: 'Id pagamento', width: 200 },
		{ field: 'col2', headerName: 'Email', width: 200 },
		{ field: 'col3', headerName: 'Totale', width: 200 },
		{ field: 'col4', headerName: 'Data', width: 200 },
	];

	useEffect(() => {
		dispatch(getAccessToken());
		dispatch(getInvoices(accessToken));
	}, [dispatch, accessToken]);

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

export default AdminPaymentsPreview;
