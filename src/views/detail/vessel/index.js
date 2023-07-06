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
} from '@mui/material';
import { Block, Delete, Add, MoreVert } from '@mui/icons-material';

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

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <AnimationContainer>
          <Title variant="h6">Vessel Detail</Title>
        </AnimationContainer>

        <div>
          <Button startIcon={<Block />} color="secondary">
            Disable
          </Button>
          <Button startIcon={<Delete />} color="secondary">
            Delete
          </Button>
        </div>

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

        <div>
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
        </CardStyled>

        <div>
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
        </TableContainerStyled>
      </RootContainer>
    </ThemeProvider>
  );
};

export default VesselDetail;
