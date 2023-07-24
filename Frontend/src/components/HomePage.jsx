import { Masonry } from '@mui/lab';
import { Box, Button, Divider, Typography } from '@mui/material';
import GoogleMaps from './GoogleMaps';
import lovereUno from '../assets/Filler/Lovere.jpeg';
import lovereDue from '../assets/Filler/Lovere2.jpeg';
import lovereTre from '../assets/Filler/Lovere3.jpeg';
import lovereQuattro from '../assets/Filler/Lovere4.jpeg';
import lovereCinque from '../assets/Filler/Lovere5.jpeg';
import lovereSei from '../assets/Filler/Lovere6.jpeg';
import lovereSette from '../assets/Filler/Lovere7.jpeg';
import lovereOtto from '../assets/Filler/Lovere8.jpeg';
import lovereAlto from '../assets/Filler/lovereAlto.jpeg';
import lovereAltoDue from '../assets/Filler/lovereAltoDue.jpeg';

const itemData = [
	{
		img: lovereUno,
		title: 'Fern',
	},
	{
		img: lovereDue,
		title: 'Snacks',
	},
	{
		img: lovereTre,
		title: 'Mushrooms',
	},
	{
		img: lovereQuattro,
		title: 'Tower',
	},
	{
		img: lovereCinque,
		title: 'Sea star',
	},
	{
		img: lovereSei,
		title: 'Honey',
	},
	{
		img: lovereSette,
		title: 'Basketball',
	},
	{
		img: lovereOtto,
		title: 'Breakfast',
	},
];

const HomePage = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${require('../assets/Filler/LoverePano.jpeg')})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					minHeight: '40vh',
					position: 'relative',
				}}
			>
				<Typography
					variant="h6"
					noWrap
					color={'info'}
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontWeight: 500,
						fontSize: '3rem',
						color: 'secondary.main',
						textAlign: 'center',
						position: 'absolute',
						top: '80%',
						left: '40%',
					}}
				>
					Benvenuti sul lago delle meraviglie
				</Typography>
				<Typography
					variant="h6"
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						fontWeight: 500,
						fontSize: '2.5rem',
						color: 'secondary.main',
						textDecoration: 'none',
						textAlign: 'center',
						paddingTop: '3rem',
					}}
				>
					Benvenuti sul lago delle meraviglie
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
				<Button variant="contained" color="secondary" href="/book">
					<Typography variant="h5" sx={{ color: 'info', paddingInline: 4 }}>
						PRENOTA ORA IL TUO SOGGIORNO A CASA SUL LAGO
					</Typography>
				</Button>
			</Box>
			<Box sx={{ margin: 5 }}>
				<Box>
					<Masonry columns={3} spacing={2}>
						{itemData.map((item, index) => (
							<div key={index}>
								<img
									src={`${item.img}?w=162&auto=format`}
									srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
									style={{
										display: 'block',
										width: '100%',
									}}
								/>
							</div>
						))}
					</Masonry>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
				<Typography sx={{ textAlign: 'center', border: 2, borderColor: 'primary.main', lineHeight: '2rem', padding: 2, width: 1000 }}>
					Cari viaggiatori, siamo entusiasti di darvi il benvenuto a Casa sul Lago! <br /> Queste pagine sono dedicate a offrirvi un'esperienza unica
					di prenotazione dei nostri appartamenti vacanze a Lovere, uno dei gioielli nascosti, classificato come uno dei Borghi più belli d'Italia,
					sulle rive pittoresche del Lago d'Iseo.
					<img src={lovereAlto} alt="Lovere dall'alto" />
					<Divider sx={{ paddingBottom: 2 }} />
					Siamo qui per rendere i vostri sogni di vacanze realtà, fornendovi sistemazioni confortevoli e indimenticabili in questa splendida
					destinazione. <br /> Esplorando Lovere scoprirete che è una località affascinante situata sulla sponda nord-occidentale del suggestivo Lago
					d'Iseo, nel cuore della regione Lombardia. Questa pittoresca città, ricca di storia e cultura, è circondata da maestose montagne e offrirà
					ai visitatori un ambiente mozzafiato e rilassante durante tutto l'anno. <br />
					<img src={lovereAltoDue} alt="Lovere dall'alto" width={500} />
					<Divider sx={{ paddingTop: 2 }} />
					Con le nostre proprietà a Casa sul Lago siamo orgogliosi di offrire sistemazioni selezionate con cura per garantire il massimo comfort e la
					soddisfazione dei nostri ospiti. Ci teniamo particolarmente a far sentire a casa coloro che scelgono di soggiornare con noi, perchè non c`è
					nulla che possa rendere una vacanza migliore se non sentirsi come a casa.
				</Typography>
			</Box>

			<Box maxWidth="xl" sx={{ m: 4, pl: '6rem' }}>
				<GoogleMaps />
			</Box>
		</>
	);
};

export default HomePage;

// Siamo qui per rendere i vostri sogni di vacanze realtà, fornendovi sistemazioni confortevoli e indimenticabili in questa splendida
// destinazione. Esplorando Lovere Lovere è una località affascinante situata sulla sponda nord-occidentale del suggestivo Lago d'Iseo, nel
// cuore della regione Lombardia. Questa pittoresca città, ricca di storia e cultura, è circondata da maestose montagne e offrirà ai visitatori
// un ambiente mozzafiato e rilassante durante tutto l'anno. Le nostre Proprietà Su Casa sul Lago, siamo orgogliosi di offrire una vasta gamma
// di appartamenti vacanze selezionati con cura per garantire il massimo comfort e la soddisfazione dei nostri ospiti. Dalle romantiche case
// con vista sul lago per le coppie in cerca di una fuga romantica, agli spaziosi appartamenti familiari, abbiamo la soluzione perfetta per
// ogni esigenza e budget. Ogni proprietà è attentamente valutata per garantire standard di qualità elevati e soddisfare le vostre aspettative.
// Troverete alloggi arredati con gusto, dotati di servizi moderni e posizionati in prossimità delle attrazioni principali di Lovere.
// Esperienza Autentica Siamo più di una semplice piattaforma di prenotazione. Conosciamo e amiamo Lovere, e vogliamo condividere con voi la
// nostra passione per questa splendida destinazione. Saremo lieti di fornirvi consigli su cosa fare e vedere a Lovere, i migliori ristoranti
// locali, le attività da provare e le escursioni da non perdere. Facile e Sicura Prenotazione La nostra piattaforma di prenotazione è sicura,
// user-friendly e intuitiva. Con pochi clic, potrete visualizzare tutte le informazioni relative agli appartamenti, le tariffe e la
// disponibilità, consentendovi di pianificare la vostra vacanza in modo rapido e senza complicazioni. La sicurezza dei vostri dati è
// fondamentale per noi, e ci impegniamo a garantire la massima protezione durante tutto il processo di prenotazione. Il Nostro Impegno Siamo
// appassionati delle vacanze e ci dedichiamo a garantire che la vostra esperienza a Lovere sia indimenticabile. Il nostro team di supporto è
// sempre a vostra disposizione per rispondere a qualsiasi domanda o assistervi durante il vostro soggiorno. Scegli Casa sul Lago per le vostre
// prossime vacanze, e scoprite l'atmosfera magica e l'ospitalità autentica di questa incantevole destinazione sul Lago d'Iseo. Vi aspettiamo
// con braccia aperte per offrirvi un'esperienza indimenticabile! Grazie per averci scelto!
