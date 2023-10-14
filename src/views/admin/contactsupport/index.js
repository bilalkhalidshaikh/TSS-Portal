// import React, { useState } from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import {
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Avatar,
// } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
// import GlassmorphismBackground from './GlassmorphismBackground';
// import axios from 'axios';

// const Root = styled('div')(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
// }));

// const UsersList = styled(List)(({ theme }) => ({
//   maxHeight: 'calc(100vh - 180px)', // Set the maximum height to 100% of the viewport height minus padding
//   overflow: 'auto', // Enable vertical scrolling when users exceed the container height
// }));

// const UserItem = styled(ListItem)(({ theme, selected }) => ({
//   cursor: 'pointer',
//   backgroundColor: selected ? "#11047A" : 'transparent',
//   color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
//   '&:hover': {
//     backgroundColor: "#11047A",
//     color: theme.palette.primary.contrastText,
//   },
// }));

// const ChatContainer = styled('div')(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   maxHeight: 'calc(100vh - 280px)', // Set the maximum height to 100% of the viewport height minus padding
//   overflow: 'auto', // Enable vertical scrolling when messages exceed the container height
//   backdropFilter: 'blur(10px)', // Apply glassmorphism effect to the background
//   background: 'rgba(255, 255, 255, 0.2)', // Adjust the background opacity as needed
//   borderRadius: '12px',
//   padding: theme.spacing(2),
// }));

// const ChatInputContainer = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   marginTop: theme.spacing(2),
// }));

// const ChatInput = styled(TextField)(({ theme }) => ({
//   flexGrow: 1,
//   marginRight: theme.spacing(2),
// }));

// const ChatButton = styled(Button)(({ theme }) => ({
//   flexShrink: 0,
//   marginLeft: theme.spacing(1),
// }));

// const ChatMessage = styled(ListItem)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   display: 'flex',
//   alignItems: 'flex-start',
// }));

// const ChatMessageText = styled(ListItemText)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: '12px',
//   padding: theme.spacing(1, 2),
//   marginLeft: theme.spacing(1),
//   maxWidth: '70%',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow effect to the message
// }));

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5', // Customize the primary color as desired
//       contrastText: '#fff', // Customize the text color for the primary color
//     },
//   },
// });

// const CustomersAndSupport = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([
//     { sender: 'Admin', message: 'Hello! How can I assist you today?' },
//   ]);

//   const BASE_URL = "https://api.raft-service.com"

//   const getChatMessages = (customerId) => {
//     return axios.get(`${BASE_URL}/customer-support/get-chat-messages/${customerId}`);
//   };

//   const sendMessageByAdmin = (message, customerId) => {
//     return axios.post(`${BASE_URL}/customer-support/send-message-by-admin`, { message, customerId });
//   };

