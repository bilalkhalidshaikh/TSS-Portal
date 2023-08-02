// import React, { useState } from "react";
// import { InputBase, IconButton, Paper, Grid, useTheme } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import {useColorModeValue} from '@chakra-ui/react';







// const SearchBar = ({ onSearch }) => {

    // const shadow = useColorModeValue(
    //     '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    //     '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
    // );

//     const useStyles = makeStyles((theme) => ({
//         searchContainer: {
//           display: "flex",
//           width: "100%",
//           alignItems: "center",
//           padding: theme.spacing(0.5),
//           backgroundColor: "#F4F7FE", // Custom background color
//           borderRadius: '25px',
//           boxShadow: 	shadow,
//           [theme.breakpoints.down("sm")]: {
//             maxWidth: "320px", // Reduce the width on small screens
//           },
//           maxWidth:'620px',
//           border:'12px solid #fff',
//           maxHeight:'60px'
//         },
//         searchInput: {
//           marginLeft: theme.spacing(1),
//           flex: 1,
//           fontSize: "16px", // Custom font size
//           background:'#F4F7FE'
//         },
//         searchIcon: {
//           color: "#666", // Custom icon color
//         },
//       }));

//   const classes = useStyles();
//   const theme = useTheme();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <Grid container alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <Paper className={classes.searchContainer}>
//           <IconButton onClick={handleSearch}>
//             <SearchIcon className={classes.searchIcon} />
//           </IconButton>
//           <InputBase
//             className={classes.searchInput}
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             fullWidth
//           />
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default SearchBar;



import React, { useState } from "react";
import { InputBase, IconButton, Paper, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useColorModeValue } from "@chakra-ui/react";


const SearchBar = ({ onSearch }) => {

  
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
);
  const useStyles = makeStyles((theme) => ({
    searchContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      padding: theme.spacing(0.5),
      backgroundColor: "#F4F7FE", // Custom background color
      borderRadius: "25px",
      boxShadow: shadow,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "320px", // Reduce the width on small screens
      },
      maxWidth: "620px",
      border: "12px solid #fff",
      maxHeight: "60px",
    },
    searchInput: {
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize: "16px", // Custom font size
      background: "#F4F7FE",
    },
    searchIcon: {
      color: "#666", // Custom icon color
    },
  }));
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");



  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ flex: 1 }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper className={classes.searchContainer}>
          <IconButton onClick={handleSearch}>
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
          <InputBase
            className={classes.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            fullWidth
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
