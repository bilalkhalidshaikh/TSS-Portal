import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  TextField,
  Card,
  CardContent,
  Stack,
  Container,
  CardMedia,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import KayakingIcon from '@mui/icons-material/Kayaking';
// import { Block, Delete, Add, MoreVert,MdShop } from '@mui/icons-material';
import {MdShop} from "react-icons/md"
import SailingIcon from '@mui/icons-material/Sailing';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom"
import Equipments from 'views/admin/equipments';
import { ship } from 'assets/img';
import CustomFormDialog from 'components/modal/CustomAddEquipment';
import CustomRaftFormDialog from 'components/modal/CustomAddRaft';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#11047A !important' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/admin/vessel"> <SailingIcon /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vessel Name
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" variant='outlined'>Disable</Button>
            <Button color="inherit" variant='outlined'>Delete</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const RootContainer = styled('div')(({ theme }) => ({
  padding: '20px',
}));

const Title = styled(Typography)({
  marginBottom: '20px',
});

const TableContainerStyled = styled(TableContainer)({
  marginBottom: '20px',
});

const ModalContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: 'cornsilk',
  padding: '16px',
  borderRadius: '4px',
}));

const CardStyled = styled(Card)(({ theme }) => ({
  marginBottom: '20px',
  backgroundColor: '#2196f3',
  color: theme.palette.primary.contrastText,
}));

const AnimationContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)',
    zIndex: '1',
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease-in-out',
    opacity: '0',
  },
  '&:hover::after': {
    opacity: '1',
  },
}));

const VesselDetail = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f44336',
        contrastText: '#fff',
      },
    },
  });


  const [equipopen, setEquipOpen] = React.useState(false);
  const handleEquipModalOpen = () => {
    setOpen(true);
  };
  const handleEquipModalClose = () => {
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
    handleEquipModalClose();
  };


  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <br />
        <br />
        <br />
        <br />
        {/* <AnimationContainer> */}
        <Container>
          <ButtonAppBar />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '20px !important',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
                padding: '60px !important'
              },
            }}
            component={Paper}
          // elevation={}
          >
            {/* <Paper elevation={0} > */}
            Vessel Info :
            <br />
            <br />
            Legends of Runeterra is a 2020 digital collectible card game developed and published by Riot Games.
            {/* </Paper> */}
            {/* <Paper />
      <Paper elevation={3} /> */}
          </Box>
          <br />

          <TableContainerStyled component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Registration Number</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Rafts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Dummy Name</TableCell>
                  <TableCell>Dummy Registration Number</TableCell>
                  <TableCell>Dummy Type</TableCell>
                  <TableCell>Dummy Owner</TableCell>
                  <TableCell>Dummy Rafts</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainerStyled>

          {/* <div>
          <Typography variant="subtitle1">Rafts</Typography>
          <IconButton onClick={handleOpen} color="primary">
            <Add />
          </IconButton>
          <div>
            <Typography variant="body1">Dummy Raft 1</Typography>
            <Typography variant="body1">Dummy Raft 2</Typography>
          </div>
        </div>

        <Modal open={open} onClose={handleClose} className={ModalContainer}>
          <ModalContent>
            <Typography variant="h6">Add Raft</Typography>
            <TextField label="Raft Name" />
            <Button color="primary">Add</Button>
            <Button color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalContent>
        </Modal>

        <CardStyled>
          <CardContent>
            <Typography variant="h6">Ship</Typography>
            <IconButton>
              <MoreVert />
            </IconButton>
            <Typography variant="body1">Dummy Ship Details</Typography>
          </CardContent>
        </CardStyled> */}
          <br />

          <Box sx={{ flexGrow: 1 }}>
            {/* <AppBar position="static" sx={{ backgroundColor: '#11047A !important' }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <KayakingIcon />   Rafts
                </Typography>
                <CustomRaftFormDialog />
              </Toolbar>
            </AppBar> */}
                 <AppBar position="static" sx={{ backgroundColor: '#11047A !important' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/admin/vessel"> <KayakingIcon /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rafts
          </Typography>
          <Stack direction="row" spacing={2}>
          <CustomRaftFormDialog />
           </Stack>
        </Toolbar>
      </AppBar>
            <br />
            <br />
            <Stack direction="row" spacing={2}>

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140, width: 180 }}
                  image={ship}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Raft Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Raft are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140, width: 180 }}
                  image={ship}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Raft Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Raft are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Stack>
          </Box>
          <br />
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
              sx={{ backgroundColor: '#11047A !important' }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {/* <MenuIcon /> */}
                  <MdShop/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Equipments
                </Typography>
                <CustomFormDialog />
                {/* <Button color="inherit" ><Add />Add Equipments</Button> */}
              </Toolbar>
            </AppBar>
            <br />
            <br />
            <TableContainerStyled component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Equipment Name</TableCell>
                    <TableCell>MVA</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Total Units</TableCell>
                    <TableCell>Expiry Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Dummy Name</TableCell>
                    <TableCell>Dummy Mva</TableCell>
                    <TableCell>Dummy Price</TableCell>
                    <TableCell>Dummy Unit</TableCell>
                    <TableCell>Dummy Date</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainerStyled>
          </Box>
          {/* <div>
          <Typography variant="subtitle1">Equipments</Typography>
          <IconButton onClick={handleOpen} color="primary">
            <Add />
          </IconButton>
          <div>
            <Typography variant="body1">Dummy Equipment 1</Typography>
            <Typography variant="body1">Dummy Equipment 2</Typography>
          </div>
        </div>

        <TableContainerStyled component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipment Name</TableCell>
                <TableCell>MVP</TableCell>
                <TableCell>Unit Price</TableCell>
                <TableCell>Total Units</TableCell>
                <TableCell>Expiry Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Dummy Equipment Name</TableCell>
                <TableCell>Dummy MVP</TableCell>
                <TableCell>Dummy Unit Price</TableCell>
                <TableCell>Dummy Total Units</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainerStyled> */}
          {/* <Equipments/  > */}
          {/* <Dialog open={equipopen} onClose={handleEquipModalClose}>
            <DialogTitle>Add New Equipments</DialogTitle>
            <DialogContent>
              <TextField label="Equipments Name" fullWidth />
              <TextField label="Mva" type="number" fullWidth />
              <TextField label="Unit Price" type="number" fullWidth />
              <TextField label="Expiry Date" type="number" fullWidth />
           
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEquipModalClose}>Cancel</Button>
              <Button
                sx={{ backgroundColor: "#11047A" }}
                variant="contained"
                color="primary"
                onClick={handleAddEquipments}
              >
                Add Equipments
              </Button>
            </DialogActions>
          </Dialog> */}
        </Container>
      </RootContainer>
    </ThemeProvider>
  );
};

export default VesselDetail;
