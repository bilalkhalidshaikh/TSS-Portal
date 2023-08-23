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
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';





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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const RequestedServices = () => {
  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";


  // const [requestedServices, setRequestedServices] = useState({
  //   pending: [],
  //   purchased: [],
  // });
  const [requestedServices, setRequestedServices] = useState([]);
  const [requestedPendingServices, setRequestedPendingServices] = useState([]);
  const [requestedFinishedServices, setRequestedFinishedServices] = useState([]);

  
  const fetchRequestedServices = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(`${BASE_URL}/rafts/get-service-requests`, {
        headers,
      });
      const serviceData = response.data.data;
      const { pending, finished } = response.data.data;

      setRequestedPendingServices(pending)
      setRequestedFinishedServices(finished);

      setRequestedServices(serviceData);
    } catch (error) {
      console.error("Error fetching requested services:", error);
      setRequestedServices({
        pending: [],
        purchased: [],
      });
    }
  };

  useEffect(() => {
    fetchRequestedServices();
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
        <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static" sx={{backgroundColor:"#11047A",color:'#eee'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Finished" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} dir={theme.direction}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Vessel's Name</TableCell>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Requested On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {requestedPendingServices.length ? (
              requestedPendingServices.map((service) => (
                <TableRow key={service?._id}>
                  <TableCell>{service?.vessel?.vesselName}</TableCell>
                  <TableCell>{service?.equipment?.eq_name}</TableCell>
                  <TableCell>{service?.equipment?.unitPrice}</TableCell>
                  <TableCell>{service?.ordered_on}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>Nothing to show here</TableCell>
              </TableRow>
            )}
          </TableBody>
          
          </Table>
        </TableContainer>
      </TabPanel>
      
      <TabPanel value={value} index={1} dir={theme.direction}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vessel's Name</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Raft Name</TableCell>
                <TableCell>Requested On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestedFinishedServices.map((service) => (
                <TableRow key={service?._id}>
                  <TableCell>{service?.vessel?.vesselName}</TableCell>
                  <TableCell>{service?.customer?.customerName}</TableCell>
                  <TableCell>{service?.raft?.raftName}</TableCell>
                  <TableCell>{service?.ordered_on}</TableCell>
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

export default RequestedServices;
