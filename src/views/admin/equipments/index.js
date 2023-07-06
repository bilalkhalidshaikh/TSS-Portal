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

const Equipments = () => {
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

  const [Equipmentss, setEquipmentss] = React.useState([
    {
      id: 1,
      EquipmentsName: "Equipments 1",
      mva: "78%",
      unitPrice: "980$",
      expiryDate: "Dec-28-2023",
      createdAt: "2023-07-04",
    },
    // Add more Equipments data as needed
  ]);

  const handleAddEquipments = () => {
    // Implement the logic to add a new Equipments
    handleModalClose();
  };

  const handleDeleteEquipments = (EquipmentsId) => {
    // Implement the logic to delete a Equipments
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
            Add New Equipments
          </Button>
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
                {/* <TableCell>Created At</TableCell>
                <TableCell>Actions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {Equipmentss.map((Equipments) => (
                <TableRow key={Equipments.id}>
                  <TableCell>{Equipments.EquipmentsName}</TableCell>
                  <TableCell>{Equipments.mva}</TableCell>
                  <TableCell>{Equipments.unitPrice}</TableCell>
                  <TableCell>{Equipments.expiryDate}</TableCell>
                  {/* <TableCell>{Equipments.createdAt}</TableCell> */}
                  {/* <TableCell>
                    <IconButton onClick={() => handleDeleteEquipments(Equipments.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleModalClose}>
          <DialogTitle>Add New Equipments</DialogTitle>
          <DialogContent>
            <TextField label="Equipments Name" fullWidth />
            <TextField label="Mva" type="number" fullWidth />
            <TextField label="Unit Price" type="number" fullWidth />
            <TextField label="Expiry Date" type="number" fullWidth />
            {/* <TextField select label="Owner Name" fullWidth>
              <MenuItem value="Owner 1">Owner 1</MenuItem>
            </TextField> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button
              sx={{ backgroundColor: "#11047A" }}
              variant="contained"
              color="primary"
              onClick={handleAddEquipments}
            >
              Add Equipments
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default Equipments;
