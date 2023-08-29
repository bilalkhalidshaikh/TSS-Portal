// // Chakra imports
// import { Box, SimpleGrid } from "@chakra-ui/react";
// import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
// import CheckTable from "views/admin/dataTables/components/CheckTable";
// import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
// import ComplexTable from "views/admin/dataTables/components/ComplexTable";
// import {
//   columnsDataDevelopment,
//   columnsDataCheck,
//   columnsDataColumns,
//   columnsDataComplex,
// } from "views/admin/dataTables/variables/columnsData";
// import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
// import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
// import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
// import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
// import React from "react";

// export default function Settings() {
//   // Chakra Color Mode
//   return (
//     <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
//       {/* <SimpleGrid
//         mb='20px'
//         columns={{ sm: 1, md: 2 }}
//         spacing={{ base: "20px", xl: "20px" }}>
//         <DevelopmentTable
//           columnsData={columnsDataDevelopment}
//           tableData={tableDataDevelopment}
//         />
//         <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
//         <ColumnsTable
//           columnsData={columnsDataColumns}
//           tableData={tableDataColumns}
//         />
//         <ComplexTable
//           columnsData={columnsDataComplex}
//           tableData={tableDataComplex}
//         />
//       </SimpleGrid> */}
//       <h1>Under Development...</h1>
//     </Box>
//   );
// }

// import React,{useState} from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
//   MenuItem,
//   Stack
// } from "@mui/material";
// import { Add, Delete } from "@mui/icons-material";
// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// import {Link} from "react-router-dom"
// import SearchBar from "./Searchbar";

// const Vessel = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleModalOpen = () => {
//     setOpen(true);
//   };
//   const handleModalClose = () => {
//     setOpen(false);
//   };

//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (searchTerm) => {
//     // Implement your search logic here, and update searchResults state accordingly.
//     // For example, you can fetch data from an API based on the search term and update the results.
//     // setSearchResults(updatedResults);

//     console.log(searchTerm);
//   };

//   const [vessels, setVessels] = React.useState([
//     {
//       id: 1,
//       vesselName: "Vessel 1",
//       registrationNumber: "12345",
//       type: "Type 1",
//       ownerName: "Owner 1",
//       createdAt: "2023-07-04",
//     },
//     // Add more vessel data as needed
//   ]);

//   const handleAddVessel = () => {
//     // Implement the logic to add a new vessel
//     handleModalClose();
//   };

//   const handleDeleteVessel = (vesselId) => {
//     // Implement the logic to delete a vessel
//   };

//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <br />
//         <br />
//         <br />
//         <br />
//         <Box mt={2}>

//           <Stack direction="row" spacing={-48}>
//           <Button
//           variant="contained"
//           startIcon={<Add />}
//           onClick={handleModalOpen}
//           sx={{ backgroundColor: "#11047A",borderRadius:'25px' }}
//         >
//           Add New Vessel
//         </Button>
//           <SearchBar onSearch={handleSearch} />
//         </Stack>
//         </Box>
//         <br />
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Vessel Name</TableCell>
//                 <TableCell>Registration Number</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Owner Name</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {vessels.map((vessel) => (
//                 <TableRow key={vessel.id}>
//                   <TableCell><Link to="/admin/vessel-detail">{vessel.vesselName}</Link></TableCell>
//                   <TableCell>{vessel.registrationNumber}</TableCell>
//                   <TableCell>{vessel.type}</TableCell>
//                   <TableCell>{vessel.ownerName}</TableCell>
//                   <TableCell>{vessel.createdAt}</TableCell>
//                   <TableCell>
//                     <IconButton onClick={() => handleDeleteVessel(vessel.id)}>
//                       <Delete />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <Dialog open={open} onClose={handleModalClose}>
//           <DialogTitle>Add New Vessel</DialogTitle>
//           <DialogContent>
//             <TextField label="Vessel Name" fullWidth />
//             <TextField label="Registration Number" fullWidth />
//             <TextField label="Type" fullWidth />
//             <TextField select label="Owner Name" fullWidth>
//               <MenuItem value="Owner 1">Owner 1</MenuItem>
//               {/* Add more owner options as needed */}
//             </TextField>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleModalClose}>Cancel</Button>
//             <Button
//               sx={{ backgroundColor: "#11047A" }}
//               variant="contained"
//               color="primary"
//               onClick={handleAddVessel}
//             >
//               Add Vessel
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Vessel;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
//   MenuItem,
//   Stack,
// } from "@mui/material";
// import { Add, Delete, Block, CheckCircle } from "@mui/icons-material";
// import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import SearchBar from "../customers/SearchBar";
// import { CircularProgress } from "@mui/material";

