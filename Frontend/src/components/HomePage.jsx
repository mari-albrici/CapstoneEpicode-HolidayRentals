import { Box, Button, Typography } from '@mui/material';
import GoogleMaps from './GoogleMaps';

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
						backgroundColor: 'info.main',
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
						PRENOTA
					</Typography>
				</Button>
			</Box>

			<Box sx={{ margin: 5 }}>
				<Typography>
					Cari viaggiatori e amanti delle vacanze, siamo entusiasti di darvi il benvenuto su Casa sul Lago! Il nostro sito è dedicato a offrirvi
					un'esperienza unica di prenotazione di appartamenti vacanze a Lovere, uno dei gioielli nascosti sulle rive pittoresche del Lago d'Iseo, in
					Italia. Siamo qui per rendere i vostri sogni di vacanze realtà, fornendovi sistemazioni confortevoli e indimenticabili in questa splendida
					destinazione. Esplorando Lovere Lovere è una località affascinante situata sulla sponda nord-occidentale del suggestivo Lago d'Iseo, nel
					cuore della regione Lombardia. Questa pittoresca città, ricca di storia e cultura, è circondata da maestose montagne e offrirà ai visitatori
					un ambiente mozzafiato e rilassante durante tutto l'anno. Le nostre Proprietà Su Casa sul Lago, siamo orgogliosi di offrire una vasta gamma
					di appartamenti vacanze selezionati con cura per garantire il massimo comfort e la soddisfazione dei nostri ospiti. Dalle romantiche case
					con vista sul lago per le coppie in cerca di una fuga romantica, agli spaziosi appartamenti familiari, abbiamo la soluzione perfetta per
					ogni esigenza e budget. Ogni proprietà è attentamente valutata per garantire standard di qualità elevati e soddisfare le vostre aspettative.
					Troverete alloggi arredati con gusto, dotati di servizi moderni e posizionati in prossimità delle attrazioni principali di Lovere.
					Esperienza Autentica Siamo più di una semplice piattaforma di prenotazione. Conosciamo e amiamo Lovere, e vogliamo condividere con voi la
					nostra passione per questa splendida destinazione. Saremo lieti di fornirvi consigli su cosa fare e vedere a Lovere, i migliori ristoranti
					locali, le attività da provare e le escursioni da non perdere. Facile e Sicura Prenotazione La nostra piattaforma di prenotazione è sicura,
					user-friendly e intuitiva. Con pochi clic, potrete visualizzare tutte le informazioni relative agli appartamenti, le tariffe e la
					disponibilità, consentendovi di pianificare la vostra vacanza in modo rapido e senza complicazioni. La sicurezza dei vostri dati è
					fondamentale per noi, e ci impegniamo a garantire la massima protezione durante tutto il processo di prenotazione. Il Nostro Impegno Siamo
					appassionati delle vacanze e ci dedichiamo a garantire che la vostra esperienza a Lovere sia indimenticabile. Il nostro team di supporto è
					sempre a vostra disposizione per rispondere a qualsiasi domanda o assistervi durante il vostro soggiorno. Scegli Casa sul Lago per le vostre
					prossime vacanze, e scoprite l'atmosfera magica e l'ospitalità autentica di questa incantevole destinazione sul Lago d'Iseo. Vi aspettiamo
					con braccia aperte per offrirvi un'esperienza indimenticabile! Grazie per averci scelto!
				</Typography>
			</Box>

			<Box maxWidth="xl" sx={{ m: 4, pl: '6rem' }}>
				<GoogleMaps />
			</Box>
		</>
	);
};

export default HomePage;
