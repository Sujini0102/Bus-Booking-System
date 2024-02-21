// BusSelection.jsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import BusCancellation from './BusCancellation';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import './BusSelection.css';  // Import your CSS file

const BusSelection = () => {
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample data for places and buses
  const places = ['Coimbatore', 'Chennai', 'Banglore'];
  const buses = ['YBM', 'SRS', 'KPN'];

  const handleFromPlaceChange = (event) => {
    setFromPlace(event.target.value);
  };

  const handleToPlaceChange = (event) => {
    setToPlace(event.target.value);
  };

  const handleBusSelection = (event) => {
    setSelectedBus(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = () => {
    // You can perform any actions here when the user submits the form
    console.log(`Form submitted. From: ${fromPlace}, To: ${toPlace}, Bus: ${selectedBus}`);
  };

  return (
    <div className='BusSelection'>
    <div className="date-picker">
    <label>Select Date:</label>
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      placeholderText="Select a date"
    />

    <div className="bus-selection-container">
      <h2>Bus Selection</h2>
      
      <div className="place-dropdowns">
        <label htmlFor="fromPlace">From:</label>
        <select id="fromPlace" onChange={handleFromPlaceChange} value={fromPlace}>
          <option value="">Select From Place</option>
          {places.map((place, index) => (
            <option key={index} value={place}>{place}</option>
          ))}
        </select>

        <label htmlFor="toPlace">To:</label>
        <select id="toPlace" onChange={handleToPlaceChange} value={toPlace}>
          <option value="">Select To Place</option>
          {places.map((place, index) => (
            <option key={index} value={place}>{place}</option>
          ))}
        </select>
      </div>

      <div className="bus-dropdown">
        <label htmlFor="busSelection">Select Bus:</label>
        <select id="busSelection" onChange={handleBusSelection} value={selectedBus}>
          <option value="">Select Bus</option>
          {buses.map((bus, index) => (
            <option key={index} value={bus}>{bus}</option>
          ))}
        </select>
      </div>
    </div>
    


      {fromPlace && toPlace && selectedBus && (
        <p>You have selected a bus from {fromPlace} to {toPlace}. Bus: {selectedBus}</p>
      )}
      
       <div><Link to='/SeatSelection' >  <button onClick={handleSubmit} className="submit-button">Submit</button></Link></div>
    </div>
         {/* <BusCancellation/> */}
    </div>
  );
};

export default BusSelection;
