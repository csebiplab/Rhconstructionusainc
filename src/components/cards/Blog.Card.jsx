"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { BiCommentDots } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

export function BlogCard({ data }) {
  return (
    <Link href="/" className="block">
      <Card className="overflow-hidden rounded-md hover:shadow-lg shadow-black/20 duration-150">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={data?.image}
            alt="Blog image"
            className="h-64 w-full object-cover object-center"
          />
        </CardHeader>
        <CardBody>
          <div className="flex gap-2 flex-wrap items-center mb-2">
            <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
              <HiUserCircle className="" />
              <span className="text-[10px]">Admin</span>
            </span>
            <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
              <BsCalendar2Date className="" />
              <span className="text-[10px]">{data.date}</span>
            </span>
            <span className="inline-flex font-medium gap-1 py-1 px-2 justify-center items-center">
              <BiCommentDots className="" />
              <span className="text-[10px]">{`${
                data.comments || "No"
              } comments`}</span>
            </span>
          </div>

          <Typography variant="h5" color="blue-gray">
            {data.title}
          </Typography>
          <Typography variant="small" color="gray" className="mt-3 font-normal">
            {data.short_story}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
