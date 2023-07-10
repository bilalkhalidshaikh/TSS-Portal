import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import GlassmorphismBackground from './GlassmorphismBackground';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const UsersList = styled(List)(({ theme }) => ({
  maxHeight: 'calc(100vh - 180px)', // Set the maximum height to 100% of the viewport height minus padding
  overflow: 'auto', // Enable vertical scrolling when users exceed the container height
}));

const UserItem = styled(ListItem)(({ theme, selected }) => ({
  cursor: 'pointer',
  backgroundColor: selected ? "#11047A" : 'transparent',
  color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: "#11047A",
    color: theme.palette.primary.contrastText,
  },
}));

const ChatContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  maxHeight: 'calc(100vh - 280px)', // Set the maximum height to 100% of the viewport height minus padding
  overflow: 'auto', // Enable vertical scrolling when messages exceed the container height
  backdropFilter: 'blur(10px)', // Apply glassmorphism effect to the background
  background: 'rgba(255, 255, 255, 0.2)', // Adjust the background opacity as needed
  borderRadius: '12px',
  padding: theme.spacing(2),
}));

const ChatInputContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const ChatInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(2),
}));

const ChatButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  marginLeft: theme.spacing(1),
}));

const ChatMessage = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'flex-start',
}));

const ChatMessageText = styled(ListItemText)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  padding: theme.spacing(1, 2),
  marginLeft: theme.spacing(1),
  maxWidth: '70%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow effect to the message
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Customize the primary color as desired
      contrastText: '#fff', // Customize the text color for the primary color
    },
  },
});

const CustomersAndSupport = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Admin', message: 'Hello! How can I assist you today?' },
  ]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { sender: 'User', message };
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
      // Simulate receiving a response from admin
      setTimeout(() => {
        const adminMessage = {
          sender: 'Admin',
          message: 'Thank you for your message!',
        };
        setChatMessages((prevMessages) => [...prevMessages, adminMessage]);
      }, 1000);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <br/>
        <br/>
        <br/>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <StyledPaper>
              <Typography variant="h4">Customers and Support</Typography>
              <UsersList>
                <UserItem
                  selected={selectedUser === 'Bilal'}
                  onClick={() => handleUserSelect('Bilal')}
                >
                  <Avatar />
                  &emsp;
                  <ListItemText primary="Bilal" />
                </UserItem>
                <UserItem
                  selected={selectedUser === 'Abdul Haseeb'}
                  onClick={() => handleUserSelect('Abdul Haseeb')}
                  >
                  <Avatar />
                  &emsp;
                  <ListItemText primary="Abdul Haseeb" />
                </UserItem>
                <UserItem
                  selected={selectedUser === 'Abdul Samad'}
                  onClick={() => handleUserSelect('Abdul Samad')}
                  >
                  <Avatar />
                  &emsp;
                  <ListItemText primary="Abdul Samad" />
                </UserItem>
                {/* Add more user items as needed */}
              </UsersList>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={9}>
            <StyledPaper>
              <Typography variant="h5">Chat with {selectedUser || 'Admin'}</Typography>
              {selectedUser && (
                <ChatContainer>
                  <List>
                    {chatMessages.map((chat, index) => (
                      <ChatMessage key={index}>
                        <Avatar>
                          {chat.sender === 'Admin' ? <AccountCircle /> : <AccountCircle />}
                        </Avatar>
                        <ChatMessageText
                          primary={chat.sender}
                          secondary={chat.message}
                          primaryTypographyProps={{ variant: 'subtitle2', color: 'textSecondary' }}
                          secondaryTypographyProps={{ variant: 'body1' }}
                        />
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
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <ChatButton
                      variant="contained"
                      color="primary"
                      onClick={handleSendMessage}
                      sx={{backgroundColor:"#11047A"}}
                    >
                      Send
                    </ChatButton>
                  </ChatInputContainer>
                </ChatContainer>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Root>
      <GlassmorphismBackground /> {/* Add the glassmorphism background component */}
    </ThemeProvider>
  );
};

export default CustomersAndSupport;
