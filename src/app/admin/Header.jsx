"use client";
import firebase_app from "@/config/firebase";
import { errorMessage } from "@/libs/utils";
import {
  ArrowTrendingUpIcon,
  Bars2Icon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  PresentationChartBarIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/AuthProvider";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {user}=useContext(AuthContext);
  const closeMenu = () => setIsMenuOpen(false);

  const onSignOut = async ()=>{
    try {
      const {isConfirmed}= await Swal.fire({
        title:'Do you want to sign out?',
        icon:'question',
        showConfirmButton:true,
        confirmButtonText:"Yes",
        showCancelButton:true,
        cancelButtonText:"No",
      })
      if(isConfirmed){
       await signOut(getAuth(firebase_app))
      }
    } catch (error) {
      Swal.fire({
        title:"Faild",
        text:errorMessage(error),
        icon:"error"
      })
    }
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {user?.photoURL?(
            <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={user?.photoURL}
          />
          ):<UserCircleIcon className="h-10 w-10" />}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded`}
        >
          <UserCircleIcon className="h-4 w-4" />
          <div>
          <Typography as="span" className="text-[12px] font-normal">
            {user?.displayName}
          </Typography>
          <Typography as="span" className="text-[10px] font-normal">
            {user?.email}
          </Typography>
          </div>
        </MenuItem>
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded`}
        >
          <Cog6ToothIcon className="h-4 w-4" />
          <Typography as="span" variant="small" className="font-normal">
            ADMIN
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={()=>{
            onSignOut();
            closeMenu();
          }}
          className={`flex items-center gap-2 rounded bg-red-100`}
        >
          <PowerIcon className="h-4 w-4 text-red-700" />
          <Typography as="span" variant="small" className="font-normal text-red-700">
            LOG OUT
          </Typography>
        </MenuItem>
        {/* {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })} */}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

export function AdminHeader() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const hide_on = ["/admin/signin", "/admin/signup"];
  for (const path of hide_on) {
    if (pathname.includes(path)) return null;
  }

  return (
    <>
      <Navbar className="shadow-none bg-gray-100 rounded-none max-w-[100vw] w-full">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center ">
            <IconButton
              size="md"
              color="blue-gray"
              variant="text"
              onClick={toggleIsNavOpen}
              className="ml-auto mr-2"
            >
              <Bars2Icon className="h-10 w-10" />
            </IconButton>
            <Typography
              as={Link}
              href="/admin"
              className="mr-4 ml-2 text-2xl font-semibold cursor-pointer py-1.5"
            >
              RH ADMIN
            </Typography>
          </div>
          <ProfileMenu />
        </div>
      </Navbar>
      <Drawer
        open={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            RH ADMIN
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <List>
          <Link href="/admin/blogs">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Blogs
            </ListItem>
          </Link>
          <Link href="/admin/pages">
            <ListItem>
              <ListItemPrefix>
                <ArrowTrendingUpIcon className="h-5 w-5" />
              </ListItemPrefix>
              SEO
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
