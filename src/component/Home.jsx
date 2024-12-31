import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Chatbox from './Chatbox';
import SavedChat from './SavedChat';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import qaData from '../data/sampleData.json'; // Import the JSON file

function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [savedChats, setSavedChats] = useState([]);
  const [pastConv, setPastConv] = useState(false);

  const handlePastChat = () => {
    setPastConv((prevState) => !prevState);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSearch = (userInput) => {
    const currentTime = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());

    if (userInput.trim() === '') {
      setChatHistory((prev) => [
        ...prev,
        {
          id: new Date().getTime(),
          person: 'User',
          msg: 'Please enter a question.',
          time: currentTime,
        },
      ]);
      return;
    }

    const match = qaData.find((item) =>
      item.question.toLowerCase() === userInput.toLowerCase()
    );

    const botResponse = match
      ? match.response
      : 'Sorry, I don’t have an answer to that question.';

    const newChatHistory = [
      { id: new Date().getTime(), person: 'You', msg: userInput, time: currentTime },
      { id: new Date().getTime() + 1, person: 'Soul AI', msg: botResponse, time: currentTime },
    ];

    setChatHistory((prev) => [...prev, ...newChatHistory]);

    const storedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const updatedHistory = [...storedHistory, ...newChatHistory];
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  const handleSaveChat = () => {
    if (chatHistory.length === 0) return;

    setSavedChats((prev) => [...prev, chatHistory]);
    setChatHistory([]);

    const storedSavedChats = JSON.parse(localStorage.getItem('savedChats')) || [];
    const updatedSavedChats = [...storedSavedChats, chatHistory];
    localStorage.setItem('savedChats', JSON.stringify(updatedSavedChats));
  };

  const updateChatHistory = (updatedChat, id) => {
    setChatHistory((prev) =>
      prev.map((chat) => (chat.id === id ? { ...chat, ...updatedChat } : chat))
    );

    const storedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const updatedHistory = storedHistory.map((chat) =>
      chat.id === id ? { ...chat, ...updatedChat } : chat
    );
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          top: '16px',
          left: '16px',
        }}
      >
        <IconButton onClick={toggleDrawer(true)} aria-label="open drawer">
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <SavedChat handleSaveChat={handleSaveChat} handlePastChat={handlePastChat} />
        </Box>
      </Drawer>

      <Box
        sx={{
          flex: { md: '0 0 19.8%' },
          display: { xs: 'none', md: 'block' },
          borderRight: { md: '1px solid #ccc' },
          overflowY: 'auto',
        }}
      >
        <SavedChat handleSaveChat={handleSaveChat} handlePastChat={handlePastChat} />
      </Box>

      <Box
        sx={{
          flex: { md: '0 0 80%' },
          width: '100%',
        }}
      >
        <Chatbox
          chatHistory={chatHistory}
          handleSearch={handleSearch}
          handleSaveChat={handleSaveChat}
          updateChatHistory={updateChatHistory}
          pastConv={pastConv}
        />
      </Box>
    </Box>
  );
}

export default Home;
