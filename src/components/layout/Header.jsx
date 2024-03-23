"use client";

import constants from "@/lib/constant";
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
import Image from "next/image";
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
              className="flex items-center gap-2 rounded-full py-1  pr-4 text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-black font-medium"
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
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  border-0 outline-none">
      <Typography
        as={Link}
        href="/about-rh-constraction"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-[14px] xl:text-base 2xl:text-[18px] text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-2 2xl:px-4">
          About
        </ListItem>
      </Typography>
      <div className="mt-[6px]">
        <OurServiceManu />
      </div>
      <Typography
        as={Link}
        href="/customer-reviews"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-2 2xl:px-4">
          Customer Reviews
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-2 2xl:px-4">
          Blogs
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/our-projects"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-2 2xl:px-4">
          Projects
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-2 2xl:px-4">
          Contact
        </ListItem>
      </Typography>
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
        <div className="bg-dark-400 !text-white container hidden md:block">
          <div className="flex justify-between items-center py-1 flex-wrap gap-2">
            <a href="/" className="text-white font-medium hidden md:block">
              Best Construction Company Brooklyn
            </a>
            <div className="flex items-center">
              <a
                href={`mailto:${constants.mail}`}
                className="flex gap-2 items-center p-1 rounded-md hover:bg-primary/10 hover:text-blue-700"
              >
                <Image
                  src="/assets/images/mail.png"
                  width={36}
                  height={29}
                  className="w-[36px] h-[29px]"
                />
                {constants.mail}
              </a>
              <div className="flex gap-x-[45px] items-center pl-[75px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3_400)">
                    <path
                      d="M14.5 0C6.49194 0 0 6.49194 0 14.5C0 21.2999 4.68176 27.006 10.9974 28.5731V18.9312H8.00748V14.5H10.9974V12.5906C10.9974 7.65542 13.231 5.3679 18.0763 5.3679C18.995 5.3679 20.5801 5.54828 21.2286 5.72808V9.74458C20.8864 9.70862 20.2919 9.69064 19.5535 9.69064C17.1761 9.69064 16.2574 10.5914 16.2574 12.9328V14.5H20.9937L20.1799 18.9312H16.2574V28.8939C23.4372 28.0268 29.0006 21.9136 29.0006 14.5C29 6.49194 22.5081 0 14.5 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_400">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3_402)">
                    <path
                      d="M26.8533 0H2.14102C0.957227 0 0 0.93457 0 2.09004V26.9043C0 28.0598 0.957227 29 2.14102 29H26.8533C28.0371 29 29 28.0598 29 26.91V2.09004C29 0.93457 28.0371 0 26.8533 0ZM8.60371 24.7123H4.29902V10.8693H8.60371V24.7123ZM6.45137 8.9832C5.06934 8.9832 3.95352 7.86738 3.95352 6.49102C3.95352 5.11465 5.06934 3.99883 6.45137 3.99883C7.82773 3.99883 8.94355 5.11465 8.94355 6.49102C8.94355 7.86172 7.82773 8.9832 6.45137 8.9832ZM24.7123 24.7123H20.4133V17.9834C20.4133 16.3805 20.385 14.3131 18.176 14.3131C15.9387 14.3131 15.5988 16.0633 15.5988 17.8701V24.7123H11.3055V10.8693H15.4289V12.7611H15.4855C16.0576 11.6736 17.4623 10.5238 19.5523 10.5238C23.908 10.5238 24.7123 13.3898 24.7123 17.1168V24.7123Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_402">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path
                    d="M22.1442 2.30078H26.2205L17.3151 12.4792L27.7916 26.3297H19.5886L13.1636 17.9294L5.812 26.3297H1.73325L11.2585 15.4427L1.20831 2.30078H9.61965L15.4272 9.97893L22.1442 2.30078ZM20.7136 23.8898H22.9723L8.39233 4.61248H5.9685L20.7136 23.8898Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" className="mr-4 cursor-pointer">
                <img
                  src="/assets/images/brand.png"
                  alt="Brand RH"
                  className="w-full max-w-[140px] rounded-md "
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/assets/images/phone-call.png"
                  width={38}
                  height={38}
                  className="w-7 h-7 2xl:w-[38px] 2xl:h-[38px]"
                />
                <div>
                  <span className="text-sm md:text-[14px] xl:text-base 2xl:text-[18px] text-dark block">
                    Quick Contact
                  </span>
                  <Link
                    href={`tel:+1 (646) 683-4612`}
                    className="text-xs md:text-sm 2xl:text-[25px] font-bold text-dark"
                  >
                    +1 (646) 683-4612
                  </Link>
                </div>
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
