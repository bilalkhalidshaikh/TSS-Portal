// import React from "react";

// // Chakra imports
// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   Link,
//   Text,
//   useColorModeValue,
//   SimpleGrid,
// } from "@chakra-ui/react";

// // Custom components
// import Banner from "views/admin/marketplace/components/Banner";
// import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
// import HistoryItem from "views/admin/marketplace/components/HistoryItem";
// import NFT from "components/card/NFT";
// import Card from "components/card/Card.js";

// // Assets
// import Nft1 from "assets/img/nfts/Nft1.png";
// import Nft2 from "assets/img/nfts/Nft2.png";
// import Nft3 from "assets/img/nfts/Nft3.png";
// import Nft4 from "assets/img/nfts/Nft4.png";
// import Nft5 from "assets/img/nfts/Nft5.png";
// import Nft6 from "assets/img/nfts/Nft6.png";
// import Avatar1 from "assets/img/avatars/avatar1.png";
// import Avatar2 from "assets/img/avatars/avatar2.png";
// import Avatar3 from "assets/img/avatars/avatar3.png";
// import Avatar4 from "assets/img/avatars/avatar4.png";
// import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
// import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
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
// import {
//   // Box,
//   // Button,
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
//   Typography
// } from '@mui/material';
// import { Block, Delete } from '@mui/icons-material';

// const CustomerList = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleModalOpen = () => {
//     setOpen(true);
//   };
//   const handleModalClose = () => {
//     setOpen(false);
//   };

//   const customers = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       phoneNumber: '1234567890',
//       isActive: true,
//       isBlocked: false
//     },
//     // Add more customer data as needed
//   ];

//   const blockCustomer = (customerId) => {
//     // Implement the logic to block a customer
//   };

//   const deleteCustomer = (customerId) => {
//     // Implement the logic to delete a customer
//   };

