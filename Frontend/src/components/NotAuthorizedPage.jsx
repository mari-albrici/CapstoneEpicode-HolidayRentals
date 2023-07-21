import { Container } from '@mui/material';

const NotAuthorizedPage = () => {
	return (
		<>
			<Container fluid className="notAuthorized">
				<h1 className="fw-bold">ACCESSO NON AUTORIZZATO</h1>
				<p>Non puoi accedere a questa pagina.</p>
				<p>Contatta l'amministratore del sito per ulteriori informazioni.</p>
			</Container>
		</>
	);
};

export default NotAuthorizedPage;
