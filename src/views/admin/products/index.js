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

const ProductListing = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <br />
        <br />
        <br />
        <br />
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
                      <TableCell>Equipment Name</TableCell>
                      <TableCell>Vessel Name</TableCell>
                      <TableCell>Ordered On</TableCell>
                      {/* Add more headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pendingEquipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        {/* Update table cells with relevant data */}
                        <TableCell>{equipment.equipment.eq_name}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>{formatDate(new Date(equipment.ordered_on))}</TableCell>
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
                      <TableCell>Equipment Name</TableCell>
                      <TableCell>Vessel Name</TableCell>
                      <TableCell>Ordered On</TableCell>
                      {/* Add more headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {purchasedEquipments.map((equipment) => (
                      <TableRow key={equipment._id}>
                        {/* Update table cells with relevant data */}
                        <TableCell>{equipment.equipment.eq_name}</TableCell>
                        <TableCell>{equipment.vessel.vesselName}</TableCell>
                        <TableCell>{formatDate(new Date(equipment.ordered_on))}</TableCell>
                        {/* Add more cells as needed */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProductListing;
