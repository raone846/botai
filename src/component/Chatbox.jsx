import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Chatbox() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
        height: "100vh",
        width: "85%",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <label
            style={{
              color: "#9785BA",
              fontWeight: '700',
              fontSize: '28px',
            }}
          >
            Bot AI
          </label>
        </Box>
        <Box>
            
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <input
            type="text"
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
          <Button
            type="submit"
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
            type="submit"
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
    </Box>
  );
}

export default Chatbox;
