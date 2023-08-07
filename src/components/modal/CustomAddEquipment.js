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
//   const [open, setEOpen] = useState(false);
//   const [formEqValues, setFormEqValues] = useState({
//     equipmentsName: '',
//     mva: '',
//     unitPrice: '',
//     expiryDate: '',
//   });

//   const handleOpen = () => {
//     setEOpen(true);
//   };

//   const handleClose = () => {
//     setEOpen(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormEqValues((prevValues) => ({
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
//             value={formEqValues.equipmentsName}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="mva"
//             label="Mva"
//             type="number"
//             fullWidth
//             value={formEqValues.mva}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="unitPrice"
//             label="Unit Price"
//             type="number"
//             fullWidth
//             value={formEqValues.unitPrice}
//             onChange={handleInputChange}
//           />
//           <TextField
//             name="expiryDate"
//             label="Expiry Date"
//             type="number"
//             fullWidth
//             value={formEqValues.expiryDate}
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
  CircularProgress,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const AddEquipmentDialog = ({
  vesselId,
  onEquipmentAdded,
  fetchVesselInfo,
}) => {
  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";

  const [openE, setEOpen] = useState(false);
  const [equipmentEData, setEquipmentEData] = useState([]);
  const [selectedDaiEquipmentId, setSelectedDaiEquipmentId] = useState("");
  const [isEqLoading, setIsEqLoading] = React.useState(true);
  const [formEqValues, setFormEqValues] = useState({
    expiryDate: "",
    certificate: "",
  });

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const fetchEquipmentData = async () => {
    setIsEqLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(
        `${BASE_URL}/equipments/get-equipments`,
        { headers }
      );
      const equipmentEData = response.data.data;
      console.log(equipmentEData);
      setEquipmentEData(equipmentEData);
      fetchVesselInfo();
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    } finally {
      setIsEqLoading(false);
    }
  };

  const handleOpen = () => {
    setEOpen(true);
  };

  const handleClose = () => {
    setEOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormEqValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEquipmentSelect = (event) => {
    setSelectedDaiEquipmentId(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Perform the API call to add new equipment
      const response = await axios.post(
        `${BASE_URL}/vessel/add-vessel-equipment`,
        {
          equipment_id: selectedDaiEquipmentId,
          vesselId: vesselId && vesselId,
          expiry_date: formEqValues.expiryDate,
          certificate: formEqValues.certificate,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log(response.data);

      // Call the onEquipmentAdded callback to inform the parent component about the new equipment
      // onEquipmentAdded(response.data);

      handleClose();
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  return (
    <>
      {isEqLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9999,
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "#11047A !important" }}
        onClick={handleOpen}
      >
        <Add /> Add Equipments
      </Button>
      <Dialog open={openE} onClose={handleClose}>
        <DialogTitle>Add New Equipments</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Equipment</InputLabel>
            <Select
              value={selectedDaiEquipmentId}
              onChange={handleEquipmentSelect}
            >
              {equipmentEData.map((equipment) => (
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
            value={formEqValues.expiryDate}
            onChange={handleInputChange}
          />
          &nbsp;
          <TextField
            name="certificate"
            label="Certificate"
            fullWidth
            value={formEqValues.certificate}
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