//   const deleteMessage = (messageId) => {
//     return axios.delete(`${BASE_URL}/customer-support/delete-message`, { data: { messageId } });
//   };

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       const newMessage = { sender: 'User', message };
//       setChatMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessage('');
//       // Simulate receiving a response from admin
//       setTimeout(() => {
//         const adminMessage = {
//           sender: 'Admin',
//           message: 'Thank you for your message!',
//         };
//         setChatMessages((prevMessages) => [...prevMessages, adminMessage]);
//       }, 1000);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Root>
//         <br/>
//         <br/>
//         <br/>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={3}>
//             <StyledPaper>
//               <Typography variant="h4"></Typography>
//               <UsersList>
//                 <UserItem
//                   selected={selectedUser === 'Bilal'}
//                   onClick={() => handleUserSelect('Bilal')}
//                 >
//                   <Avatar />
//                   &emsp;
//                   <ListItemText primary="Bilal" />
//                 </UserItem>
//                 <UserItem
//                   selected={selectedUser === 'Abdul Haseeb'}
//                   onClick={() => handleUserSelect('Abdul Haseeb')}
//                   >
//                   <Avatar />
//                   &emsp;
//                   <ListItemText primary="Abdul Haseeb" />
//                 </UserItem>
//                 <UserItem
//                   selected={selectedUser === 'Abdul Samad'}
//                   onClick={() => handleUserSelect('Abdul Samad')}
//                   >
//                   <Avatar />
//                   &emsp;
//                   <ListItemText primary="Abdul Samad" />
//                 </UserItem>
//                 {/* Add more user items as needed */}
//               </UsersList>
//             </StyledPaper>
//           </Grid>
//           <Grid item xs={12} md={9}>
//             <StyledPaper>
//               <Typography variant="h5">Chat with {selectedUser || 'Admin'}</Typography>
//               {selectedUser && (
//                 <ChatContainer>
//                   <List>
//                     {chatMessages.map((chat, index) => (
//                       <ChatMessage key={index}>
//                         <Avatar>
//                           {chat.sender === 'Admin' ? <AccountCircle /> : <AccountCircle />}
//                         </Avatar>
//                         <ChatMessageText
//                           primary={chat.sender}
//                           secondary={chat.message}
//                           primaryTypographyProps={{ variant: 'subtitle2', color: 'textSecondary' }}
//                           secondaryTypographyProps={{ variant: 'body1' }}
//                         />
//                       </ChatMessage>
//                     ))}
//                   </List>
//                   <ChatInputContainer>
//                     <ChatInput
//                       variant="outlined"
//                       placeholder="Type your message..."
//                       fullWidth
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={(e) => {
//                         if (e.key === 'Enter') {
//                           handleSendMessage();
//                         }
//                       }}
//                     />
//                     <ChatButton
//                       variant="contained"
//                       color="primary"
//                       onClick={handleSendMessage}
//                       sx={{backgroundColor:"#11047A"}}
//                     >
//                       Send
//                     </ChatButton>
//                   </ChatInputContainer>
//                 </ChatContainer>
//               )}
//             </StyledPaper>
//           </Grid>
//         </Grid>
//       </Root>
//       <GlassmorphismBackground /> {/* Add the glassmorphism background component */}
//     </ThemeProvider>
//   );
// };

// export default CustomersAndSupport;

import React, { useState, useEffect, useRef } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  CircularProgress
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AccountCircle } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import GlassmorphismBackground from "./GlassmorphismBackground";
import axios from "axios";

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  overflow: "fixed",
}));
const UsersList = styled(List)(({ theme }) => ({
  maxHeight: "calc(100vh - 180px)",
  overflow: "auto",
}));

const UserItem = styled(ListItem)(({ theme, selected }) => ({
  cursor: "pointer",
  backgroundColor: selected ? "#ccc !important" : "transparent",
  borderRight: selected ? "8px solid #12047a9d !important" : "none",
  color: selected
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  "&:hover": {
    backgroundColor: "#11047A",
    color: theme.palette.primary.contrastText,
  },
  textWeight: "bolder",
}));

const ChatContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  // height: "calc(100% - 56px)", // Adjust the height to fit your design

  maxHeight: "calc(100vh - 280px)", // Set the maximum height to 100% of the viewport height minus padding
  overflow: "auto", // Enable vertical scrolling when messages exceed the container height
  backdropFilter: "blur(10px)", // Apply glassmorphism effect to the background
  background: "rgba(255, 255, 255, 0.2)", // Adjust the background opacity as needed
  borderRadius: "15px",
  padding: theme.spacing(2),
}));

const ChatInputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(8),
  position: "sticky",
  bottom: -18,
  backgroundColor: "white", // Adjust the background color as needed
  maxHeight: "180px",
  paddingBottom: "12px",
}));

const ChatInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(2),
}));

const ChatButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  marginLeft: theme.spacing(1),
}));

const ChatMessage = styled(ListItem)(({ theme, isSender }) => ({
  marginBottom: theme.spacing(4),
  display: "flex",
  alignItems: isSender ? "flex-end" : "flex-start",
  "&:hover": {
    backgroundColor: "#f1f1f1", // Change hover background color
  },
  position: "relative", // Added relative positioning
}));

const CustomListItemSecondaryAction = styled("div")({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
});

