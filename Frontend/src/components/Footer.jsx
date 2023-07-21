import { Box, Button, Container, Typography } from '@mui/material';

const Footer = () => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: 'primary.light',
					width: '100%',
					position: 'static',
					bottom: 0,
					left: 0,
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						height: '10vh',
						paddingBlock: '1.5rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography sx={{ color: 'info.main', textAlign: 'center' }}>Casa sul Lago - All rights reserved to Marianna Albrici</Typography>
					<Button variant="outlined" color="info" href="admin">
						<Typography>Admin</Typography>
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
