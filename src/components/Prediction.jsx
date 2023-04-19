import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightblue',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function BasicModal(props) {
  
  const {showPrice, setShowPrice} = props;

  return (
    <div>
      <Modal
        open={showPrice}
        onClose={() => setShowPrice(false)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" color="darkcyan" fontWeight="bold">
            Predicted Price
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }} color="darkslategray" fontWeight="bold">
            Rs 100,000,000
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}