// const Vessel = () => {
//   const [open, setOpen] = React.useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleModalOpen = () => {
//     setOpen(true);
//   };
//   const handleModalClose = () => {
//     setOpen(false);
//   };

//   const [searchResults, setSearchResults] = useState([]);

//   const [vesselName, setVesselName] = useState("");
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [vesselType, setVesselType] = useState("");
//   const [vesselOwner, setVesselOwner] = useState("");
//   const [customers, setCustomers] = useState([]);

//   const BASE_URL = "https://api.raft-service.com";
//   const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";

//   const handleSearch = (searchTerm) => {
//     // Implement your search logic here, and update searchResults state accordingly.
//     // For example, you can fetch data from an API based on the search term and update the results.
//     // setSearchResults(updatedResults);

//     console.log(searchTerm);
//   };

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       };
//       try {
//         const response = await axios.get(
//           "https://api.raft-service.com/customers/get-all-customers",
//           { headers }
//         );
//         // Assuming the response data is an array of customers
//         setCustomers(response.data.data); // Set customers state with the 'data' property of the response
//         console.log(response.data.data); // Check the data in the console
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };
//     fetchCustomers();
//   }, []);

//   useEffect(() => {
//     console.log(customers);
//   }, [customers]);

//   const [vessels, setVessels] = React.useState([]);

//   const fetchVessels = async () => {
//     setIsLoading(true)
//     // Replace BASE_URL with your actual API base URL
//     // const BASE_URL = "https://api.example.com";
//     // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     };

//     try {
//       const response = await axios.get(`${BASE_URL}/vessel/get-all-vessels`, {
//         headers,
//       });
//       const vesselData = response.data.data;
//       setVessels(vesselData);
//     } catch (error) {
//       console.error("Error fetching vessels:", error);
//       setVessels([]);
//     }finally {
//       setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
//     }
//   };

//   useEffect(() => {
//     fetchVessels();
//   }, []);

//   const handleDeleteVessel = async (vesselId) => {
//     setIsLoading(true)
//     // Replace BASE_URL with your actual API base URL
//     // const BASE_URL = "https://api.example.com";
//     // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     };

//     try {
//       await axios.post(
//         `${BASE_URL}/vessel/delete-vessel`,
//         { vesselId },
//         {
//           headers,
//         }
//       );
//       // Remove the deleted vessel from the state
//       setVessels((prevVessels) =>
//         prevVessels.filter((vessel) => vessel._id !== vesselId)
//       );
//     } catch (error) {
//       console.error("Error deleting vessel:", error);
//     }finally {
//       setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
//     }
//   };

//   const handleDisableVessel = async (vesselId) => {
//     setIsLoading(true)
//     // Replace BASE_URL with your actual API base URL
//     // const BASE_URL = "https://api.example.com";
//     // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     };

//     try {
//       await axios.post(
//         `${BASE_URL}/vessel/disable-vessel`,
//         { vesselId },
//         {
//           headers,
//         }
//       );
//       // Update the isBlocked property of the vessel in the state
//       setVessels((prevVessels) =>
//         prevVessels.map((vessel) =>
//           vessel._id === vesselId ? { ...vessel, isBlocked: true } : vessel
//         )
//       );
//     } catch (error) {
//       console.error("Error disabling vessel:", error);
//     }finally {
//       setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
//     }
//   };

//   const handleEnableVessel = async (vesselId) => {
//     setIsLoading(true)
//     // Replace BASE_URL with your actual API base URL
//     // const BASE_URL = "https://api.example.com";
//     // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     };

//     try {
//       await axios.post(
//         `${BASE_URL}/vessel/enable-vessel`,
//         { vesselId },
//         {
//           headers,
//         }
//       );
//       // Update the isBlocked property of the vessel in the state
//       setVessels((prevVessels) =>
//         prevVessels.map((vessel) =>
//           vessel._id === vesselId ? { ...vessel, isBlocked: false } : vessel
//         )
//       );
//     } catch (error) {
//       console.error("Error enabling vessel:", error);
//     }finally {
//       setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
//     }
//   };

//   const handleAddVessel = async () => {
//     setIsLoading(true); // Set isLoading to true before making the API call

//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     };

//     try {
//       // Prepare the data to send in the request body
//       const vesselData = {
//         vesselName,
//         registrationNumber,
//         vesselType,
//         vesselOwner, // Make sure 'vesselOwner' contains the selected customer ID, not the name
//       };

