// SeatSelection.js
import React, { useState } from 'react';
import './SeatSelection.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const SeatSelection = () => {
  const totalcol = 5; // Customize based on your bus layout
  const seatsPercol= 8; // Customize based on your bus layout
  const [selectedSeats, setSelectedSeats] = useState([]);


  const handleSeatClick = (col, seat) => {
    const newSelectedSeat = `${col}-${seat}`;
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(newSelectedSeat)
        ? prevSelectedSeats.filter((seat) => seat !== newSelectedSeat)
        : [...prevSelectedSeats, newSelectedSeat]
    );
  };


  const isSeatSelected = (col, seat) => {
    return selectedSeats.includes(`${col}-${seat}`);
  };


  // Generate seat layout based on totalRows and seatsPerRow
  const renderSeatLayout = () => {
    const seatLayout = [];
    for (let col = 1; col<= totalcol; col++) {
      const colSeats = [];
      for (let seat = 1; seat <= seatsPercol; seat++) {
        const seatNumber = seat + (col - 1) * seatsPercol;
        const isSelected = isSeatSelected(col, seatNumber);


        colSeats.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(col, seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seatLayout.push(
        <div key={col} className="seat-col">
          Col {col}
          {colSeats}
        </div>
      );
    }
    return seatLayout;
  };


  return (
    
    <div className="seat-selection-container">
      <h2>Bus Seat Selection</h2>
      <div className="seat-layout">{renderSeatLayout()}</div>
      <div>
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
           <Link to='/BusCancellation' ><button> Cancel Bus</button> </Link>
           <Link to='/PaymentPage'><button>Go to Payment</button></Link>
      </div>
    </div>
    
  );
};


export default SeatSelection;



