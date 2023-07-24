import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Box } from '@mui/material';

const GoogleMaps = () => {
	const mapContainerRef = useRef(null);

	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
			version: 'weekly',
		});

		const myLatLng = { lat: 45.808321, lng: 10.068279 };

		loader.load().then(() => {
			const google = window.google;
			if (mapContainerRef.current) {
				const map = new google.maps.Map(mapContainerRef.current, {
					zoom: 15,
					center: myLatLng,
				});

				new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: 'Casa sul Lago',
				});
			}
		});
	}, []);

	return <Box ref={mapContainerRef} maxWidth="xl" sx={{ height: '600px', display: 'flex', justifyContent: 'center', margin: 5 }}></Box>;
};

export default GoogleMaps;
