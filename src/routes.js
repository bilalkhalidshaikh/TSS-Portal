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
  MdContacts
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Customers from "views/admin/customers"
import Vessel from "views/admin/vessel"
import Equipments from "views/admin/equipments"
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Customers",
    layout: "/admin",
    // path: "/nft-marketplace",
    path: "/customers",
    icon: (
      <Icon
        as={MdSpaceDashboard}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Customers,
    secondary: true,
  },
  {
    name: "Vessel",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/vessel",
    component: Vessel,
  },
  {
    name: "Equipments",
    layout: "/admin",
    // path: "/profile",
    path: "/equipments",
    icon: <Icon as={MdShop} width='20px' height='20px' color='inherit' />,
    component: Equipments,
  },
  {
    name: "Rafts",
    // layout: "/auth",
    layout: "/admin",
    // path: "/sign-in",
    path: "/rafts",
    icon: <Icon as={MdViewKanban} width='20px' height='20px' color='inherit' />,
    // component: SignInCentered,
    component: Profile,
  },
  {
    name: "Contact & Support",
    // layout: "/rtl",
    layout: "/admin",
    // path: "/rtl-default",
    path: "/contact-support",
    icon: <Icon as={MdContacts} width='20px' height='20px' color='inherit' />,
    // component: RTL,
    component: Profile,
  },
];

export default routes;
