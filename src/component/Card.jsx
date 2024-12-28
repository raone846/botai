import React from 'react';
import Box from '@mui/material/Box';
import Bot from '../assets/Chat_Logo.png';
import Avatar from '../assets/Avtar.png';

function Card({ person, msg, time }) {
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

    {/* Time */}
    {time && (
      <label
        style={{
          fontSize: '12px',
          fontWeight: '400',
          color: '#0000009E',
          display: 'block', // Ensures it takes full width
          textAlign: 'left', // Aligns to the left
        }}
      >
        {time}
      </label>
    )}
  </Box>
</Box>

    </Box>
  );
}

export default Card;
