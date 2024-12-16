import { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Nav from '../components/Nav';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useLocation } from '../contexts/LocationContext';
function MapPage() {
	const { darkMode } = useDarkMode();
	const [marker, setMarker] = useState(null);
	const { location, handleSetLocationFromFav } = useLocation();
	useEffect(() => {
		if (location?.lat !== null && location?.lng !== null) {
			setMarker([location?.lat, location?.lng]);
		}
	}, []);
	const Markers = () => {
		const map = useMapEvents({
			click(e) {
				handleSetLocationFromFav({
					lat: e.latlng.lat,
					lng: e.latlng.lng,
				});
				setMarker([e.latlng.lat, e.latlng.lng]);
			},
		});

		return marker ? (
			<Marker
				key={0}
				position={marker}
				icon={customIcon}
				interactive={false}
			/>
		) : null;
	};
	const customIcon = new L.Icon({
		iconUrl: '/assets/marker.png',
		iconSize: [41, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
	});
	return (
		<div className={`${darkMode ? 'dark' : ''} `}>
			<div className="flex h-[100dvh] bg-light-background dark:bg-dark-background text-white gap-2 md:gap-4">
				<Nav />

				<div className="w-full ml-2  md:ml-4">
					{location?.lat !== null && (
						<MapContainer
							center={[location?.lat, location?.lng]}
							zoom={10}
							className="w-full h-full"
						>
							<TileLayer
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
							/>
							<Markers />
						</MapContainer>
					)}
				</div>
			</div>
		</div>
	);
}

export default MapPage;
