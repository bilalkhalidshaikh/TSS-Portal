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
  MenuItem,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const Vessel = () => {
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const [vessels, setVessels] = React.useState([
    {
      id: 1,
      vesselName: "Vessel 1",
      registrationNumber: "12345",
      type: "Type 1",
      ownerName: "Owner 1",
      createdAt: "2023-07-04",
    },
    // Add more vessel data as needed
  ]);

  const handleAddVessel = () => {
    // Implement the logic to add a new vessel
    handleModalClose();
  };

  const handleDeleteVessel = (vesselId) => {
    // Implement the logic to delete a vessel
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
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleModalOpen}
            sx={{ backgroundColor: "#11047A" }}
          >
            Add New Vessel
          </Button>
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vessels.map((vessel) => (
                <TableRow key={vessel.id}>
                  <TableCell>{vessel.vesselName}</TableCell>
                  <TableCell>{vessel.registrationNumber}</TableCell>
                  <TableCell>{vessel.type}</TableCell>
                  <TableCell>{vessel.ownerName}</TableCell>
                  <TableCell>{vessel.createdAt}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteVessel(vessel.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleModalClose}>
          <DialogTitle>Add New Vessel</DialogTitle>
          <DialogContent>
            <TextField label="Vessel Name" fullWidth />
            <TextField label="Registration Number" fullWidth />
            <TextField label="Type" fullWidth />
            <TextField select label="Owner Name" fullWidth>
              <MenuItem value="Owner 1">Owner 1</MenuItem>
              {/* Add more owner options as needed */}
            </TextField>
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
      </Container>
    </ThemeProvider>
  );
};

export default Vessel;
