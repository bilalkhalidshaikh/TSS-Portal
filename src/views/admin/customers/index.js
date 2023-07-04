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

import React from "react";
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
} from "@mui/material";
import { Block, Delete } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomerList = () => {
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const customers = [
    {
      id: 1,
      name: "Mark Doe",
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      isActive: true,
      isBlocked: false,
    },
    {
      id: 2,
      name: "Abdul Haseeb",
      email: "abdul@verior.co",
      phoneNumber: "1234567890",
      isActive: true,
      isBlocked: false,
    },
    // Add more customer data as needed
  ];

  const blockCustomer = (customerId) => {
    // Implement the logic to block a customer
  };

  const deleteCustomer = (customerId) => {
    // Implement the logic to delete a customer
  };

  const handleAddCustomer = () => {
    // Implement the logic to add a new customer
    handleModalClose();
  };

  return (
    <Container>
      {/* <Typography variant="h4" gutterBottom>
        Customers
      </Typography> */}
      <Box mt={2} sx={{ pt: 3 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#11047A" }}
          onClick={handleModalOpen}
        >
          Add New Customer
        </Button>
      </Box>
      <br />
      <TableContainer component={Paper}>
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
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phoneNumber}</TableCell>
                <TableCell>{customer.isActive ? "Yes" : "No"}</TableCell>
                <TableCell>{customer.isBlocked ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => blockCustomer(customer.id)}>
                    <Block />
                  </IconButton>
                  <IconButton onClick={() => deleteCustomer(customer.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField label="Customer Name" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Phone Number" fullWidth />
          <TextField label="Password" type="password" fullWidth />
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
