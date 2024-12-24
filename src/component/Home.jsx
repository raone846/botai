import React from 'react';
import Box from '@mui/material/Box';
import Chatbox from './Chatbox';
import SavedChat from './SavedChat';

function Home() {
  return (
    <Box sx={{display:'flex'}}>
        <SavedChat />
        <Chatbox />
    </Box>
  )
}

export default Home