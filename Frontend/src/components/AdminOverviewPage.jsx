import { Box, Divider, Grid, Typography } from '@mui/material';
import Calendarly from './Calendarly';
import AdminBookingsPreview from './AdminBookingsPreview';
import AdminPaymentsPreview from './AdminPaymentsPreview';

const AdminOverviewPage = () => {
	return (
		<>
			<Typography variant="h3" sx={{ textAlign: 'center' }}>
				Overview - Panoramica
			</Typography>
			<Divider />
			<Grid container>
				<Grid item sm={6} xs={12}>
					<Box sx={{ maxWidth: 750, marginBlock: 2, padding: 2, border: 2, borderColor: 'secondary.main', borderRadius: 5 }}>
						<Typography variant="h4" sx={{ paddingBottom: 2 }}>
							Prenotazioni
						</Typography>
						<AdminBookingsPreview />
					</Box>
					<Box sx={{ maxWidth: 750, marginBlock: 2, padding: 2, border: 2, borderColor: 'secondary.main', borderRadius: 5 }}>
						<Typography variant="h4" sx={{ paddingBlock: 2 }}>
							Pagamenti
						</Typography>
						<AdminPaymentsPreview />
					</Box>
				</Grid>
				<Grid item sm={6} xs={12}>
					<Box sx={{ maxWidth: 750, textAlign: 'center', margin: 2, padding: 2, border: 2, borderColor: 'secondary.main', borderRadius: 5 }}>
						<Typography variant="h4" sx={{ paddingBlock: 2 }}>
							Calendario
						</Typography>
						<Calendarly />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default AdminOverviewPage;
