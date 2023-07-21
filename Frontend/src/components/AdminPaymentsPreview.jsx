import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const AdminPaymentsPreview = () => {
	const rows = [
		{ id: 1, col1: 'Hello', col2: 'World' },
		{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
		{ id: 3, col1: 'MUI', col2: 'is Amazing' },
	];

	const columns = [
		{ field: 'col1', headerName: 'Id pagamento', width: 200 },
		{ field: 'col2', headerName: 'Email', width: 200 },
		{ field: 'col3', headerName: 'Totale', width: 200 },
		{ field: 'col4', headerName: 'Data', width: 200 },
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

export default AdminPaymentsPreview;
