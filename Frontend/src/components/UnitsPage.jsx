import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import lovere from '../assets/Filler/Lovere.jpeg';
import lovere2 from '../assets/Filler/Lovere2.jpeg';
import lovere3 from '../assets/Filler/Lovere3.jpeg';
import lovere4 from '../assets/Filler/Lovere4.jpeg';
import lovere5 from '../assets/Filler/Lovere5.jpeg';
import lovere6 from '../assets/Filler/Lovere6.jpeg';
import lovere7 from '../assets/Filler/Lovere7.jpeg';
import lovere8 from '../assets/Filler/Lovere8.jpeg';

import unoA from '../assets/appts/1A.jpg';
import unoB from '../assets/appts/1B.jpg';
import unoC from '../assets/appts/1C.jpg';
import unoD from '../assets/appts/1D.jpg';
import unoE from '../assets/appts/1E.jpg';

import dueA from '../assets/appts/2A.jpg';
import dueB from '../assets/appts/2B.jpg';
import dueC from '../assets/appts/2C.jpg';
import dueD from '../assets/appts/2D.jpg';
import dueE from '../assets/appts/2E.jpg';

const UnitsPage = () => {
	const itemData = [lovere, lovere2, lovere3, lovere4, lovere5, lovere6, lovere7, lovere8];
	const appUno = [unoE, unoB, unoC, unoD];
	const appDue = [dueE, dueC, dueD, dueB];

	return (
		<>
			<Container>
				<Container>
					<Typography variant="h2" sx={{ pt: 4, pb: 2, textAlign: 'center' }}>
						Scopri la Casa sul Lago
					</Typography>
				</Container>
				<ImageList cols={8} rowHeight={164}>
					{itemData.map((item, index) => (
						<ImageListItem key={index}>
							<img
								src={`${item}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={index}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Container>
			<Divider />
			<Container sx={{ display: 'flex', justifyContent: 'center', marginBlock: 3 }}>
				<Grid container>
					<Grid item md={6} xs={12} sx={{ paddingRight: 2 }}>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Card sx={{ maxWidth: 500 }}>
								<CardActionArea>
									<CardMedia component="img" height="240" image={unoA} alt="green iguana" />
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Casa sul Lago
										</Typography>
										<Typography color="text.secondary">
											Benvenuti nella nostra affascinante camera in affitto a Lovere, una pittoresca località sul lago. Questa camera offre
											un'esperienza unica, con una vista mozzafiato sul lago che vi lascerà senza fiato.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>

						<Box>
							<ImageList cols={2}>
								{appUno.map((item, index) => (
									<ImageListItem key={index}>
										<img
											src={`${item}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={index}
											loading="lazy"
										/>
									</ImageListItem>
								))}
							</ImageList>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
							<Box sx={{ width: '500px' }}>
								<Typography sx={{ lineHeight: '2rem', textAlign: 'right' }}>
									La camera è dotata di un comodo letto matrimoniale, ideale per una coppia o per chiunque desideri un riposo sereno e rigenerante
									dopo una giornata di esplorazione delle bellezze locali. Il suo arredamento semplice ed elegante crea un'atmosfera accogliente e
									rilassante, perfetta per rilassarsi e godersi la pace e la tranquillità.
									<Divider sx={{ paddingTop: 2, paddingBottom: 2 }} />
									Il bagno, che si trova adiacente alla camera, è completamente attrezzato e offre tutti i comfort necessari per il vostro soggiorno.
									Gli ospiti potranno godere di una doccia rinvigorente o di un bagno rilassante dopo una giornata trascorsa in giro per la città.
									<Divider sx={{ paddingTop: 2, paddingBottom: 2 }} />
									La cucina, condivisa con la padrona di casa, è spaziosa e completamente attrezzata con tutto il necessario per preparare i pasti.
									L'ampio spazio permette agli ospiti di avere la propria privacy mentre si godono una deliziosa colazione o preparano una cena
									romantica con vista sul lago.
								</Typography>
							</Box>
							<Box sx={{ width: '15px', height: '600px', backgroundColor: 'secondary.main', marginLeft: 5 }} />
						</Box>
					</Grid>
					<Grid item md={6} xs={12} sx={{ paddingRight: 2 }}>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Card sx={{ maxWidth: 500 }}>
								<CardActionArea>
									<CardMedia component="img" height="240" image={dueA} alt="green iguana" />
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Casa sul Lago 2
										</Typography>
										<Typography color="text.secondary">
											Benvenuti nel nostro affascinante appartamento in affitto situato in una posizione privilegiata con vista panoramica sul lago.
											Questo appartamento offre tutto il necessario per un soggiorno confortevole e indimenticabile.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>

						<Box>
							<ImageList cols={2}>
								{appDue.map((item, index) => (
									<ImageListItem key={index}>
										<img
											src={`${item}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={index}
											loading="lazy"
										/>
									</ImageListItem>
								))}
							</ImageList>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
							<Box sx={{ width: '15px', height: '600px', backgroundColor: 'secondary.main', marginRight: 5 }} />
							<Box sx={{ width: '500px' }}>
								<Typography sx={{ lineHeight: '2rem' }}>
									All'interno dell'appartamento troverete un ampio e confortevole letto matrimoniale, pensato per garantire un riposo rigenerante dopo
									una giornata trascorsa ad esplorare le meraviglie della zona. Il suo design elegante e accogliente crea un'atmosfera piacevole e
									rilassante, ideale per ricaricare le energie e godersi il meritato riposo.
									<Divider sx={{ paddingTop: 2, paddingBottom: 2 }} />
									Il bagno privato, dotato di tutti i comfort, offre un luogo tranquillo e riservato per rinfrescarsi e rilassarsi. Troverete una
									doccia spaziosa e tutti gli accessori necessari per il vostro comfort.
									<Divider sx={{ paddingTop: 2, paddingBottom: 2 }} />
									La cucina completamente attrezzata vi permetterà di preparare i vostri pasti preferiti durante il vostro soggiorno. Troverete tutto
									il necessario per soddisfare le vostre esigenze culinarie. Potrete gustare i vostri pasti sulla graziosa tavola da pranzo con vista
									sul lago, creando momenti indimenticabili durante la vostra permanenza.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default UnitsPage;
