import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import SearchBar from "./../customers/SearchBar";
import axios from "axios";

const Equipments = () => {
  const [open, setOpen] = React.useState(false);
  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here, and update searchResults state accordingly.
    // For example, you can fetch data from an API based on the search term and update the results.
    // setSearchResults(updatedResults);

    console.log(searchTerm);
  };

  const [equipments, setEquipments] = useState([]);
  const [editEquipmentId, setEditEquipmentId] = useState(null);
  const [equipmentName, setEquipmentName] = useState("");
  const [mva, setMva] = useState(null);
  const [unitPrice, setUnitPrice] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);

  const fetchEquipments = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(
        `${BASE_URL}/equipments/get-equipments`,
        {
          headers,
        }
      );
      const equipmentData = response.data.data;
      setEquipments(equipmentData);
    } catch (error) {
      console.error("Error fetching equipment:", error);
      setEquipments([]);
    }
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  const handleDeleteEquipments = async (equipmentId) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/equipments/delete-equipment`,
        { equipmentId },
        {
          headers,
        }
      );
      // Remove the deleted equipment from the state
      setEquipments((prevEquipments) =>
        prevEquipments.filter((equipment) => equipment._id !== equipmentId)
      );
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAddEquipments = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      // Prepare the data to send in the request body
      const equipmentData = {
        eq_name: equipmentName,
        refId: "sds", // Update this with the appropriate value if needed
        expiry_period: expiryDate ? expiryDate.getTime() : null,
        mva: mva,
        unitPrice: unitPrice,
      };

      if (editEquipmentId) {
        // If an editEquipmentId is present, it means we are editing an existing equipment
        // Add the equipmentId to the request body
        equipmentData.id = editEquipmentId;

        // Make the API call to edit the equipment
        await axios.post(
          `${BASE_URL}/equipments/edit-equipment`,
          equipmentData,
          {
            headers,
          }
        );
      } else {
        // If editEquipmentId is not present, it means we are adding a new equipment
        // Make the API call to create a new equipment
        await axios.post(
          `${BASE_URL}/equipments/create-equipment`,
          equipmentData,
          {
            headers,
          }
        );
      }

      fetchEquipments();
      handleModalClose();
    } catch (error) {
      console.error("Error adding/editing equipment:", error);
    }
  };

  const handleEditEquipment = (equipment) => {
    setEquipmentName(equipment.eq_name);
    setMva(equipment.mva);
    setUnitPrice(equipment.unitPrice);
    setExpiryDate(new Date(equipment.expiry_period));
    setEditEquipmentId(equipment._id);
    handleModalOpen();
  };

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Box mt={2}>
          <Stack direction="row" spacing={-48}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleModalOpen}
              sx={{ backgroundColor: "#11047A", borderRadius: "25px" }}
            >
              Add New Equipments
            </Button>
            <SearchBar onSearch={handleSearch} />
          </Stack>
        </Box>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipments Name</TableCell>
                <TableCell>Mva</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell>Expiry Period</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipments.map((equipment) => (
                <TableRow key={equipment._id}>
                  <TableCell>{equipment.eq_name}</TableCell>
                  <TableCell>{equipment.mva}%</TableCell>
                  <TableCell>{equipment.unitPrice}$</TableCell>
                  <TableCell>{equipment.expiry_period}</TableCell>

                  <TableCell>
                    <IconButton onClick={() => handleEditEquipment(equipment)}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteEquipments(equipment._id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleModalClose}>
          <DialogTitle>
            {editEquipmentId ? "Edit Equipment" : "Add New Equipment"}
          </DialogTitle>

          <DialogContent>
            &nbsp;
            <TextField
              label="Equipments Name"
              fullWidth
              value={equipmentName}
              onChange={(e) => setEquipmentName(e.target.value)}
            />
            &nbsp;
            <TextField
              label="Mva"
              type="number"
              fullWidth
              value={mva}
              onChange={(e) => setMva(parseFloat(e.target.value))}
            />
            &nbsp;
            <TextField
              label="Unit Price"
              type="number"
              fullWidth
              value={unitPrice}
              onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
            />
            &nbsp;
            <TextField
              label="Expiry Date"
              type="date"
              fullWidth
              value={expiryDate ? formatDate(expiryDate) : ""}
              onChange={(e) => setExpiryDate(new Date(e.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button
              sx={{ backgroundColor: "#11047A" }}
              variant="contained"
              color="primary"
              onClick={handleAddEquipments}
            >
              {editEquipmentId ? "Edit Equipment" : "Add Equipment"}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};
// Add Equipments
// <DialogTitle>Add New Equipments</DialogTitle>
// <TableCell>
// <IconButton onClick={() => handleDeleteEquipments(equipment._id)}>
//   <Delete />
// </IconButton>
// </TableCell>

export default Equipments;