//   const handleAddCustomer = () => {
//     // Implement the logic to add a new customer
//     handleModalClose();
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Customers
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Is Active</TableCell>
//               <TableCell>Is Blocked</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {customers.map((customer) => (
//               <TableRow key={customer.id}>
//                 <TableCell>{customer.name}</TableCell>
//                 <TableCell>{customer.email}</TableCell>
//                 <TableCell>{customer.phoneNumber}</TableCell>
//                 <TableCell>{customer.isActive ? 'Yes' : 'No'}</TableCell>
//                 <TableCell>{customer.isBlocked ? 'Yes' : 'No'}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => blockCustomer(customer.id)}>
//                     <Block />
//                   </IconButton>
//                   <IconButton onClick={() => deleteCustomer(customer.id)}>
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box mt={2}>
//         <Button variant="contained" onClick={handleModalOpen}>
//           Add New Customer
//         </Button>
//       </Box>
//       <Dialog open={open} onClose={handleModalClose}>
//         <DialogTitle>Add New Customer</DialogTitle>
//         <DialogContent>
//           <TextField label="Customer Name" fullWidth />
//           <TextField label="Email" fullWidth />
//           <TextField label="Phone Number" fullWidth />
//           <TextField label="Password" type="password" fullWidth />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleModalClose}>Cancel</Button>
//           <Button variant="contained" color="primary" onClick={handleAddCustomer}>
//             Add Customer
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default function Customers() {
//   // Chakra Color Mode
//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const textColorBrand = useColorModeValue("brand.500", "white");
//   return (
//     <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>

//       {/* <ComplexTable
//           columnsData={columnsDataComplex}
//           tableData={tableDataComplex}
//           title={"Top Customers"}
//         /> */}
//         <CustomerList/>
//     </Box>
//   );
// }

// import React from "react";
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
// } from "@mui/material";
// import { Block, Delete } from "@mui/icons-material";
// import { useTheme } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const CustomerList = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleModalOpen = () => {
//     setOpen(true);
//   };
//   const handleModalClose = () => {
//     setOpen(false);
//   };

//   const customers = [
//     {
//       id: 1,
//       name: "Mark Doe",
//       email: "johndoe@example.com",
//       phoneNumber: "1234567890",
//       isActive: true,
//       isBlocked: false,
//     },
//     {
//       id: 2,
//       name: "Abdul Haseeb",
//       email: "abdul@verior.co",
//       phoneNumber: "1234567890",
//       isActive: true,
//       isBlocked: false,
//     },
//     // Add more customer data as needed
//   ];

//   const blockCustomer = (customerId) => {
//     // Implement the logic to block a customer
//   };

//   const deleteCustomer = (customerId) => {
//     // Implement the logic to delete a customer
//   };

//   const handleAddCustomer = () => {
//     // Implement the logic to add a new customer
//     handleModalClose();
//   };

//   return (
//     <Container>
//       {/* <Typography variant="h4" gutterBottom>
//         Customers
//       </Typography> */}
//       <Box mt={2} sx={{ pt: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#11047A" }}
//           onClick={handleModalOpen}
//         >
//           Add New Customer
//         </Button>
//       </Box>
//       <br />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Is Active</TableCell>
//               <TableCell>Is Blocked</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {customers.map((customer) => (
//               <TableRow key={customer.id}>
//                 <TableCell>{customer.name}</TableCell>
//                 <TableCell>{customer.email}</TableCell>
//                 <TableCell>{customer.phoneNumber}</TableCell>
//                 <TableCell>{customer.isActive ? "Yes" : "No"}</TableCell>
//                 <TableCell>{customer.isBlocked ? "Yes" : "No"}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => blockCustomer(customer.id)}>
//                     <Block />
//                   </IconButton>
//                   <IconButton onClick={() => deleteCustomer(customer.id)}>
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={open} onClose={handleModalClose}>
//         <DialogTitle>Add New Customer</DialogTitle>
//         <DialogContent>
//           <TextField label="Customer Name" fullWidth />
//           <TextField label="Email" fullWidth />
//           <TextField label="Phone Number" fullWidth />
//           <TextField label="Password" type="password" fullWidth />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleModalClose}>Cancel</Button>
//           <Button
//             sx={{ backgroundColor: "#11047A" }}
//             variant="contained"
//             color="primary"
//             onClick={handleAddCustomer}
//           >
//             Add Customer
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default function Customers() {
//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
//         <CustomerList />
//       </Box>
//     </ThemeProvider>
//   );
// }

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
// } from "@mui/material";
// import { Block, Delete } from "@mui/icons-material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CircularProgress } from "@mui/material";
// import { Backdrop } from "@mui/material";

// const CustomerList = () => {
//   const [open, setOpen] = React.useState(false);
//   const BASE_URL = "https://api.raft-service.com";
//   const API_KEY = "340304930490d9f0df90df90df9d0f9d0f"; // Replace this with your actual API key
//   const handleModalOpen = () => {
//     setOpen(true);
//   };
//   const handleModalClose = () => {
//     setOpen(false);
//   };

//   const [customers, setCustomers] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true); // Initialize loading state as true
//   const [showLoader, setShowLoader] = useState(false);

//   const [newCustomerData, setNewCustomerData] = useState({
//     customerName: "",
//     email: "",
//     phone_number: "",
//     password: "",
//   });

//   const fetchCustomers = async () => {
//     try {
//       // Fetch data from the API
//       const response = await axios.get(
//         `${BASE_URL}/customers/get-all-customers`
//       );

//       // Extract customer data from the response
//       const customerData = response.data.data;
//       console.log("API response data:", customerData); // Debugging statement
//       setCustomers(customerData); // Update customers state with the fetched data
//       setLoading(false); // Set loading state to false after fetching data
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//       setCustomers([]); // Set customers as an empty array if an error occurs
//       setLoading(false); // Set loading state to false if there's an error
//     }
//   };
//   useEffect(() => {

//     fetchCustomers();
//   }, []);

//   const blockCustomer = async (customerId) => {
//     // Optimistically update the customer state to reflect the change immediately
//     setShowLoader(true); // Show the loader

//     setCustomers((prevCustomers) =>
//       prevCustomers.map((customer) =>
//         customer._id === customerId ? { ...customer, isBlocked: true } : customer
//       )
//     );

//     try {
//       // Make API request to block the customer
//       await axios.post(`${BASE_URL}/customers/block-customer`, {
//         customerId: customerId,

//       });
//     } catch (error) {
//       console.error("Error blocking customer:", error);
//       // Revert the change in case of an error
//       setCustomers((prevCustomers) =>
//         prevCustomers.map((customer) =>
//           customer._id === customerId ? { ...customer, isBlocked: false } : customer
//         )
//       );
//     }
//   };

//   const unblockCustomer = async (customerId) => {
//     // Optimistically update the customer state to reflect the change immediately
//     setCustomers((prevCustomers) =>
//       prevCustomers.map((customer) =>
//         customer._id === customerId ? { ...customer, isBlocked: false } : customer
//       )
//     );

//     try {
//       // Make API request to unblock the customer
//       await axios.post(`${BASE_URL}/customers/unblock-customer`, {
//         customerId: customerId,
//       });
//     } catch (error) {
//       console.error("Error unblocking customer:", error);
//       // Revert the change in case of an error
//       setCustomers((prevCustomers) =>
//         prevCustomers.map((customer) =>
//           customer._id === customerId ? { ...customer, isBlocked: true } : customer
//         )
//       );
//     }
//   };

//   const deleteCustomer = async (customerId) => {
//     try {
//       // Make API request to delete the customer
//       await axios.post(`${BASE_URL}/customers/delete-customer`, {
//         customerId: customerId,
//       });

//       // Remove the customer from the customer state
//       setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer._id !== customerId));
//     } catch (error) {
//       console.error("Error deleting customer:", error);
//     }
//   };

//   const createCustomer = async (newCustomerData) => {
//     try {
//       // Set the headers with the API key
//       const headers = {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${API_KEY}`,
//       };

//       // Make API request to create the new customer
//       await axios.post(`${BASE_URL}/customers/register-customer`, newCustomerData, { headers });

//       // Close the modal
//       handleModalClose();
//     } catch (error) {
//       console.error("Error creating customer:", error);
//     }
//   };

//   const handleAddCustomer = async () => {
//     // Implement the logic to add a new customer
//     try {
//       // Create the new customer data object from the state
//       const customerData = {
//         customerName: newCustomerData.customerName,
//         email: newCustomerData.email,
//         phone_number: newCustomerData.phone_number,
//         password: newCustomerData.password,
//       };

//       console.log("Customer Data:", customerData); // Add this line to check the data

//       if (
//         customerData.customerName &&
//         customerData.email &&
//         customerData.phone_number &&
//         customerData.password
//       ) {
//         await createCustomer(customerData);
//       } else {
//         // Handle the case when one or more fields are missing
//         console.error("Missing data fields");
//       }

//       // Show a loading state for a second before fetching customers again
//       setLoading(true);
//       setTimeout(() => {
//         setLoading(false);
//         fetchCustomers()
//         handleModalClose();

//       }, 1000);

//       // Reset the form fields after successfully adding the customer
//       setNewCustomerData({
//         customerName: "",
//         email: "",
//         phone_number: "",
//         password: "",
//       });
//     } catch (error) {
//       console.error("Error adding customer:", error);
//       handleModalClose();
//     }
//   };

//   return (
//     <Container>
//       <Box mt={2} sx={{ pt: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#11047A" }}
//           onClick={handleModalOpen}
//         >
//           Add New Customer
//         </Button>
//       </Box>
//       <br />
//       {loading ? (
//         <CircularProgress color="primary" /> // Show the loader while fetching data
//       ) : (
//         <TableContainer component={Paper} sx={{maxHeight:'500px'}}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Customer Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Phone Number</TableCell>
//                 <TableCell>Is Active</TableCell>
//                 <TableCell>Is Blocked</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customers.length === 0 ? ( // Check if customers is an empty array
//                 <TableRow>
//                   <TableCell colSpan={6}>No customers found.</TableCell>
//                 </TableRow>
//               ) : (
//                 customers.map((customer) => (
//                   <TableRow key={customer._id}>
//                     <TableCell>{customer.customerName}</TableCell>
//                     <TableCell>{customer.email}</TableCell>
//                     <TableCell>{customer.phone_number}</TableCell>
//                     <TableCell>{customer.isActive ? "Yes" : "No"}</TableCell>
//                     <TableCell>{customer.isBlocked ? "Yes" : "No"}</TableCell>
//                     <TableCell>
//                       {customer.isBlocked ? (
//                         <IconButton onClick={() => unblockCustomer(customer._id)}>
//                           Unblock
//                         </IconButton>
//                       ) : (
//                         <IconButton onClick={() => blockCustomer(customer._id)}>
//                           Block
//                         </IconButton>
//                       )}
//                       <IconButton onClick={() => deleteCustomer(customer._id)}>
//                         <Delete />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {showLoader && (
//         <Backdrop open={showLoader} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       )}

// <Dialog open={open} onClose={handleModalClose}>
//   <DialogTitle>Add New Customer</DialogTitle>
//   <DialogContent>
//     <TextField
//       label="Customer Name"
//       fullWidth
//       name="customerName"
//       value={newCustomerData.customerName}
//       onChange={(e) =>
//         setNewCustomerData({
//           ...newCustomerData,
//           customerName: e.target.value,
//         })
//       }
//     />
//     <TextField
//       label="Email"
//       fullWidth
//       name="email"
//       value={newCustomerData.email}
//       onChange={(e) =>
//         setNewCustomerData({
//           ...newCustomerData,
//           email: e.target.value,
//         })
//       }
//     />
//     <TextField
//       label="Phone Number"
//       fullWidth
//       name="phone_number"
//       value={newCustomerData.phone_number}
//       onChange={(e) =>
//         setNewCustomerData({
//           ...newCustomerData,
//           phone_number: e.target.value,
//         })
//       }
//     />
//     <TextField
//       label="Password"
//       type="password"
//       fullWidth
//       name="password"
//       value={newCustomerData.password}
//       onChange={(e) =>
//         setNewCustomerData({
//           ...newCustomerData,
//           password: e.target.value,
//         })
//       }
//     />
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={handleModalClose}>Cancel</Button>
//     <Button
//       sx={{ backgroundColor: "#11047A" }}
//       variant="contained"
//       color="primary"
//       onClick={handleAddCustomer}
//     >
//       Add Customer
//     </Button>
//   </DialogActions>
// </Dialog>
//     </Container>
//   );
// };

// export default function Customers() {
//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
//         <CustomerList />
//       </Box>
//     </ThemeProvider>
//   );
// }

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
  Backdrop,
  CircularProgress,
  Stack,
} from "@mui/material";
import { Block, Delete } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HideSourceIcon from "@mui/icons-material/HideSource";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SearchBar from "./SearchBar"; // Path to the SearchBar component

const CustomerList = () => {
  const [open, setOpen] = React.useState(false);
  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f"; // Replace this with your actual API key
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false); // New state variable to control the visibility of the loader

  const [newCustomerData, setNewCustomerData] = useState({
    customerName: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here, and update searchResults state accordingly.
    // For example, you can fetch data from an API based on the search term and update the results.
    // setSearchResults(updatedResults);

    console.log(searchTerm);
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/customers/get-all-customers`
      );
      const customerData = response.data.data;
      console.log("API response data:", customerData);
      setCustomers(customerData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setCustomers([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const blockCustomer = async (customerId) => {
    setShowLoader(true); // Show the loader
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer._id === customerId
          ? { ...customer, isBlocked: true }
          : customer
      )
    );

    try {
      await axios.post(`${BASE_URL}/customers/block-customer`, {
        customerId: customerId,
      });
    } catch (error) {
      console.error("Error blocking customer:", error);
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer._id === customerId
            ? { ...customer, isBlocked: false }
            : customer
        )
      );
    }
    fetchCustomers();
    setShowLoader(false); // Hide the loader after the action is completed
  };

  const unblockCustomer = async (customerId) => {
    setShowLoader(true); // Show the loader
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer._id === customerId
          ? { ...customer, isBlocked: false }
          : customer
      )
    );

    try {
      await axios.post(`${BASE_URL}/customers/unblock-customer`, {
        customerId: customerId,
      });
    } catch (error) {
      console.error("Error unblocking customer:", error);
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer._id === customerId
            ? { ...customer, isBlocked: true }
            : customer
        )
      );
    }
    fetchCustomers();
    setShowLoader(false); // Hide the loader after the action is completed
  };

  const deleteCustomer = async (customerId) => {
    setShowLoader(true); // Show the loader
    try {
      await axios.post(`${BASE_URL}/customers/delete-customer`, {
        customerId: customerId,
      });

      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer._id !== customerId)
      );
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
    setShowLoader(false); // Hide the loader after the action is completed
  };

  const createCustomer = async (newCustomerData) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      };

      await axios.post(
        `${BASE_URL}/customers/register-customer`,
        newCustomerData,
        {
          headers,
        }
      );

      handleModalClose();
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  const handleAddCustomer = async () => {
    try {
      const customerData = {
        customerName: newCustomerData.customerName,
        email: newCustomerData.email,
        phone_number: newCustomerData.phone_number,
        password: newCustomerData.password,
      };

      if (
        customerData.customerName &&
        customerData.email &&
        customerData.phone_number &&
        customerData.password
      ) {
        await createCustomer(customerData);
      } else {
        console.error("Missing data fields");
      }

      setShowLoader(true); // Show the loader
      setTimeout(() => {
        setLoading(false);
        fetchCustomers();
        handleModalClose();
      }, 2000);

      setNewCustomerData({
        customerName: "",
        email: "",
        phone_number: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
      handleModalClose();
    }
    setShowLoader(false); // Hide the loader after the action is completed
  };

  return (
    <Container>
      <Box mt={2} sx={{ pt: 3 ,width:'100%'}} >
        <Stack direction="row" spacing={-48}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#11047A" ,borderRadius:'25px'}}
            onClick={handleModalOpen}
          >
            Add New Customer
          </Button>
          <SearchBar onSearch={handleSearch} />
        </Stack>
      </Box>
      <br />
      {loading ? (
        <CircularProgress color="primary" /> // Show the loader while fetching data
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Is Active</TableCell>
                <TableCell>Is Blocked</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.length === 0 ? ( // Check if customers is an empty array
                <TableRow>
                  <TableCell colSpan={6}>No customers found.</TableCell>
                </TableRow>
              ) : (
                customers.map((customer) => (
                  <TableRow key={customer._id}>
                    <TableCell>{customer.customerName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone_number}</TableCell>
                    <TableCell>{customer.isActive ? "Yes" : "No"}</TableCell>
                    <TableCell>{customer.isBlocked ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      {customer.isBlocked ? (
                        <IconButton
                          onClick={() => unblockCustomer(customer._id)}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => blockCustomer(customer._id)}>
                          <HideSourceIcon />
                        </IconButton>
                      )}
                      <IconButton onClick={() => deleteCustomer(customer._id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            label="Customer Name"
            fullWidth
            name="customerName"
            value={newCustomerData.customerName}
            onChange={(e) =>
              setNewCustomerData({
                ...newCustomerData,
                customerName: e.target.value,
              })
            }
          />
          <TextField
            label="Email"
            fullWidth
            name="email"
            value={newCustomerData.email}
            onChange={(e) =>
              setNewCustomerData({
                ...newCustomerData,
                email: e.target.value,
              })
            }
          />
          <TextField
            label="Phone Number"
            fullWidth
            name="phone_number"
            value={newCustomerData.phone_number}
            onChange={(e) =>
              setNewCustomerData({
                ...newCustomerData,
                phone_number: e.target.value,
              })
            }
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={newCustomerData.password}
            onChange={(e) =>
              setNewCustomerData({
                ...newCustomerData,
                password: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancel</Button>
          <Button
            sx={{ backgroundColor: "#11047A" }}
            variant="contained"
            color="primary"
            onClick={handleAddCustomer}
          >
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Sexy designed loader */}
      {showLoader && (
        <Backdrop
          open={showLoader}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Container>
  );
};

export default function Customers() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <CustomerList />
      </Box>
    </ThemeProvider>
  );
}
