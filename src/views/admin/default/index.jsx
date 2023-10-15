import React,{useState,useEffect} from "react";
import { Box, Card, CardContent, Grid, Typography, Stack,CircularProgress} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { DataGrid } from "@mui/x-data-grid";
import EquipmentPurchases from "../products";
import Requested from "../requested";
import Rafts from "../rafts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";


const theme = createTheme();

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "18px",
    backgroundColor: "#11047A",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.37)",
    color: "white",
    textAlign: "center",
    width:500,
    marginLeft:'120px',
  },
  table: {
    height: 400,
    width: "100%",
    "& .MuiDataGrid-root": {
      border: "none",
      "& .MuiDataGrid-cell": {
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
      "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
        borderBottom: "none",
      },
    },
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid rgba(224, 224, 224, 1)",
    },
    "& .MuiDataGrid-columnHeader": {
      fontWeight: "bold",
    },
    "& .MuiDataGrid-row": {
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
  },
}));

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const activities = [
    {
      id: 1,
      description: 'A new vessel named "ABC" was created',
    },
    {
      id: 2,
      description: "Abdul started a ticket",
    },
    {
      id: 3,
      description: 'Admin sent a reply to Abdul on ticket "XYZ"',
    },
  ];

  const classes = useStyles();

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "description", headerName: "Description", width: 400 },
  ];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const [dashboardData, setDashboardData] = useState(null);
    const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${'340304930490d9f0df90df90df9d0f9d0f'}`,
  };

  useEffect(() => {
    // Fetch dashboard data
    setIsLoading(true)
    axios
      .get("https://api.raft-service.com/dashboard/get-dashboard",{headers})
      .then((response) => {
        if (response.data && response.data.success) {
          setDashboardData(response.data.data);
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        setIsLoading(false)
      });
  }, []);

  const renderCard = (icon, title, value) => {
    return (
      <>
      <Card className={classes.card}>
        <CardContent>
          {icon}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h3" component="div">
            {value}
          </Typography>
        </CardContent>
      </Card>
      <div>
     &nbsp;
     </div>
      </>
    );
  };
  


  return (
    <ThemeProvider theme={theme}>
      <Box pt={{ xs: "130px", md: "100px", xl: "80px" }}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <AccessAlarmIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" component="div">
                  Customers
                </Typography>
                <Typography variant="h3" component="div">
                  50
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <ThreeDRotationIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" component="div">
                  Rafts
                </Typography>
                <Typography variant="h3" component="div">
                  20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <AccessAlarmIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" component="div">
                  Vessels
                </Typography>
                <Typography variant="h3" component="div">
                  30
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <ThreeDRotationIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" component="div">
                  Support Tickets
                </Typography>
                <Typography variant="h3" component="div">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <AccessAlarmIcon style={{ fontSize: 40 }} />
                <Typography variant="h6" component="div">
                  Equipments
                </Typography>
                <Typography variant="h3" component="div">
                  15
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
          {dashboardData && (
            <>
         <Grid container spacing={12}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                
              {renderCard(
                <AccessAlarmIcon style={{ fontSize: 40 }} />,
                "Customers",
                dashboardData.customers
              )}
                &nbsp;
              &nbsp;
              &nbsp;
              </Grid> 
            
              <Grid item xs={12} sm={6} md={4} lg={3}>
              {renderCard(
                <ThreeDRotationIcon style={{ fontSize: 40 }} />,
                "Rafts",
                dashboardData.rafts
              )}

              </Grid>
                </Grid>
              <br/> 
              <Box> 

         <Grid container spacing={12}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
              {renderCard(
                <AccessAlarmIcon style={{ fontSize: 40 }} />,
                "Vessels",
                dashboardData.vessels
              )}

              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
              {renderCard(
                <AccessAlarmIcon style={{ fontSize: 40 }} />,
                "Equipments",
                dashboardData.equipments
              )}

              </Grid>
              </Grid>
              </Box>
              {/* {renderCard(
                <ThreeDRotationIcon style={{ fontSize: 40 }} />,
                "Support Tickets",
                10 // Hardcoded, replace with the actual value
              )} */}
            </>
          )}
              </Box>
        {/* <Box mt={3}>
          <Typography variant="h4" style={{marginTop:'20px'}}>
            Recent Activities
          </Typography>
          &nbsp;
          &emsp;
          <Box>
          <Typography variant="h5">
           Near Rafts 
         </Typography>
          &emsp;
          <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Box>
          &nbsp;
          &emsp;
          <Box>
          <Typography variant="h5">
           Equipment Purchases
         </Typography>
          &emsp;
          <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Box>
          &nbsp;
          &emsp;
          <Box>
          <Typography variant="h5">
           Requested Services
         </Typography>
         &nbsp;
          &emsp;
          <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Box>
        </Box> */}
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
    </ThemeProvider>
  );
};

export default Dashboard;

// <div style={{ height: 400, width: "100%" }}>
//   <DataGrid
//     className={classes.table}
//     rows={activities}
//     columns={columns}
//     pageSize={5}
//     disableSelectionOnClick
//   />
// </div>
