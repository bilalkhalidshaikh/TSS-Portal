import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { DataGrid } from "@mui/x-data-grid";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#11047A",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.37)",
    color: "white",
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

  return (
    <ThemeProvider theme={theme}>
      <Box pt={{ xs: "130px", md: "80px", xl: "80px" }}>
        <Grid container spacing={3}>
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
        </Grid>
        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            Recent Activities
          </Typography>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              className={classes.table}
              rows={activities}
              columns={columns}
              pageSize={5}
              disableSelectionOnClick
            />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;