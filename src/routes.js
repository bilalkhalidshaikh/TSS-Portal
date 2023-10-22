import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdSpaceDashboard,
  MdShop,
  MdViewKanban,
  MdContacts,
  MdRedeem,
  MdSwapVerticalCircle,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Customers from "views/admin/customers";
import Vessel from "views/admin/vessel";
import VesselDetail from "views/detail/vessel";
import CustomerDetail from "views/detail/customer";
import Equipments from "views/admin/equipments";
import Profile from "views/admin/profile";
import Rafts from "views/admin/rafts";
/* eslint-disable import/no-unresolved */
import ProductListing from "views/admin/products";
/* eslint-enable import/no-unresolved */

import RequestedServices from "views/admin/requested";
import CustomersAndSupport from "views/admin/contactsupport";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import NotFound from "./views/Notfound";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },

  {
    name: "Customers",
    layout: "/admin",
    // path: "/nft-marketplace",
    path: "/customers",
    icon: (
      <Icon as={MdSpaceDashboard} width="20px" height="20px" color="inherit" />
    ),
    component: Customers,
    secondary: true,
  },
  {
    name: "Vessel",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/vessel",
    component: Vessel,
  },
  {
    name: "Equipments",
    layout: "/admin",
    // path: "/profile",
    path: "/equipments",
    icon: <Icon as={MdShop} width="20px" height="20px" color="inherit" />,
    component: Equipments,
  },
  {
    name: "Rafts",
    // layout: "/auth",
    layout: "/admin",
    // path: "/sign-in",
    path: "/rafts",
    icon: <Icon as={MdViewKanban} width="20px" height="20px" color="inherit" />,
    // component: SignInCentered,
    component: Rafts,
  },
  {
    name: "Equipment Purchases",
    // layout: "/auth",
    layout: "/admin",
    // path: "/sign-in",
    path: "/equipment-purchases",
    icon: <Icon as={MdRedeem} width="20px" height="20px" color="inherit" />,
    // component: SignInCentered,
    component: ProductListing,
  },
  {
    name: "Requested services",
    // layout: "/auth",
    layout: "/admin",
    // path: "/sign-in",
    path: "/requested-services",
    icon: (
      <Icon
        as={MdSwapVerticalCircle}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    // component: SignInCentered,
    component: RequestedServices,
  },
  {
    name: "Contact & Support",
    // layout: "/rtl",
    layout: "/admin",
    // path: "/rtl-default",
    path: "/contact-support",
    icon: <Icon as={MdContacts} width="20px" height="20px" color="inherit" />,
    // component: RTL,
    component: CustomersAndSupport,
  },
  {
    // name: "Vessel Detail",
    // layout: "/rtl",
    layout: "/admin",
    // path: "/rtl-default",
    // path: "/vessel-detail",
    path: "/vessel-detail/:vesselId", // Update path to include /:vesselId
    // icon: <Icon as={MdContacts} width='20px' height='20px' color='inherit' />,
    // component: RTL,
    component: VesselDetail,
  },
  {
    // name: "Vessel Detail",
    // layout: "/rtl",
    layout: "/admin",
    // path: "/rtl-default",
    // path: "/vessel-detail",
    path: "/customer-detail/:customerId", // Update path to include /:vesselId
    // icon: <Icon as={MdContacts} width='20px' height='20px' color='inherit' />,
    // component: RTL,
    component: CustomerDetail,
  },
  {
    // name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    // icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
