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
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import SearchBar from "./../customers/SearchBar";
import axios from "axios";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#11047A", color: "#eee" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Service Near" {...a11yProps(0)} />
          <Tab label="Normal" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

const Rafts = ({ title }) => {
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
      const response = await axios.get(`${BASE_URL}/rafts/get-all-rafts`, {
        headers,
      });
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

  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const theme = createTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleChangeRaftRequestStatus = async (requestId) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/services/change-raft-request-status`,
        { requestId },
        {
          headers,
        }
      );
      // Update the status of the raft request in the state
      setEquipments((prevEquipments) =>
        prevEquipments.map((equipment) => {
          if (equipment._id === requestId) {
            return {
              ...equipment,
              // Toggle the service_done status
              service_done: !equipment.service_done,
            };
          }
          return equipment;
        })
      );
    } catch (error) {
      console.error("Error changing raft request status:", error);
    }
  };

  const handleDeleteServiceRequest = async (requestId) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/services/delete-service-request`,
        { requestId },
        {
          headers,
        }
      );
      // Remove the deleted service request from the state
      setEquipments((prevEquipments) =>
        prevEquipments.filter((equipment) => equipment._id !== requestId)
      );
    } catch (error) {
      console.error("Error deleting service request:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h6">{title}</Typography>
        <br />
        <Box sx={{ bgcolor: "background.paper" }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#11047A", color: "#eee" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Service Near" {...a11yProps(0)} />
              <Tab label="Normal" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Raft's Name</TableCell>
                      <TableCell>Serial Number</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell>Vessel Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {equipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        <TableCell>{equipment.raftName}</TableCell>
                        <TableCell>{equipment.serialNumber}</TableCell>
                        <TableCell>{equipment.size}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>{equipment.type}</TableCell>
                  

                        <TableCell>
                          <IconButton
                            onClick={() =>
                              handleDeleteServiceRequest(equipment._id)
                            }
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Raft's Name</TableCell>
                      <TableCell>Serial Number</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell>Vessel Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {equipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        <TableCell>{equipment.raftName}</TableCell>
                        <TableCell>{equipment.serialNumber}</TableCell>
                        <TableCell>{equipment.size}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>{equipment.type}</TableCell>
                        

                        <TableCell>
                          <IconButton
                            onClick={() =>
                              handleDeleteServiceRequest(equipment._id)
                            }
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </SwipeableViews>
        </Box>

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

export default Rafts;
