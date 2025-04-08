import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import GoBackToHome from './GoBacktoHome';

//[
// {
//   "City":"Bay Minette",
//   "State":"AL",
//   "Population":"8044",
//   "Latitude":"30.88296",
//   "Longitude":"-87.77305"
// },
//  ...]

type CityType = {
  id?: number;
  City: string;
  State: string;
  Latitude: string;
  Longitude: string;
  Population: string;
  distance?: number;
};


const cities: CityType[] = [];

// Component to dynamically update map bounds
const MapBounds = ({ cities }: { cities: CityType[] }) => {
  const map = useMap();

  useEffect(() => {
    if (cities.length > 0) {
      const bounds = cities.map((city) => [
        parseFloat(city.Latitude),
        parseFloat(city.Longitude),
      ]);
      map.fitBounds(bounds, { padding: [1, 1] }); // Adding padding for better visibility
    }
  }, [cities, map]);

  return null;
};

export default function SuggestedCities() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [suggestedCities, setSuggestedCities] = useState<CityType[]>([]);

  useEffect(() => {
    fetch('/public/cities.json')
      .then((res) => res.json())
      .then((data: CityType[]) => {
        //add id to each city
        data.forEach((city: CityType, index: number) => {
          city.id = index;
        });
        cities.push(...data);
      });
  }, []);
  // console.log('cities', cities);

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(parseFloat(e.target.value));
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(parseFloat(e.target.value));
  };

  useEffect(() => {
    const citySet = new Set<number>();
    const sortedCities: CityType[] = cities
      .map((city) => {
        const distance = Math.sqrt(
          Math.pow(parseFloat(city.Latitude) - latitude, 2) +
          Math.pow(parseFloat(city.Longitude) - longitude, 2)
        );
        return { ...city, distance };
      })
      .sort((a, b) => a.distance - b.distance)
      .filter((city) => {
        if (city.id !== undefined && !citySet.has(city.id)) {
          citySet.add(city.id);
          return true;
        }
        return false;
      })
      .slice(0, 5); // Limit to 20 cities

    setSuggestedCities(sortedCities);
  }, [latitude, longitude]);
  console.log('suggestedCities', suggestedCities);


  return (
    <div>
      <GoBackToHome />
      <h1>US City Suggestion App</h1>
      <div>
        <label>Latitude: </label>
        <input type="number" value={latitude} onChange={handleLatitudeChange} />
        <label>Longitude: </label>
        <input type="number" value={longitude} onChange={handleLongitudeChange} />
      </div>
      <h2>Suggested Cities</h2>
      <ul>
        {suggestedCities.map((city) => (
          <li key={city?.id}>{city.City} (Pop: {city.Population}) Distance: {city.distance}</li>
        ))}
      </ul>
      <MapContainer zoom={5} style={{ height: '400px', width: '100%' }} whenCreated={(map) => map.setView([latitude, longitude])}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapBounds cities={suggestedCities} />
        {suggestedCities.map((city) => (
          <Marker key={city?.id} position={[parseFloat(city.Latitude), parseFloat(city.Longitude)]}>
            <Popup>{city.City}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
