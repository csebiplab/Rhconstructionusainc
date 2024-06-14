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

const our_service_menu_items = {
  interior: [
    { title: "Bathroom Remodeling", route: "/bathroom-remodeling" },
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
              className="flex items-center gap-2 rounded-full py-1  pr-4 font-normal  text-sm lg:text-base 5xl:text-[17px]   text-black"
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
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
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
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Customer Reviews
        </ListItem>
      </Typography>
      {/* <Typography
        as={Link}
        href="/bathroom-remodeling"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Bathroom Renovation
        </ListItem>
      </Typography> */}
      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blogs
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/our-projects"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Projects
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]   text-black"
      >
        <ListItem className="flex items-center rounded-full hover:bg-primary px-1 lg:px-4 xl:px-5 2xl:px-6">
          Contact
        </ListItem>
      </Typography>
    </List>
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
            <a
              href="/"
              className="text-white text-sm font-medium hidden md:block"
            >
              Best Construction Company Brooklyn
            </a>
            <div className="flex items-center gap-x-3 lg:gap-x-9">
              <a
                href={`mailto:${constants.mail}`}
                className="text-sm flex gap-2 items-center p-1 rounded-md hover:bg-primary/10 hover:text-blue-700"
              >
                <Image
                  src="/assets/images/mail.png"
                  width={22}
                  height={17}
                  className="w-[22px] h-[17px]"
                  alt="mail"
                />
                {constants.mail}
              </a>

              <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-9">
                <Image
                  src="/assets/socials/facebook.png"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  alt="facebook"
                />
                <Image
                  src="/assets/socials/x.png"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  alt="x"
                />
                <Image
                  src="/assets/socials/insta.png"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  alt="instagram"
                />
                <Image
                  src="/assets/socials/in.png"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  alt="linkedin"
                />
                <Image
                  src="/assets/socials/google.png"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  alt="google"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" className="mr-4 cursor-pointer">
                <Image
                  src="/assets/images/brand.png"
                  alt="Brand RH"
                  width={157}
                  height={68}
                  className="w-full max-w-[140px] rounded-md "
                />
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/assets/images/phone-call.png"
                  width={37}
                  height={37}
                  className="w-7 h-7 2xl:w-[37px] 2xl:h-[37px]"
                />
                <div>
                  <span className="text-sm  text-dark block">
                    Quick Contact
                  </span>
                  <Link
                    href={`tel:+1 (646) 683-4612`}
                    className="text-sm font-bold text-dark"
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
      {/* <BottomMenu /> */}
    </>
  );
}
