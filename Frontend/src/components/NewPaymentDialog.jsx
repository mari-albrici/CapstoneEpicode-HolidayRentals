import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Input } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postInvoice } from '../redux/actions';

const NewPaymentDialog = (props) => {
	const [formData, setFormData] = useState({
		detail: {
			currency_code: 'EUR',
			invoice_number: '',
			reference: 'Affitto casa vacanze',
			invoice_date: null,
			note: '',
			term: 'Pagamento immediato - immediate payment.',
			memo: '/',
			payment_term: {
				term_type: 'NET_10',
				due_date: null,
			},
		},
		invoicer: {
			name: {
				given_name: 'Marianna',
				surname: 'Albrici',
			},
			address: {
				address_line_1: 'Via Piò, 24',
				address_line_2: '',
				admin_area_2: 'Costa Volpino',
				admin_area_1: 'BG',
				postal_code: 24062,
				country_code: 'IT',
			},
			email_address: 'marianna.albrici@gmail.com',
			phones: [
				{
					country_code: '+39',
					national_number: 3407116365,
					phone_type: 'MOBILE',
				},
			],
			website: 'www.test.com',
			tax_id: 'ABcNkWSfb5ICTt73nD3QON1fnnpgNKBy- Jb5SeuGj185MNNw6g',
			logo_url: 'https://example.com/logo.PNG',
			additional_notes: '2-4',
		},
		primary_recipients: [
			{
				billing_info: {
					name: {
						given_name: 'Stephanie',
						surname: 'Meyers',
					},
					address: {
						address_line_1: '1234 Main Street',
						admin_area_2: 'Anytown',
						admin_area_1: 'CA',
						postal_code: 98765,
						country_code: 'US',
					},
					email_address: 'bill-me@example.com',
					phones: [
						{
							country_code: '+1',
							national_number: 4884551234,
							phone_type: 'HOME',
						},
					],
					additional_info_value: 'add-info',
				},
			},
		],
		items: [
			{
				name: 'Soggiorno - La Casa sul Lago',
				description: '',
				quantity: 3,
				unit_amount: {
					currency_code: 'EUR',
					value: 75.0,
				},
				tax: {
					name: 'IVA',
					percent: 22,
				},
				discount: {
					percent: 0,
				},
				unit_of_measure: 'NIGHTS',
			},
		],
		configuration: {
			partial_payment: {
				allow_partial_payment: true,
				minimum_amount_due: {
					currency_code: 'EUR',
					value: 20.0,
				},
			},
			allow_tip: true,
			tax_calculated_after_discount: true,
			tax_inclusive: false,
			template_id: 'TEMP-19V05281TU309413B',
		},
		amount: {
			breakdown: {
				discount: {
					invoice_discount: {
						percent: 0,
					},
				},
			},
		},
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const addNewPaymentIntent = async (event) => {
		event.preventDefault();
		try {
			dispatch(postInvoice(formData, navigate));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Dialog open={props.open} handleClose={props.handleClose}>
			<DialogTitle>Nuovo pagamento</DialogTitle>
			<DialogContent>
				<form onSubmit={addNewPaymentIntent}>
					<Container className="form-group">
						<FormLabel>Numero fattura:</FormLabel>
						<Input
							required
							type="text"
							name="invoice_number"
							placeholder="Numero fattura"
							value={formData.invoice_number}
							onChange={handleInputChange}
						/>
					</Container>
					<Container className="form-group">
						<FormLabel>Data fattura:</FormLabel>
						<Input required type="date" name="invoice_date" placeholder="Data fattura" value={formData.invoice_date} onChange={handleInputChange} />
					</Container>
					<Container className="form-group">
						<FormLabel>Description:</FormLabel>
						<Input
							required
							type="text"
							name="description"
							placeholder="Enter description"
							value={formData.items.description}
							onChange={handleInputChange}
						/>
					</Container>
					<Container className="form-group">
						<FormLabel>Notti:</FormLabel>
						<Input required type="number" name="quantity" placeholder="Numero notti" value={formData.items.quantity} onChange={handleInputChange} />
					</Container>
					<DialogActions>
						<Button onClick={props.handleClose} variant="outlined" color="info">
							Close
						</Button>
						<Button type="submit" variant="contained" color="success">
							Save
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default NewPaymentDialog;
