import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Chat_Logo from '../assets/Chat_Logo.png';
import ChatCard from './ChatCard';
import Card from './Card';
import SavedCard from './SavedCard';

function Chatbox({ chatHistory, handleSearch, handleSaveChat, updateChatHistory, pastConv, userInput, setUserInput }) {
  

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
        height: '100vh',
        width: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ textAlign: 'left', mb: 2, ml: { xs: 5, md: 0 } }}>
          <label
            style={{
              color: '#9785BA',
              fontWeight: '700',
              fontSize: '28px',
            }}
          >
            Bot AI
          </label>
        </Box>
      </Box>

      {pastConv ? (
        // If pastConv is true, display SavedChat
        <Box sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <label style={{fontSize:"28px", fontWeight:"400"}}>Conversation History</label>
          <SavedCard />
        </Box>
      ) : (
        // If chatHistory is empty, show the initial prompts
        chatHistory.length === 0 ? (
          <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <label style={{ fontSize: '28px', fontWeight: '500' }}>
              How Can I Help You Today?
            </label>
            <Box
              sx={{
                width: '65.3px',
                height: '69px',
                borderRadius: '50%',
                boxShadow: '0px 4px 4px 0px #00000040',
                overflow: 'hidden',
                margin: '16px 0',
              }}
            >
              <Box
                component="img"
                src={Chat_Logo}
                alt="logo"
                sx={{
                  width: '250%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '12px', marginTop: '20px' }}>
              <ChatCard text="Hi, what is the weather" subText="Get immediate AI generated response" />
              <ChatCard text="Hi, what is my location" subText="Get immediate AI generated response" />
              <ChatCard text="Hi, what is the temperature" subText="Get immediate AI generated response" />
              <ChatCard text="Hi, how are you" subText="Get immediate AI generated response" />
            </Box>
          </Box>
        ) : (
          // Otherwise, show the chat history
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {chatHistory.map((chat) => (
              <Card
                key={chat.id}
                id={chat.id}
                person={chat.person}
                msg={chat.msg}
                time={chat.time}
                updateChatHistory={updateChatHistory}
              />
            ))}
          </Box>
        )
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, width: '97%', p: 2, borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch(userInput)}
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <Button
          onClick={() => handleSearch(userInput)}
          sx={{ background: '#D7C7F4', color: 'black', textTransform: 'none', px: 2 }}
        >
          Ask
        </Button>
        <Button
          onClick={handleSaveChat}
          sx={{ background: '#D7C7F4', color: 'black', textTransform: 'none', px: 2 }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Chatbox;
