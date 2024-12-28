import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Bot from '../assets/Chat_Logo.png';
import Avatar from '../assets/Avtar.png';
import thumb from '../assets/thumb.png';
import Rating from '@mui/material/Rating';
import FeedbackModal from './FeedbackModal'; // Import the modal component

function Card({ id, person, msg, time, updateChatHistory }) {
  // State for rating and feedback modal
  const [ratingVisible, setRatingVisible] = useState(false);
  const [ratingValue, setRatingValue] = useState(0); // Rating value
  const [feedbackOpen, setFeedbackOpen] = useState(false); // Modal visibility
  const [feedback, setFeedback] = useState(''); // User feedback input

  // Toggle the rating visibility on thumbs icon click
  const handleThumbClick = () => {
    setRatingVisible(!ratingVisible); // Toggle visibility
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue); // Update the rating value
    setFeedbackOpen(true); // Open the feedback form when rating is given
  };

  // Handle feedback change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value); // Update feedback text
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = () => {
    // Construct the updated chat with feedback and rating
    const updatedChat = {
      id, // Pass the unique ID for the chat message
      person,
      msg,
      time,
      rating: ratingValue,
      feedback,
    };

    if (ratingValue > 0 || feedback) {
      updateChatHistory(updatedChat, id); // Use the ID to update the correct message
      setFeedbackOpen(false);
      setFeedback(''); // Clear feedback
    }
  };

  // Handle modal close without submitting
  const handleCloseModal = () => {
    setFeedbackOpen(false);
    setFeedback(''); // Clear feedback input when closing modal
  };

  return (
    <Box
      sx={{
        background: '#D7C7F421',
        borderRadius: '10px',
        p: 2,
        mb: 2,
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      {/* Avatar */}
      <Box
        sx={{
          width: '65.3px',
          height: '69px',
          borderRadius: '50%',
          boxShadow: '0px 4px 4px 0px #00000040',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={person === 'Soul AI' ? Bot : Avatar}
          alt={person}
          sx={{
            width: '100%',
            height: '200%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Message Content */}
      <Box>
        <Box>
          {/* Person Name */}
          <label
            style={{
              fontSize: '16px',
              fontWeight: '700',
              display: 'block',
              textAlign: 'left',
            }}
          >
            {person}
          </label>

          {/* Message */}
          <label
            style={{
              fontSize: '16px',
              fontWeight: '400',
              display: 'block',
              textAlign: 'left',
              marginBottom: '8px', // Add spacing if needed
            }}
          >
            {msg}
          </label>

          {/* Time and Thumbs Icons */}
          {time && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Time */}
              <label
                style={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#9E9E9E',
                }}
              >
                {time}
              </label>

              {/* Thumbs up / down for rating */}
              {person === 'Soul AI' && (
                <Box>
                  <img
                    src={thumb}
                    alt="thumb"
                    style={{
                      cursor: 'pointer',
                      width: '20px',
                      height: '20px',
                      margin: '6px',
                    }}
                    onClick={handleThumbClick}
                  />
                  <img
                    src={thumb}
                    alt="thumb"
                    style={{
                      cursor: 'pointer',
                      width: '20px',
                      height: '20px',
                      margin: '6px',
                      transform: 'rotate(180deg)',
                    }}
                    onClick={handleThumbClick}
                  />
                </Box>
              )}
            </Box>
          )}
        </Box>

        {/* Rating component */}
        {ratingVisible && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={handleRatingChange}
              max={5}
            />
          </Box>
        )}
      </Box>

      {/* Feedback Modal */}
      <FeedbackModal
        open={feedbackOpen}
        onClose={handleCloseModal}
        feedback={feedback}
        onFeedbackChange={handleFeedbackChange}
        onFeedbackSubmit={handleFeedbackSubmit}
      />
    </Box>
  );
}

export default Card;
