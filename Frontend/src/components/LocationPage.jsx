import GoogleMaps from './GoogleMaps';
import lovere1 from '../assets/Filler/Lovere2.jpeg';
import { Container, Divider, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import lovere from '../assets/Filler/Lovere.jpeg';
import lovere2 from '../assets/Filler/Lovere2.jpeg';
import lovere3 from '../assets/Filler/Lovere3.jpeg';
import lovere4 from '../assets/Filler/Lovere4.jpeg';
import lovere8 from '../assets/Filler/Lovere8.jpeg';
import lovere6 from '../assets/Filler/Lovere6.jpeg';

const LocationPage = () => {
	const itemData = [lovere, lovere2, lovere3, lovere4, lovere8, lovere6];

	return (
		<>
			<Container>
				<Container>
					<Typography variant="h2" sx={{ pt: 4, pb: 2, textAlign: 'center' }}>
						Benvenuti a Lovere
					</Typography>
				</Container>

				<Grid container alignItems="center">
					<Grid item xs={6} sx={{}}>
						<img src={lovere1} alt="Lovere - vista dal lago" style={{ maxWidth: '100%' }} />
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1" sx={{ p: 3, lineHeight: '1.8rem' }}>
							Il centro storico è molto caratteristico: potete salire sulla torre per ammirare Lovere dall'alto, visitare la basilica di Santa Maria,
							il Santuario e altri monumenti storici, l'Accademia di belle arti Tadini e il Museo delle scienze naturali. Ci sono molti parchi e zone
							verdi in cui rilassarsi e passeggiare. Per gli amanti del trekking ci sono varie camminate, tra cui la bellissima, semplice e panoramica
							al monte San Giovanni, con attacco proprio dietro casa, percorso di 50min. molto semplice e accessibile a tutti, anche ai bambini.
						</Typography>
					</Grid>
				</Grid>
				<Divider sx={{ m: 4 }} />
				<Grid container>
					<ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={200}>
						{itemData.map((item, index) => (
							<ImageListItem key={item[index]}>
								<img
									src={`${item}?w=164&h=164&fit=crop&auto=format`}
									srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									alt="items"
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
				<Divider />
				<Grid container>
					<Grid item xs={12} sx={{ marginBlock: 3 }}>
						<GoogleMaps />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default LocationPage;
