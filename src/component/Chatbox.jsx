import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Chat_Logo from '../assets/Chat_Logo.png';
import ChatCard from './ChatCard';
import Card from './Card';
import qaData from '../data/sampleData.json'; // Import the JSON file

function Chatbox() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSearch = () => {
    const currentTime = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
    
    if (userInput.trim() === '') {
      setChatHistory((prev) => [
        ...prev,
        {
          id: new Date().getTime(), // Unique ID based on the timestamp
          person: 'User',
          msg: 'Please enter a question.',
          time: currentTime,
        },
      ]);
      return;
    }
    
    // Search the JSON data
    const match = qaData.find((item) =>
      item.question.toLowerCase() === userInput.toLowerCase()
    );
    
    const botResponse = match
      ? match.response
      : 'Sorry, I don’t have an answer to that question.';
    
    // Add user input and bot response to chat history
    const newChatHistory = [
      { id: new Date().getTime(), person: 'You', msg: userInput, time: currentTime },
      { id: new Date().getTime() + 1, person: 'Soul AI', msg: botResponse, time: currentTime },
    ];
    
    setChatHistory((prev) => [...prev, ...newChatHistory]);
    
    // Save the new chat history (question + response) to localStorage
    const storedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const updatedHistory = [...storedHistory, ...newChatHistory];
    
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
    
    setUserInput(''); // Clear the input field
  };
  

  // Function to update chat history with feedback and rating
  // In Chatbox component
  const updateChatHistory = (updatedChat, id) => {
    // Check if updatedChat contains feedback and rating
    const isFeedbackProvided = updatedChat.rating !== undefined && updatedChat.feedback !== '';
    
    // Update only the chat message with the matching ID
    setChatHistory((prev) => {
      return prev.map((chat) =>
        chat.id === id ? { ...chat, ...updatedChat } : chat
      );
    });
  
    // Save to localStorage only if feedback or rating is provided for the specific message
    if (isFeedbackProvided) {
      const storedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
      const updatedHistory = storedHistory.map((chat) =>
        chat.id === id ? { ...chat, ...updatedChat } : chat
      );
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
    }
  };
  

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
        height: '100vh',
        width: '83%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
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

      {chatHistory.length === 0 ? (
        // Default Chat Area
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            <ChatCard text="Hi, what is the weather" subText="Get immediate AI generated response" />
            <ChatCard text="Hi, what is my location" subText="Get immediate AI generated response" />
            <ChatCard text="Hi, what is the temperature" subText="Get immediate AI generated response" />
            <ChatCard text="Hi, how are you" subText="Get immediate AI generated response" />
          </Box>
        </Box>
      ) : (
        // Chat History Display
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
              key={chat.id} // Ensure each Card has a unique key
              id={chat.id} // Pass the unique ID
              person={chat.person}
              msg={chat.msg}
              time={chat.time}
              updateChatHistory={updateChatHistory} // Pass the update function
            />
          ))}
        </Box>
      )}

      {/* Input fields at the bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          width: '97%',
          p: 2,
          borderTop: '1px solid #ccc',
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            background: '#D7C7F4',
            color: 'black',
            textTransform: 'none',
            px: 2,
          }}
        >
          Ask
        </Button>
        <Button
          sx={{
            background: '#D7C7F4',
            color: 'black',
            textTransform: 'none',
            px: 2,
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Chatbox;
