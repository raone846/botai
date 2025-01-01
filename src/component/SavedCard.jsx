import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Bot from '../assets/Chat_Logo.png';
import Avatar from '../assets/Avtar.png';
import thumb from '../assets/thumb.png';
import Rating from '@mui/material/Rating';

function SavedCard() {
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('savedChats')) || [];
    setSavedChats(storedChats); // Keep the nested structure
  }, []);

  // Handle rating change
  const handleRatingChange = (arrayIndex, chatIndex, newRating) => {
    const updatedChats = [...savedChats];
    updatedChats[arrayIndex][chatIndex].rating = newRating; // Update rating in the specific chat
    setSavedChats(updatedChats);
    localStorage.setItem('savedChats', JSON.stringify(updatedChats)); // Save changes to localStorage
  };

  return (
    <Box
      sx={{
        borderRadius: '10px',
        p: 2,
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <label style={{ fontSize: '20px', fontWeight: '400', textAlign: 'left' }}>
        Today's Chats
      </label>
      {savedChats.map((chatArray, arrayIndex) => (
        <Box
          key={arrayIndex}
          sx={{
            background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)',
            borderRadius: '8px',
            boxShadow: '-4px 4px 15px 0px #0000001A',
            p: 2,
            mb: 2,
          }}
        >
          {chatArray.map((chat, chatIndex) => (
            <Box
              key={chatIndex}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                mb: 2,
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
                  src={chat.person === 'Soul AI' ? Bot : Avatar}
                  alt={chat.person}
                  sx={{
                    width: '100%',
                    height: '100%',
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
                    {chat.person}
                  </label>

                  {/* Message */}
                  <label
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      display: 'block',
                      textAlign: 'left',
                      marginBottom: '8px',
                    }}
                  >
                    {chat.msg}
                  </label>

                  {/* Time */}
                  {chat.time && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <label
                        style={{
                          fontSize: '12px',
                          fontWeight: '400',
                          color: '#0000009E',
                        }}
                      >
                        {chat.time}
                      </label>
                      {/* Thumbs up/down or Rating */}
                      {chat.rating ? (
                        <Rating
                          name={`rating-${arrayIndex}-${chatIndex}`}
                          value={chat.rating}
                          readOnly
                          max={5}
                          sx={{ 
                            ml: 2,
                            '& .MuiRating-iconFilled': {
                              color: '#000', // Gold for filled stars
                            },
                            '& .MuiRating-iconEmpty': {
                              color: '#000', // Grey for empty stars
                            },
                          }}
                        />
                      ) : (
                        chat.person === 'Soul AI' && (
                          <Box>
                            <img
                              src={thumb}
                              alt="thumb up"
                              style={{
                                cursor: 'pointer',
                                width: '20px',
                                height: '20px',
                                margin: '6px',
                              }}
                            />
                            <img
                              src={thumb}
                              alt="thumb down"
                              style={{
                                cursor: 'pointer',
                                width: '20px',
                                height: '20px',
                                margin: '6px',
                                transform: 'rotate(180deg)',
                              }}
                            />
                          </Box>
                        )
                      )}
                    </Box>
                  )}

                  {/* Feedback */}
                  {chat.feedback && (
                    <label
                      style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        display: 'block',
                        textAlign: 'left',
                        marginTop: '8px',
                      }}
                    >
                      Feedback: <span style={{ fontWeight: '400' }}>{chat.feedback}</span>
                    </label>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default SavedCard;
