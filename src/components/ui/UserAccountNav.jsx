"use client";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { getCapitalLettersOfName } from "@/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function UserAccountNav({ user }) {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none cursor-pointer" asChild>
        <Avatar>
          <AvatarImage src={user?.image} />
          <AvatarFallback>
            {user?.name && getCapitalLettersOfName(user?.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="text-md p-2 flex flex-col">
          <Link href="/dashboard/profile">
            {user?.name && getCapitalLettersOfName(user?.name)}
          </Link>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: `${baseAPIUrl}` })}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