const ChatMessageText = styled(ListItemText)(({ theme, isSender }) => ({
  backgroundColor: isSender ? "#11047A" : "#eee",
  // color: isSender ? "#ffffff" : "#ffffff",
  color: "white !important",
  borderRadius: isSender ? "12px 12px 0 12px" : "12px 12px 12px 0",
  padding: theme.spacing(1, 2),
  marginLeft: isSender ? "auto" : theme.spacing(1),
  marginRight: isSender ? theme.spacing(1) : "auto",
  maxWidth: "70%",
  boxShadow: isSender ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
  position: "relative", // Added relative positioning
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Customize the primary color as desired
      contrastText: "#fff", // Customize the text color for the primary color
    },
  },
});

const CustomersAndSupport = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "Admin", message: "Hello! How can I assist you today?" },
  ]);
  const [customerList, setCustomerList] = useState([]); // Added state for customer list
  const [customerName, setCustomerName] = useState(null); // Added state for customer list

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingMessageId, setDeletingMessageId] = useState(null);
  const chatContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");
const [snackbarSeverity, setSnackbarSeverity] = useState("success");



  const handleDeleteDialogClose = () => {
    setDeletingMessageId(null);
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirmed = () => {
    // if (deletingMessageId) {
    handleDeleteConfirmation(deletingMessageId);
    handleDeleteDialogClose();
    // }
  };
  // const handleDeleteMessage = (messageId) => {
  //   handleDeleteConfirmation(messageId);
  // };

  const BASE_URL = "https://api.raft-service.com";
  const API_KEY = "340304930490d9f0df90df90df9d0f9d0f";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  useEffect(() => {
    // Fetch the list of customers when the component mounts
    setIsLoading(true)
    axios
      .get(`${BASE_URL}/customer-support/get-customers-list`, { headers })
      .then((response) => {
        // Handle the response here
        console.log("Customer list:", response.data);
        // Update customerList state with the fetched list of customers
        setCustomerList(response.data.data);
        setIsLoading(false)
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching customer list:", error);
      setIsLoading(false)
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  

  const getChatMessages = (customerId) => {
    setIsLoading(true)
    console.log("here", customerId);
    return axios
      .get(`${BASE_URL}/customer-support/get-chat-messages/${customerId}`, {
        headers,
      })
      .then((response) => {
        // Handle the response here
        console.log("chat list:", response.data);
        // Update customerList state with the fetched list of customers
        setChatMessages(response.data.data);
        setIsLoading(false)
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching chat messages:", error);
        setIsLoading(false)
      });
  };

  const sendMessageByAdmin = (message, customerId) => {
    setIsLoading(true)
    return axios
      .post(
        `${BASE_URL}/customer-support/send-message-by-admin`,
        { message, customerId },
        { headers }
      )
      .then((response) => {
        // Handle the response here
        // Update customerList state with the fetched list of customers
        getChatMessages(customerId && customerId);
        setIsLoading(false)
      })
      .catch((error) => {
        // Handle errors
        console.error("Error sending chat:", error);
        setIsLoading(false)
      });
  };

  

  const deleteMessage = async (messageId) => {
    setIsLoading(true);
    try {
      console.log("Deleting message with ID:", messageId);
      const response = await axios.post(
        `${BASE_URL}/customer-support/delete-message`,
        { messageId },
        { headers }
      );
      console.log("Response from deleteMessage:", response);
  
      if (response && response.data) {
        console.log("Message deleted successfully:", response.data);
        handleSnackbarOpen("Message deleted successfully", "success");
      } else {
        console.error("Error deleting chat: Response data is empty");
      }
    } catch (error) {
      console.error("Error deleting chat:", error);
      handleSnackbarOpen("Error deleting message", "error");
    }
    setIsLoading(false);
  };
  

  const handleUserSelect = (user) => {
    console.log("user here", user?._id);
    setSelectedUser(user?._id);
    setCustomerName(user?.customerName);
    // Call the necessary API to fetch chat messages for the selected user
    getChatMessages(user?._id); // Change to use _id for the customer ID

  };

  const handleSendMessage = () => {
    if (message.trim() !== "" && selectedUser) {
      // Send the message to the API
      sendMessageByAdmin(message, selectedUser) // Change to use _id for the customer ID
        .then((response) => {
          // Handle the response from sending the message
          console.log("Message sent:", response.data);
          // Update chatMessages state with the sent message
          setChatMessages((prevMessages) => [...prevMessages, response.data]);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error sending message:", error);
        });
      setMessage("");
    }
  };

  const handleDeleteConfirmation = (messageId) => {
    setDeletingMessageId(messageId);
    setDeleteDialogOpen(true);
    deleteMessage(messageId);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever chatMessages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleDeleteDialogClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this message?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirmed}
            color="primary"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Root>
        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <StyledPaper>
              <Typography variant="h4"></Typography>
              <UsersList>
                {customerList.map((user) => (
                  <UserItem
                    key={user._id}
                    selected={selectedUser === user?._id}
                    onClick={() => handleUserSelect(user)}
                  >
                    <Avatar />
                    &emsp;
                    <ListItemText primary={user.customerName} />
                  </UserItem>
                ))}
              </UsersList>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={9}>
            <StyledPaper>
              <Typography variant="h5">
                Chat with {(customerName && customerName) || "Admin"}
              </Typography>
              {selectedUser && (
                <ChatContainer ref={chatContainerRef}>
                  <List>
                    {chatMessages.map((chat, index) => (
                      <ChatMessage
                        key={index}
                        isSender={!chat.isCustomerSender}
                      >
                        {chat.isCustomerSender ? (
                          <></>
                        ) : (
                          <Avatar>
                            <AccountCircle />
                          </Avatar>
                        )}
                        <ChatMessageText
                          primary={
                            <>
                              {chat.isCustomerSender
                                ? customerName && customerName
                                : "Admin"}
                              {chat.isCustomerSender && (
                                <IconButton
                                  aria-label="Delete"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteConfirmation(chat._id);
                                  }}
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: "0",
                                    transform: "translateY(-50%)",
                                  }}
                                >
                                  <DeleteIcon
                                    style={{ fontSize: "16px", color: "#fff" }}
                                  />
                                </IconButton>
                              )}
                            </>
                          }
                          secondary={
                            <>
                              {chat.message}
                              {/* {chat.isCustomerSender ? (

                              <IconButton
                              aria-label="Delete"
                              color="white"
                              onClick={() => handleDeleteConfirmation(chat._id)}
                            >
                              <DeleteIcon style={{color:'#fff'}} />
                            </IconButton> 
                              ):""} */}
                            </>
                          }
                          primaryTypographyProps={{
                            variant: "subtitle2",
                            color: `${
                              chat.isCustomerSender ? "white" : "#333"
                            }`,
                            textWeight:'bold'
                          }}
                          secondaryTypographyProps={{
                            variant: "body1",
                            color: `${chat.isCustomerSender ? "#eee" : "#333"}`,
                          }}
                          isSender={chat.isCustomerSender}
                        />
                        {chat.isCustomerSender && (
                          <>
                            <Avatar>
                              <AccountCircle />
                            </Avatar>
                            {/* <IconButton
                              aria-label="Delete"
                              onClick={() => handleDeleteConfirmation(chat._id)}
                            >
                              <DeleteIcon />
                            </IconButton> */}
                          </>
                        )}
                      </ChatMessage>
                    ))}
                  </List>
                  <ChatInputContainer>
                    <ChatInput
                      variant="outlined"
                      placeholder="Type your message..."
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <ChatButton
                      variant="contained"
                      color="primary"
                      onClick={handleSendMessage}
                      sx={{ backgroundColor: "#11047A" }}
                    >
                      Send
                    </ChatButton>
                  </ChatInputContainer>
                </ChatContainer>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
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
          <Snackbar
  open={snackbarOpen}
  autoHideDuration={6000}
  onClose={handleSnackbarClose}
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={handleSnackbarClose}
    severity={snackbarSeverity}
  >
    {snackbarMessage}
  </MuiAlert>
</Snackbar>

      </Root>
      <GlassmorphismBackground />{" "}
      {/* Add the glassmorphism background component */}
    </ThemeProvider>
  );
};

export default CustomersAndSupport;
