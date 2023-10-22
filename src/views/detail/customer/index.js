import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";



const CustomerDetail = (props) => {
  const [customerData, setCustomerData] = useState({});
  const [customerID, setCustomerID] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL = "https://api.raft-service.com"; // Replace with your API base URL
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";
  // const { customerId } = useParams();
  useEffect(() => {
    // Get the vesselId from the URL parameters
    const { customerId } = props.match.params;
    console.log(customerId);
    setCustomerID(customerId);
  }, [props.match.params]);

  useEffect(() => {}, [customerID]);

  const theme = createTheme(); // Create a Material-UI theme
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${BASE_URL}/customers/get-customer-details/${
            customerID && customerID
          }`,
          { headers }
        );

        const customerDetails = response.data.data;
        console.log("data heir ", customerDetails);
        setCustomerData(customerDetails);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [customerID]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <br />
        <br />
        <br />
        <br />
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress color="primary" />
          </div>
        ) : (
          <>
            <Typography variant="h4">Customer Details</Typography>

            {customerData && customerData.customer ? (
              <div>
                {/* <Typography variant="h6">Customer Information:</Typography> */}
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell><b>Username</b></TableCell>
                        <TableCell>{customerData.customer.username}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Email</b></TableCell>
                        <TableCell>{customerData.customer.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Customer Name</b></TableCell>
                        <TableCell>
                          {customerData.customer.customerName}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Phone Number</b></TableCell>
                        <TableCell>
                          {customerData.customer.phone_number}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Created At</b></TableCell>
                        <TableCell>
                        {format(
                        new Date(customerData?.customer?.created_at),
                        "dd MMM yyyy",
                        {
                          locale: enGB,
                        }
                      )}
                          {/* {customerData.customer.created_at} */}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Is Active</b></TableCell>
                        <TableCell>
                          {customerData.customer.isActive ? "Yes" : "No"}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Is Blocked</b></TableCell>
                        <TableCell>
                          {customerData.customer.isBlocked ? "Yes" : "No"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <br />
                <br />
                {customerData.vessels && customerData.vessels.length > 0 ? (
                  <div>
                    <Typography variant="h4">Vessels Information</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Vessel Name</b></TableCell>
                            <TableCell><b>Registration Number</b></TableCell>
                            <TableCell><b>Vessel Type</b></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {customerData.vessels.map((vessel) => (
                            <TableRow key={vessel._id}>
                              <TableCell>{vessel.vesselName}</TableCell>
                              <TableCell>{vessel.registrationNumber}</TableCell>
                              <TableCell>{vessel.vesselType}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                ) : (
                  <p>No vessels found for this customer.</p>
                )}
              </div>
            ) : (
              <p>No customer details found.</p>
            )}
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CustomerDetail;