//       // Make the API call to create a new vessel
//       const response = await axios.post(
//         `${BASE_URL}/vessel/create-vessel`,
//         vesselData,
//         { headers }
//       );

//       // Handle the API response (e.g., show success message)
//       console.log("New vessel added:", response.data);

//       // Clear the form fields after successful submission
//       setVesselName("");
//       setRegistrationNumber("");
//       setVesselType("");
//       setVesselOwner(""); // Clear the selected customer ID

//       fetchVessels();
//       handleModalClose();
//     } catch (error) {
//       console.error("Error adding vessel:", error);
//     } finally {
//       setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
//     }
//   };

//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <br />
//         <br />
//         <br />
//         <br />
//         <Box mt={2}>
//           <Stack direction="row" spacing={-48}>
//             <Button
//               variant="contained"
//               startIcon={<Add />}
//               onClick={handleModalOpen}
//               sx={{ backgroundColor: "#11047A", borderRadius: "25px" }}
//             >
//               Add New Vessel
//             </Button>
//             <SearchBar onSearch={handleSearch} />
//           </Stack>
//         </Box>
//         <br />
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Vessel Name</TableCell>
//                 <TableCell>Registration Number</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Owner Name</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {vessels.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6}>No Vessels found.</TableCell>
//                 </TableRow>
//               ) : (
//                 vessels.map((vessel) => (
//                   <TableRow key={vessel._id}>
//                     <TableCell>
//                       <Link to={`/admin/vessel-detail/${vessel._id}`}>
//                         {vessel.vesselName}
//                       </Link>
//                     </TableCell>
//                     <TableCell>{vessel.registrationNumber}</TableCell>
//                     <TableCell>{vessel.vesselType}</TableCell>
//                     <TableCell>{vessel.ownerInfo.customerName}</TableCell>
//                     <TableCell>{vessel.ownerInfo.created_at}</TableCell>
//                     <TableCell>
//                       <IconButton
//                         onClick={() => handleDeleteVessel(vessel._id)}
//                       >
//                         <Delete />
//                       </IconButton>
//                       {vessel.isBlocked ? (
//                         <IconButton
//                           onClick={() => handleEnableVessel(vessel._id)}
//                         >
//                           <CheckCircle />
//                         </IconButton>
//                       ) : (
//                         <IconButton
//                           onClick={() => handleDisableVessel(vessel._id)}
//                         >
//                           <Block />
//                         </IconButton>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <Dialog open={open} onClose={handleModalClose}>
//           <DialogTitle>Add New Vessel</DialogTitle>
//           <DialogContent>
//             <TextField
//               label="Vessel Name"
//               fullWidth
//               value={vesselName}
//               onChange={(e) => setVesselName(e.target.value)}
//             />
//             &nbsp;
//             <TextField
//               label="Registration Number"
//               fullWidth
//               value={registrationNumber}
//               onChange={(e) => setRegistrationNumber(e.target.value)}
//             />
//             &nbsp;
//             <TextField
//               label="Type"
//               fullWidth
//               value={vesselType}
//               onChange={(e) => setVesselType(e.target.value)}
//             />
//             &nbsp;
//             <TextField
//             select
//             label="Owner Name"
//             fullWidth
//             value={vesselOwner}
//             onChange={(e) => {setVesselOwner(e.target.value)
//             console.log(e.target.value)
//             }} // Update the 'vesselOwner' state with the selected value (customer ID)
//           >
//             {Array.isArray(customers) && customers.length === 0 ? (
//               <MenuItem value="">No customers available</MenuItem>
//             ) : (
//               customers.map((customer) => (
//                 <MenuItem key={customer._id} value={customer._id}>
//                   {customer.customerName}
//                 </MenuItem>
//               ))
//             )}
//           </TextField>
//             &nbsp;
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleModalClose}>Cancel</Button>
//             <Button
//               sx={{ backgroundColor: "#11047A" }}
//               variant="contained"
//               color="primary"
//               onClick={handleAddVessel}
//             >
//               Add Vessel
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {isLoading && <CircularProgress color="primary" />}

//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Vessel;

import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Add, Delete, Block, CheckCircle } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SearchBar from "../customers/SearchBar";
import { CircularProgress } from "@mui/material";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import Autocomplete from "@mui/material/Autocomplete";

