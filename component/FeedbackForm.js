// FeedbackForm.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your feedback submission logic here
    console.log('Feedback submitted:', feedback);
    // You may want to send the feedback to your backend or perform other actions
  };

  return (
  
    <div className="feedbackForm">
    
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <Link to='/Thankyou' ><button>Submit Feedback</button></Link>
       
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
