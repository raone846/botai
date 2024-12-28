import React from 'react';
import Box from '@mui/material/Box';

function ChatCard({ text, subText }) {
  return (
    <Box sx={{
        width:"514px", 
        height:"111px", 
        background:"#fff",
        borderRadius:"10px", 
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"center", 
        alignItems:"flex-start", 
        gap:1, 
        pl:2
    }}>
        <label style={{fontSize:"20px", fontWeight:"700"}}>{text}</label>
        <label style={{color:"#00000080", fontSize:"16px", fontWeight:"400"}}>{subText}</label>
    </Box>
  )
}

export default ChatCard;