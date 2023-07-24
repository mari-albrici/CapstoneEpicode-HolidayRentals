import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ThankyouPage = () => {
	return (
		<>
			<Box>
				<Typography variant="h3" sx={{ textAlign: 'center', padding: 5 }}>
					Grazie per aver prenotato da Casa sul Lago.
				</Typography>
				<Typography sx={{ textAlign: 'center', padding: 5 }}>
					Riceverai una mail dalla tua host con la conferma di prenotazione e alcune informazioni per il tuo soggiorno.
				</Typography>
			</Box>
			<Box sx={{ textAlign: 'center', padding: 3 }}>
				<Button variant="contained" color="info" sx={{ paddingInline: 3 }} href="/home">
					HOME
				</Button>
			</Box>
		</>
	);
};

export default ThankyouPage;
