import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AdminOverviewPage from './AdminOverviewPage';
import AdminBookings from './AdminBookings';
import AdminGuests from './AdminGuests';
import AdminUnits from './AdminUnits';
import AdminPayments from './AdminPayments';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function AdminNavigation() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 990 }}>
			<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs"
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					<Tab label="Overview" {...a11yProps(0)} />
					<Tab label="Prenotazioni" {...a11yProps(1)} />
					<Tab label="Pagamenti" {...a11yProps(2)} />
					<Tab label="Unità" {...a11yProps(3)} />
					<Tab label="Ospiti" {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<AdminOverviewPage />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<AdminBookings />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<AdminPayments />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<AdminUnits />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<AdminGuests />
				</TabPanel>
			</Box>
			<Box sx={{ display: { xs: 'block', md: 'none' }, minWidth: 320 }}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
					aria-label="scrollable force tabs example"
				>
					<Tab label="Overview" {...a11yProps(0)} />
					<Tab label="Prenotazioni" {...a11yProps(1)} />
					<Tab label="Pagamenti" {...a11yProps(2)} />
					<Tab label="Unità" {...a11yProps(3)} />
					<Tab label="Ospiti" {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<AdminOverviewPage />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<AdminBookings />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<AdminPayments />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<AdminUnits />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<AdminGuests />
				</TabPanel>
			</Box>
		</Box>
	);
}
