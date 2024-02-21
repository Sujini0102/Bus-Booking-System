// BusCancellation.jsx

import React, { useState } from 'react';
import './BusCancellation.css';
import { Link } from 'react-router-dom';

const BusCancellation = () => {
  const [bookingId, setBookingId] = useState('');

  const handleBookingIdChange = (event) => {
    setBookingId(event.target.value);
  };

  const handleCancelBooking = () => {
    // Implement cancellation logic (API call, etc.)
    // For now, let's just log the cancellation details
    console.log(`Booking ID ${bookingId} has been canceled.`);
  };

  return (
    <div className="Cancellation">
    <div className="bus-cancellation-container">
      <h2>Bus Cancellation</h2>
      <div className="cancel-form">
        <label htmlFor="bookingId">Enter Booking ID:</label>
        <input
          type="text"
          id="bookingId"
          value={bookingId}
          onChange={handleBookingIdChange}
          placeholder="Enter Booking ID"
        />
         <label htmlFor="busName">Enter Bus Name:</label>
         <input
          placeholder="Enter Bus Name"
          />
          <label htmlFor="Date">Enter Date:</label>
          <input
          placeholder="Enter Date"
          />
        
        <Link to='/CancelSuccess'><button onClick={handleCancelBooking}>  Cancel Booking </button></Link>
      </div>
    </div>
    </div>
  );
};

export default BusCancellation;
