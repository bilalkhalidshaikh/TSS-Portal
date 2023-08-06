// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
// } from '@mui/material';
// import { Block, Delete, Add, MoreVert } from '@mui/icons-material';
// const CustomFormDialog = () => {
//   const [open, setOpen] = useState(false);
//   const [formValues, setFormValues] = useState({
//     equipmentsName: '',
//     mva: '',
//     unitPrice: '',
//     expiryDate: '',
//   });

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Perform form submission logic
//     handleClose();
//   };

//   return (
//     <>
//       <Button variant="contained" color="primary"   sx={{ backgroundColor: '#11047A !important' }} onClick={handleOpen}>
//       <Add/>  Add Equipments
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add New Equipments</DialogTitle>
//         <DialogContent>
//           <TextField
//             name="equipmentsName"
//             label="Equipments Name"
//             fullWidth
//             value={formValues.equipmentsName}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="mva"
//             label="Mva"
//             type="number"
//             fullWidth
//             value={formValues.mva}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="unitPrice"
//             label="Unit Price"
//             type="number"
//             fullWidth
//             value={formValues.unitPrice}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="expiryDate"
//             label="Expiry Date"
//             type="number"
//             fullWidth
//             value={formValues.expiryDate}
//             onChange={handleInputChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             sx={{ backgroundColor: '#11047A' }}
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//           >
//             Add Equipments
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CustomFormDialog;




import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const AddEquipmentDialog = ({ vesselId, onEquipmentAdded }) => {
  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";

  const [open, setOpen] = useState(false);
  const [equipmentData, setEquipmentData] = useState([]);
  const [selectedEquipmentId, setSelectedEquipmentId] = useState("");
  const [formValues, setFormValues] = useState({
    expiryDate: "",
    certificate: "",
  });

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const fetchEquipmentData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(`${BASE_URL}/equipments/get-equipments`
      ,
      {headers}
      );
      const equipmentData = response.data.data;
      console.log(equipmentData)
      setEquipmentData(equipmentData);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    }
  };

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

  const handleEquipmentSelect = (event) => {
    setSelectedEquipmentId(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Perform the API call to add new equipment
      const response = await axios.post(
        `${BASE_URL}/vessel/add-vessel-equipment`,
        {
          equipment_id: selectedEquipmentId,
          vesselId:vesselId&&vesselId,
          expiry_date: formValues.expiryDate,
          certificate: formValues.certificate,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log(response.data)

      // Call the onEquipmentAdded callback to inform the parent component about the new equipment
      // onEquipmentAdded(response.data);

      handleClose();
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "#11047A !important" }}
        onClick={handleOpen}
      >
        <Add /> Add Equipments
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Equipments</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Equipment</InputLabel>
            <Select
              value={selectedEquipmentId}
              onChange={handleEquipmentSelect}
            >
              {equipmentData.map((equipment) => (
                <MenuItem key={equipment._id} value={equipment._id}>
                  {equipment.eq_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          &nbsp;
          <TextField
            name="expiryDate"
            type="date"
            fullWidth
            value={formValues.expiryDate}
            onChange={handleInputChange}
          />
          &nbsp;
          <TextField
            name="certificate"
            label="Certificate"
            fullWidth
            value={formValues.certificate}
            onChange={handleInputChange}
          />
          &nbsp;
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            sx={{ backgroundColor: "#11047A" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Add Equipment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddEquipmentDialog;
