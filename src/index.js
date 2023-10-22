import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import VesselDetail from "./views/detail/vessel";
import RtlLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            {/* <Route path={`/detail/vessel-detail`} 
						 component={VesselDetail} /> */}
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RtlLayout} />
            <Redirect from="/" to="/auth" />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
      <ToastContainer/>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);



// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "assets/css/App.css";
// import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import AuthLayout from "layouts/auth";
// import AdminLayout from "layouts/admin";
// import VesselDetail from "./views/detail/vessel";
// import RtlLayout from "layouts/rtl";
// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "theme/theme";
// import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";

// // Create an authentication context
// export const AuthContext = React.createContext();

// function App() {
//   const [authenticated, setAuthenticated] = useState(false);

//   return (
//     <ChakraProvider theme={theme}>
//       <React.StrictMode>
//         <ThemeEditorProvider>
//           <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
//             <HashRouter>
//               <Switch>
//                 <Route path="/auth" component={AuthLayout} />
//                 <Route path="/vessel-detail" component={VesselDetail} />
//                 {authenticated ? (
//                   <Route path="/admin" component={AdminLayout} />
//                 ) : (
//                   <Redirect to="/auth/sign-in" />
//                 )}
//                 <Route path="/rtl" component={RtlLayout} />
//                 <Redirect from="/" to="/admin" />
//               </Switch>
//             </HashRouter>
//           </AuthContext.Provider>
//         </ThemeEditorProvider>
//       </React.StrictMode>
//     </ChakraProvider>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
