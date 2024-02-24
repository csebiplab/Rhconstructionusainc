"use client";

import constants from "@/libs/constant";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
  HiMailOpen,
  HiOutlineHome,
  HiOutlineMailOpen,
  HiPhone,
  HiPhoneIncoming,
} from "react-icons/hi";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const our_service_menu_items = {
  interior: [
    { title: "Bathroom Remodeling", route: "/bathroom-remodeling-brooklyn" },
    { title: "Kitchen Remodeling", route: "/kitchen-remodeling" },
    { title: "Painting", route: "/painting" },
    { title: "Sheetrock", route: "/sheetrock" },
    { title: "Plastering", route: "/plastering" },
    {
      title: "Electrical & Plumbing",
      route: "/emergency-electrical-service",
    },
  ],
  exterior: [
    { title: "Concrete Contractor", route: "/concrete-contractor" },
    { title: "Roofing", route: "/roofing" },
    { title: "Pointing", route: "/pointing" },
    { title: "Water Proofing", route: "/water-proofing" },
    {
      title: "Sidewalk Repair and Replace",
      route: "/sidewalk-repair-and-replace",
    },
    { title: "Brown Stone Repair", route: "/brown-stone" },
    { title: "Exterior Brickwork", route: "/exterior-brickwork" },
    {
      title: "Emergency Plumbing",
      route: "/emergency-plumber-brooklyn",
    },
    { title: "Brick Works", route: "/exterior-brickwork" },
    { title: "Power Wash", route: "/power-wash" },
    { title: "Siding", route: "/siding-contractors" },
    {
      title: "All kinds of Masonry Work",
      route: "/all-kinds-of-masonry-work",
    },
  ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <Typography
            as={Link}
            href="/our-services"
            variant="small"
            color="blue-gray"
            className="font-medium text-lg"
          >
            <ListItem
              className="flex items-center gap-2 rounded-full py-1  pr-4 text-[17px] font-medium"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary font-semibold">Interior</h3>
              <ul>{renderItems(our_service_menu_items.interior)}</ul>
            </div>
            <div>
              <h3 className="mb-1 text-primary font-semibold">Exterior</h3>
              <ul>
                {renderItems(our_service_menu_items.exterior.slice(0, 6))}
              </ul>
            </div>
            <div>
              <h3 className="mb-1 text-primary font-semibold"></h3>
              <ul>
                {renderItems(our_service_menu_items.exterior.slice(6, 12))}
              </ul>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <h4 className="text-primary mb-1 font-semibold">Interior</h4>
          <ul>{renderItems(our_service_menu_items.interior)}</ul>
          <hr className="my-1" />
          <h4 className="text-primary mb-1 font-semibold">Exterior</h4>
          <ul>{renderItems(our_service_menu_items.exterior)}</ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className=" mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-1 border-0 outline-none">
      <Typography
        as={Link}
        href="/about-rh-constraction"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          About
        </ListItem>
      </Typography>
      <OurServiceManu />
      <Typography
        as={Link}
        href="/customer-reviews"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          Customer Reviews
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          Blogs
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/our-projects"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          Projects
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/notice"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          🔔 Notice
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/contact"
        variant="normal"
        color="blue-gray"
        className="font-medium rounded-full text-[17px]"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-full hover:bg-primary px-4">
          Contact
        </ListItem>
      </Typography>
      <a href={constants.facebook} target="_blank">
        <IconButton className="rounded-full" color="amber">
          <FaFacebookF size={18} color="white" />
        </IconButton>
      </a>
      <a href={constants.twitter} target="_blank">
        <IconButton className="rounded-full" color="amber">
          <FaTwitter size={18} color="white" />
        </IconButton>
      </a>
    </List>
  );
}

function BottomMenu() {
  return (
    <figure className=" bg-primary py-2 text-4xl text-white md:hidden fixed bottom-0 left-0 z-[1000000] w-full px-5 flex gap-2 justify-between items-center">
      <Link href="/">
        <HiOutlineHome />
      </Link>
      <a href={`tel:+1 (646) 683-4612`}>
        <div className="bg-white rounded-full text-primary inline-book -mt-8 shadow-xl h-16 w-16 flex justify-center items-center">
          <HiPhoneIncoming />
        </div>
      </a>
      <a href="mailto:rhconusa@gmail.com">
        <HiOutlineMailOpen />
      </a>
    </figure>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <header>
        <div className="">
          <div className="container flex justify-between items-center py-1 flex-wrap gap-2">
            <a href="/" className="text-dark font-medium hidden md:block">
              Best construction company brooklyn
            </a>
            <div className="flex gap-2 items-center">
              <a
                href={`mailto:${constants.mail}`}
                className="flex gap-2 items-center p-1 rounded-md hover:bg-primary/10 hover:text-blue-700"
              >
                <HiMailOpen className="text-primary" /> {constants.mail}
              </a>
              <a
                href={`tel:${constants.hotline}`}
                className="flex gap-2 items-center p-1 rounded-md hover:bg-primary/10 hover:text-blue-700"
              >
                <HiPhone className="text-primary" /> {constants.hotline}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-300">
          <Navbar className="mx-auto px-5 md:px-24 rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" className="mr-4 cursor-pointer">
                <img
                  src="/assets/images/logo.webp"
                  alt=""
                  className="w-full max-w-[140px] rounded-md "
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            RH Construction
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenNav(false)}
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
        <NavList />
      </Drawer>
      <BottomMenu />
    </>
  );
}
