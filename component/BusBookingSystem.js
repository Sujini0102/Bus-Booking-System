// BusBookingSystem.js
import React, { useState } from 'react';
import './BusBookingSystem.css';


const placesfrom = ['Coimbatore', 'Chennai', 'Banglore', 'Hyderabed'];
const placesto = ['Coimbatore', 'Chennai', 'Banglore', 'Hyderabed'];
const busesfrom = {
  'Coimbatore': ['Bus 1A', 'Bus 2A', 'Bus 3A'],
  'Chennai': ['Bus 1B', 'Bus 2B', 'Bus 3B'],
  'Banglore': ['Bus 1C', 'Bus 2C', 'Bus 3C'],
  'Hyderabed': ['Bus 1D', 'Bus 2D', 'Bus 3D'],
};
const busesto = {
    'Coimbatore': ['Bus A', 'Bus A', 'Bus A'],
    'Chennai': ['Bus B', 'Bus B', 'Bus B'],
    'Banglore': ['Bus C', 'Bus C', 'Bus C'],
    'Hyderabed': ['Bus D', 'Bus D', 'Bus D'],
  };


const BusBookingSystem = () => {
  const [selectedPlacefrom, setSelectedPlacefrom] = useState(placesfrom[0]);
  const [selectedBusfrom, setSelectedBusfrom] = useState('');


  const handlePlacefromChange = (event) => {
    const place = event.target.value;
    setSelectedPlacefrom(place);
    setSelectedBusfrom('');
  };
  const [selectedPlaceto, setSelectedPlaceto] = useState(placesto[0]);
  const [selectedBusto, setSelectedBusto] = useState('');
  const handlePlacetoChange = (event) => {
    const place = event.target.value;
    setSelectedPlaceto(place);
    setSelectedBusto('');
  };


  const handleBusfromChange = (event) => {
    const bus = event.target.value;
    setSelectedBusfrom(bus);
  };
  const handleBustoChange = (event) => {
    const bus = event.target.value;
    setSelectedBusto(bus);
  };


  return (
    <div className="bus">
    <div className="bus-booking-system">
      <h1>Bus Booking System</h1>
      <div className="dropdown-container">
        <label htmlFor="placesDropdown">Select a Place from:</label>
        <select
          id="placesDropdown"
          onChange={handlePlacefromChange}
          value={selectedPlacefrom}
        >
          {placesfrom.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown-container">
        <label htmlFor="placesDropdown">Select a Place to:</label>
        <select
          id="placesDropdown"
          onChange={handlePlacetoChange}
          value={selectedPlaceto}
        >
          {placesto.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </div>
      {selectedPlacefrom && (
        <div className="dropdown-container">
          <label htmlFor="busesDropdown">Select a Bus:</label>
          <select
            id="busesDropdown"
            onChange={handleBusfromChange}
            value={selectedBusfrom}
          >
            <option value="">Select a bus</option>
            {busesfrom[selectedPlacefrom].map((bus) => (
              <option key={bus} value={bus}>
                {bus}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedPlaceto && (
        <div className="dropdown-container">
          <label htmlFor="busesDropdown">Select a Bus:</label>
          <select
            id="busesDropdown"
            onChange={handleBustoChange}
            value={selectedBusto}
          >
            <option value="">Select a bus</option>
            {busesto[selectedPlaceto].map((bus) => (
              <option key={bus} value={bus}>
                {bus}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="booking-summary">
        {selectedPlacefrom && selectedBusfrom && (
          <p>
            Booking summary: You have selected {selectedBusfrom} for {selectedPlacefrom}.
          </p>
        )}
      </div>
    </div>
    
    </div>
  );
};


export default BusBookingSystem;