const Vessel = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const [searchResults, setSearchResults] = useState([]);

  const [vesselName, setVesselName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vesselType, setVesselType] = useState("");
  const [vesselOwner, setVesselOwner] = useState("");
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";

  const handleSearch = (searchTerm) => {
    // Implement your search logic here, and update searchResults state accordingly.
    // For example, you can fetch data from an API based on the search term and update the results.
    // setSearchResults(updatedResults);

    console.log(searchTerm);
  };

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${API_KEY}`,
  //     };
  //     try {
  //       const response = await axios.get(
  //         "https://api.raft-service.com/customers/get-all-customers",
  //         { headers }
  //       );
  //       setCustomers(response.data.data);
  //       setFilteredCustomers(response.data.data); // Initialize filteredCustomers with all customers
  //     } catch (error) {
  //       console.error("Error fetching customers:", error);
  //     }
  //   };
  //   fetchCustomers();
  // }, []);
  // const handleSearchChange = (event) => {
  //   const query = event.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   // Filter customers based on the search query
  //   const filtered = customers.filter((customer) =>
  //     customer.customerName.toLowerCase().startsWith(query)
  //   );

  //   setFilteredCustomers(filtered); // Update the filteredCustomers array
  // };

 
  const fetchCustomers = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    try {
      const response = await axios.get(
        `${BASE_URL}/customers/get-all-customers`,
        { headers }
      );
      setCustomers(response.data.data);
      setFilteredCustomers(response.data.data); // Set both customers and filteredCustomers
    } catch (error) {
      console.error("Error fetching customers:", error);
      setCustomers([]); // Set customers to an empty array in case of error
      setFilteredCustomers([]); // Set filteredCustomers to an empty array as well
    }
  };


  // const handleSearchChange = async (event) => {
  //   const query = event.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   if (query.length >= 2) {
  //     await fetchCustomers(); // Fetch customers from the API based on the search query
  //   } else {
  //     setFilteredCustomers([]); // Clear the list when the query is empty or too short
  //   }
  // };

  useEffect(() => {
    fetchCustomers();
  });

  const [vessels, setVessels] = React.useState([]);

  const fetchVessels = async () => {
    setIsLoading(true);
    // Replace BASE_URL with your actual API base URL
    // const BASE_URL = "https://api.example.com";
    // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      const response = await axios.get(`${BASE_URL}/vessel/get-all-vessels`, {
        headers,
      });
      const vesselData = response.data.data;
      setVessels(vesselData);
    } catch (error) {
      console.error("Error fetching vessels:", error);
      setVessels([]);
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
    }
  };

  useEffect(() => {
    fetchVessels();
  }, []);

  const handleDeleteVessel = async (vesselId) => {
    setIsLoading(true);
    // Replace BASE_URL with your actual API base URL
    // const BASE_URL = "https://api.example.com";
    // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/vessel/delete-vessel`,
        { vesselId },
        {
          headers,
        }
      );
      // Remove the deleted vessel from the state
      setVessels((prevVessels) =>
        prevVessels.filter((vessel) => vessel._id !== vesselId)
      );
    } catch (error) {
      console.error("Error deleting vessel:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
    }
  };

  const handleDisableVessel = async (vesselId) => {
    setIsLoading(true);
    // Replace BASE_URL with your actual API base URL
    // const BASE_URL = "https://api.example.com";
    // const API_KEY = "YOUR_API_KEY"; // Replace this with your actual API key

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/vessel/disable-vessel`,
        { vesselId },
        {
          headers,
        }
      );
      fetchVessels();
      // Update the isBlocked property of the vessel in the state

      // setVessels((prevVessels) =>
      //   prevVessels.map((vessel) =>
      //     vessel._id === vesselId ? { ...vessel, isBlocked: true } : vessel
      //   )
      // );
    } catch (error) {
      console.error("Error disabling vessel:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
    }
  };

  const handleEnableVessel = async (vesselId) => {
    setIsLoading(true);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/vessel/enable-vessel`,
        { vesselId },
        {
          headers,
        }
      );
      fetchVessels();

      // Update the isBlocked property of the vessel in the state

      // setVessels((prevVessels) =>
      //   prevVessels.map((vessel) =>
      //     vessel._id === vesselId ? { ...vessel, isBlocked: false } : vessel
      //   )
      // );
    } catch (error) {
      console.error("Error enabling vessel:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
    }
  };

  const handleAddVessel = async () => {
    setIsLoading(true); // Set isLoading to true before making the API call

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    try {
      // Prepare the data to send in the request body
      const vesselData = {
        vesselName,
        registrationNumber,
        vesselType,
        vesselOwner, // Make sure 'vesselOwner' contains the selected customer ID, not the name
      };

      // Make the API call to create a new vessel
      const response = await axios.post(
        `${BASE_URL}/vessel/create-vessel`,
        vesselData,
        { headers }
      );

      // Handle the API response (e.g., show success message)
      console.log("New vessel added:", response.data);

      // Clear the form fields after successful submission
      setVesselName("");
      setRegistrationNumber("");
      setVesselType("");
      setVesselOwner(""); // Clear the selected customer ID

      fetchVessels();
      handleModalClose();
    } catch (error) {
      console.error("Error adding vessel:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the API call is done (success or error)
    }
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
              Add New Vessel
            </Button>
            <SearchBar onSearch={handleSearch} />
          </Stack>
        </Box>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vessel Name</TableCell>
                <TableCell>Registration Number</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Owner Name</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vessels.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6}>No Vessels found.</TableCell>
                </TableRow>
              ) : (
                vessels.map((vessel) => (
                  <TableRow key={vessel._id}>
                    <TableCell>
                      <Link to={`/admin/vessel-detail/${vessel._id}`}>
                        {vessel.vesselName}
                      </Link>
                    </TableCell>
                    <TableCell>{vessel.registrationNumber}</TableCell>
                    <TableCell>{vessel.vesselType}</TableCell>
                    <TableCell>{vessel.ownerInfo.customerName}</TableCell>
                    <TableCell>
                      {format(
                        new Date(vessel.ownerInfo.created_at),
                        "dd MMM yyyy",
                        {
                          locale: enGB,
                        }
                      )}
                    </TableCell>
                    <TableCell> {vessel.is_disabled ? "No" : "Yes"}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDeleteVessel(vessel._id)}
                      >
                        <Delete />
                      </IconButton>
                      {vessel.is_disabled ? (
                        <IconButton
                          onClick={() => handleEnableVessel(vessel._id)}
                        >
                          <CheckCircle />
                        </IconButton>
                      ) : (
                        <IconButton
                          onClick={() => handleDisableVessel(vessel._id)}
                        >
                          <Block />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleModalClose}>
          <DialogTitle>Add New Vessel</DialogTitle>
          <DialogContent>
            <TextField
              label="Vessel Name"
              fullWidth
              value={vesselName}
              onChange={(e) => setVesselName(e.target.value)}
            />
            &nbsp;
            <TextField
              label="Registration Number"
              fullWidth
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
            &nbsp;
            <TextField
              label="Type"
              fullWidth
              value={vesselType}
              onChange={(e) => setVesselType(e.target.value)}
            />
            &nbsp;
            <Autocomplete
            options={filteredCustomers}
            getOptionLabel={(customer) => customer.customerName}
            // value={vesselOwner?vesselOwner:"Select Owner"}
            onChange={(_, newValue) => {
              setVesselOwner(newValue ? newValue : ""); // Update vesselOwner with the selected customer ID
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Owner Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Select Owner"
              />
            )}
            placeholder="Select Owner"
            isOptionEqualToValue={(option, value) => option._id === value}
          />
            &nbsp;
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button
              sx={{ backgroundColor: "#11047A" }}
              variant="contained"
              color="primary"
              onClick={handleAddVessel}
            >
              Add Vessel
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
      </Container>
    </ThemeProvider>
  );
};

export default Vessel;

// <TextField
// select
// label="Owner Name"
// fullWidth
// value={vesselOwner}
// onChange={(e) => {
//   setVesselOwner(e.target.value); // Update the 'vesselOwner' state with the selected value (customer ID)
//   console.log(e.target.value);
// }}
// >
// {Array.isArray(customers) && customers.length === 0 ? (
//   <MenuItem value="">No customers available</MenuItem>
// ) : (
//   customers.map((customer) => (
//     <MenuItem key={customer._id} value={customer._id}>
//       {customer.customerName}
//     </MenuItem>
//   ))
// )}
// </TextField>

// <TextField
//   select
//   label="Owner Name"
//   fullWidth
//   value={vesselOwner}
//   onChange={(e) => {
//     handleSearchChange(e);
//     setVesselOwner(e.target.value);
//   }}
//   InputLabelProps={{
//     shrink: true,
//   }}
// >
//   {filteredCustomers.length > 0 ? (
//     filteredCustomers.map((customer) => (
//       <MenuItem key={customer._id} value={customer._id}>
//         {customer.customerName}
//       </MenuItem>
//     ))
//   ) : (
//     <MenuItem value="">No customers available</MenuItem>
//   )}
// </TextField>
