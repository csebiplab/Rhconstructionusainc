"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export function OurCommitmentCard({ commitment }) {
  const { title, text, icon } = commitment ?? {};

  return (
    <Card className="w-full shadow-none">
      <CardBody>
        <div className="flex justify-center">
          <Image
            src={icon}
            alt="commitmen ticon"
            width={100}
            height={100}
            className="w-24 h-24"
          />
        </div>
        <Typography variant="h5" color="blue-gray" className="my-6">
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
    </Card>
  );
}
