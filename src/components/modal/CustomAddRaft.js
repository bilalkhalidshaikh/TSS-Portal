import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { Block, Delete, Add, MoreVert } from '@mui/icons-material';
const CustomRaftFormDialog = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    RaftsName: '',
    RaftsDetail: '',
    mva: '',
    unitPrice: '',
    expiryDate: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform form submission logic
    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="primary"   sx={{ backgroundColor: '#11047A !important' }} onClick={handleOpen}>
      <Add/>  Add Rafts
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Rafts</DialogTitle>
        <DialogContent>
          <TextField
            name="RaftsName"
            label="Rafts Name"
            fullWidth
            value={formValues.RaftsName}
            onChange={handleInputChange}
          />
          &nbsp;
          <TextField
            name="RaftsDetail"
            label="Rafts Detail"
            fullWidth
            value={formValues.RaftsDetail}
            onChange={handleInputChange}
            multiline
            rows={3}
          />
          {/* <TextField
            name="mva"
            label="Mva"
            type="number"
            fullWidth
            value={formValues.mva}
            onChange={handleInputChange}
          />
          <TextField
            name="unitPrice"
            label="Unit Price"
            type="number"
            fullWidth
            value={formValues.unitPrice}
            onChange={handleInputChange}
          />
          <TextField
            name="expiryDate"
            label="Expiry Date"
            type="number"
            fullWidth
            value={formValues.expiryDate}
            onChange={handleInputChange}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            sx={{ backgroundColor: '#11047A' }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Add Rafts
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomRaftFormDialog;
