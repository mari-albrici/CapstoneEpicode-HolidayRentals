import { Box, Button, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
					<Typography sx={{ color: 'info.main', textAlign: 'center' }}>
						Casa sul Lago - All rights reserved to Marianna Albrici
						<Button variant="text" href="https://github.com/mari-albrici" color="secondary">
							<GitHubIcon />
						</Button>
						<Button variant="text" href="https://www.instagram.com/marialbrici/" color="secondary">
							<InstagramIcon />
						</Button>
						<Button variant="text" href="https://www.linkedin.com/in/marianna-albrici/" color="secondary">
							<LinkedInIcon />
						</Button>
					</Typography>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
