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
  Stack,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));


const ChatContainer = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(3),
    maxHeight: '50vh', // Set the maximum height to 60% of the viewport height
    overflow: 'auto', // Enable vertical scrolling when messages exceed the container height
  }));

const ChatInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  marginRight: theme.spacing(2),
}));

const ChatButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
}));

const ChatMessage = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ChatDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ChatMessageAdmin = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
}));

const ChatMessageText = styled(ListItemText)(({ theme }) => ({
  backgroundColor: '#F3F3F3',
  borderRadius: '10px',
  padding: '8px 12px',
  marginLeft: theme.spacing(1),
  maxWidth: '70%',
}));

const theme = createTheme();

const CustomersAndSupport = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Admin', message: 'Hello! How can I assist you today?' },
  ]);

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
          <Grid item xs={12}>
            <StyledPaper>
              <Typography variant="h4">Customers and Support</Typography>
              {/* Add your content here */}
            </StyledPaper>
          </Grid>
          <Grid item xs={12}>
            <StyledPaper>
              <Typography variant="h5">Chat with Admin</Typography>
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
                <div >
                <Stack direction="row" spacing={2}>

                  <TextField
                    className={ChatInput}
                    variant="outlined"
                    placeholder="Type your message..."
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage(e);
                        }
                      }}
                  />
                  <Button
                    className={ChatButton}
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                    sx={{ backgroundColor: "#11047A" }}
                  >
                    Send
                  </Button>
                  </Stack>
                </div>
              </ChatContainer>
            </StyledPaper>
          </Grid>
        </Grid>
      </Root>
    </ThemeProvider>
  );
};

export default CustomersAndSupport;
