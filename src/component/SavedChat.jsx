import React from 'react';
import Box from '@mui/material/Box';
import logo from '../assets/Chat_Logo.png';
import NewChat from '../assets/NewChat.png';
import { Button } from '@mui/material';

function SavedChat() {
  return (
    <Box sx={{
        width: "17%",
        height: "100vh"
    }}>
        <Box sx={{
          background:"linear-gradient(0deg, #D7C7F4, #D7C7F4)",
          height: "47px",
          display: "flex",
          justifyContent:"space-between",
          alignItems:"baseline",
          pt: 1,
          pl:2,
          pr: 1
        }}>
            <Box
              sx={{
                width: "33.58px",
                height: "32px",
                borderRadius: "40%",
                boxShadow: '0px 4px 4px 0px #00000040',
                overflow: 'hidden', // Ensures the image does not overflow
                position: 'relative', // Helps to manage image positioning
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: '450%', // Ensures the image spans the width of the container
                  height: '100%', // Ensures the image spans the height of the container
                  objectFit: 'cover', // Adjusts the image to cover the entire box
                }}
              />
            </Box>

            
            <label style={{fontSize:"20px", fontWeight:"400"}}>New Chat</label>
            <Box 
              component="img"
              src={NewChat}
              alt="NewChat"
              sx={{
                width:"24px",
                height:"24px"
              }}
            />
        </Box>
        <Button sx={{
          height:"39px",
          width: "80%",
          background:"#D7C7F4",
          borderRadius:"10px",
          color:'#414146',
          mt:4,
          fontWeight:"700",
          textTransform:"none"

        }}>Past Conversations</Button>
    </Box>
  )
}

export default SavedChat