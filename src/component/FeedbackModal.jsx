import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Idea from '../assets/idea.png'; // Make sure to import the Idea image

function FeedbackModal({ open, feedback, onFeedbackChange, onFeedbackSubmit, onClose }) {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      sx={{ 
        '& .MuiDialog-paper': {
          width: '60vw',  // Set width to 60% of the viewport width
          maxWidth: 'none',  // Prevent default max-width to allow 60% width
          margin: '0 auto',  // Center the modal horizontally
          height: '30vh', // Set height to 40% of the viewport height
          display: 'flex',
          flexDirection: 'column',
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
        {/* Idea Icon */}
        <img src={Idea} alt="Idea" style={{ width: '24px', height: '24px' }} />
        Provide Additional Feedback

        {/* Cancel Button positioned on top right */}
        <Button 
          onClick={onClose} 
          color="black"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            fontSize: '32px',
            padding: '4px 8px',
          }}
        >
          X
        </Button>
      </DialogTitle>

      <DialogContent sx={{ flex: 1 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="Feedback"
          value={feedback}
          onChange={onFeedbackChange}
          sx={{
            marginBottom: '16px',
            height: '70%',
            mt:2  
          }}
        />
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'flex-end' }}>
        {/* Submit Button */}
        <Button sx={{ background: "#D7C7F4" }} onClick={onFeedbackSubmit} color="#000">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FeedbackModal;
