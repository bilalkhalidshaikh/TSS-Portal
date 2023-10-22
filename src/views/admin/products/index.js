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
import SearchBar from "../customers/SearchBar";
import axios from "axios";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Switch from "@mui/material/Switch";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { CircularProgress } from "@mui/material";

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

const ProductListing = ({ title }) => {
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
  const [pendingEquipments, setPendingEquipments] = useState([]);
  const [purchasedEquipments, setPurchasedEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchEquipmentPurchases = async () => {
    setIsLoading(true)
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(
        `${BASE_URL}/equipment-purchases/get-purchases`,
        {
          headers,
        }
      );

      const { pending, purchased } = response.data.data;
      setIsLoading(false)
      setPendingEquipments(pending);
      setPurchasedEquipments(purchased);
    } catch (error) {
      console.error("Error fetching equipment purchases:", error);
      setPendingEquipments([]);
      setPurchasedEquipments([]);
    }
  };

  useEffect(() => {
    fetchEquipmentPurchases();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
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

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [pendingSwitchState, setPendingSwitchState] = React.useState({});
  const [purchasedSwitchState, setPurchasedSwitchState] = React.useState({});

  const handleDeleteConfirmationOpen = (purchaseId) => {
    setSelectedPurchaseId(purchaseId);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setSelectedPurchaseId(null);
    setDeleteConfirmationOpen(false);
  };

  const handlePurchaseStatusChange = async (purchaseId, isPurchased,fetch) => {
    setIsLoading(true)
    fetch()
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      };

      const body = {
        purchaseId: purchaseId,
      };

      await axios.post(
        `${BASE_URL}/equipment-purchases/change-purchase-status`,
        body,
        {
          headers,
        }
      );
      fetch()
      fetchEquipmentPurchases();
      setIsLoading(false)
    } catch (error) {
      console.error("Error changing purchase status:", error);
    }
  };

  const handleDeletePurchaseRequest = async () => {
    setIsLoading(true)
    if (selectedPurchaseId) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        };

        const body = {
          purchaseId: selectedPurchaseId,
        };

        await axios.post(
          `${BASE_URL}/equipment-purchases/delete-purchase-request`,
          body,
          {
            headers,
          }
        );
        setIsLoading(false)
        fetchEquipmentPurchases();
        handleDeleteConfirmationClose();
      } catch (error) {
        console.error("Error deleting purchase request:", error);
      }
    }
  };

  const [alignment, setAlignment] = React.useState("pending");

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [state, setState] = React.useState({
    purchased: false,
    pending: false,
  });
  const handleSwitchChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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
              <Tab label="Pending" {...a11yProps(0)} />
              <Tab label="Purchased" {...a11yProps(1)} />
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
                      {/* Update table headers */}
                      <TableCell><b>Equipment Name</b></TableCell>
                      <TableCell><b>Vessel Name</b></TableCell>
                      <TableCell><b>Ordered On</b></TableCell>
                      <TableCell><b>Change Status</b></TableCell>
                      <TableCell><b>Actions</b></TableCell>

                      {/* Add more headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pendingEquipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        {/* Update table cells with relevant data */}
                        <TableCell>{equipment.equipment.eq_name}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>
                          {formatDate(new Date(equipment.ordered_on))}
                        </TableCell>
                        <TableCell>
                  




                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          handlePurchaseStatusChange(
                            equipment._id,
                            true,
                            fetchEquipmentPurchases
                          )
                        }
                      >
                      {equipment.is_added ?" Mark as Pending" :" Mark as Purchased"}
                      </Button>
      





                        </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() =>
                                handleDeleteConfirmationOpen(equipment._id)
                              }
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        {/* Add more cells as needed */}
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
                      {/* Update table headers */}
                      <TableCell><b>Equipment Name</b></TableCell>
                      <TableCell><b>Vessel Name</b></TableCell>
                      <TableCell><b>Ordered On</b></TableCell>
                      <TableCell><b>Change Status</b></TableCell>
                      <TableCell><b>Actions</b></TableCell>
                      {/* Add more headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {purchasedEquipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        {/* Update table cells with relevant data */}
                        <TableCell>{equipment.equipment.eq_name}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>
                          {formatDate(new Date(equipment.ordered_on))}
                        </TableCell>
                        {/* Add more cells as needed */}

                        <TableCell>
                        

                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          handlePurchaseStatusChange(
                            equipment._id,
                            true,
                            fetchEquipmentPurchases
                          )
                        }
                      >
                      {equipment.is_added ?" Mark as Pending" :" Mark as Purchased"}
                       
                      </Button>
      



                        </TableCell>
                        <TableCell>
                        <IconButton
                          onClick={() =>
                            handleDeleteConfirmationOpen(equipment._id)
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
          {/* Delete Confirmation Dialog */}
          <Dialog
            open={deleteConfirmationOpen}
            onClose={handleDeleteConfirmationClose}
          >
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              Are you sure you want to delete this purchase request?
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteConfirmationClose}>Cancel</Button>
              <Button onClick={handleDeletePurchaseRequest} color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
          {isLoading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
              }}
            >
              <CircularProgress color="primary" />
            </div>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListing;





// <FormControlLabel
// control={
//   <Switch
//     checked={
//       pendingSwitchState[equipment._id] || false
//     }
//     onChange={() => {
//       const newSwitchState = {
//         ...pendingSwitchState,
//         [equipment._id]:
//           !pendingSwitchState[equipment._id],
//       };
//       setPendingSwitchState(newSwitchState);
//       handlePurchaseStatusChange(
//         equipment._id,
//         newSwitchState[equipment._id],
//         fetchEquipmentPurchases
//       );
     
//     }}
//   />
// }
// label="Purchased"
// />