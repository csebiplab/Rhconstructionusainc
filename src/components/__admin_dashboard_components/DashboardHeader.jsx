import { cn } from "@/lib/utils";
import DynamicDashboardHeaderTitle from "../ui/DynamicDashboardHeader";
import UserAccountNav from "../ui/UserAccountNav";
import getCurrentUser from "@/lib/session";

export default async function DashboardHeader({ className, ...props }) {
  const user = await getCurrentUser();

  // console.log(user)

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 px-5 py-4 bg-gray-800 gap-2 backdrop-blur-sm flex flex-row justify-between items-center",
        className
      )}
      {...props}
    >
      <DynamicDashboardHeaderTitle />
      <UserAccountNav user={user} />
    </header>
  );
}
