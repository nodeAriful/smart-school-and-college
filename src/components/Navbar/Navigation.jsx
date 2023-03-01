import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Dropdown from "./Menu";
const navItem = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Stuff",
    path: "/Stuff",
    dropdown: [
      { name: "Teacher", path: "/teacher" },
      {
        name: "Employee",
        path: "/employee",
      },
    ],
  },

  {
    name: "Students",
    path: "/students",
  },
  {
    name: "Admission",
    path: "/admission",
  },

  {
    name: "E-Book",
    path: "/e-book",
  },
  {
    name: "Notices",
    path: "/notices",
    dropdown: [
      {
        name: "Events",
        path: "/events",
      },
      {
        name: "Notices",
        path: "/notices",
      },
      {
        name: "Routine",
        path: "/routine",
      },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenLogin = () => {
    setOpen(true);
  };
  const handleCloseLogin = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItem.map((nav) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          key={nav.name}
        >
          {nav.dropdown ? (
            <Dropdown nav={nav} />
          ) : (
            <NavLink to={nav.path} className="flex items-center">
              {nav.name}
            </NavLink>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto shadow-lg bg-transparent sticky top-0 z-10">
      <Navbar className="border-0 bg-transparent">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as={NavLink}
            to="/"
            variant="h3"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>Smart School</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            // variant="gradient"
            size="sm"
            className="hidden lg:inline-block bg-teal-500"
            onClick={handleOpenLogin}
          >
            <span>Login</span>
          </Button>
          <Login
            open={open}
            handleCloseLogin={handleCloseLogin}
            handleOpenLogin={handleOpenLogin}
          />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
              onClick={handleOpenLogin}
            >
              <span>Login</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
