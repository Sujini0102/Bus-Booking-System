// PaymentPage.jsx


import React, { useState } from 'react';
import './PaymentPage.css';
import { Link } from 'react-router-dom';


const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');


  const handlePayment = () => {
    // Add your payment processing logic here (e.g., integrate with a payment gateway)
    alert('Payment successful!');
  

  };
 

  return (
    <div className="payment">
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
        />


        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
        />


        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
        />

<Link to='/FeedbackForm' ><button type="button" onClick={handlePayment}>
          Make Payment
        </button></Link>
       
      </form>
    </div></div>
  );
};


export default PaymentPage;
