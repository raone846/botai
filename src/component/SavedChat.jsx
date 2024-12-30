import React from 'react';
import Box from '@mui/material/Box';
import logo from '../assets/Chat_Logo.png';
import NewChat from '../assets/NewChat.png';
import { Button } from '@mui/material';

function SavedChat({handleSaveChat}) {
  return (
    <Box
      sx={{
        width: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers items horizontally
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(0deg, #D7C7F4, #D7C7F4)',
          height: '47px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          pt: 1,
          pl: 2,
          pr: 1,
          width: '100%', // Ensures the header spans full width
        }}
      >
        <Box
          sx={{
            width: '33.58px',
            height: '32px',
            borderRadius: '40%',
            boxShadow: '0px 4px 4px 0px #00000040',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              width: '450%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        <label style={{ fontSize: '20px', fontWeight: '400' }}>New Chat</label>
        <Box
          component="img"
          src={NewChat}
          alt="NewChat"
          onClick={() => handleSaveChat([])}
          sx={{
            width: '24px',
            height: '24px',
            mr:2,
            cursor:"pointer"
          }}
        />
      </Box>

      <Button
        sx={{
          height: '39px',
          width: '80%',
          background: '#D7C7F4',
          borderRadius: '10px',
          color: '#414146',
          mt: 4,
          fontWeight: '700',
          textTransform: 'none',
          display: 'flex',
          justifyContent: 'center', // Centers text inside the button
        }}
      >
        Past Conversations
      </Button>
    </Box>
  );
}

export default SavedChat;
