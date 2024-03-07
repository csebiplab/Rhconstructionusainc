import { cn } from "@/lib/utils";
import DynamicDashboardHeaderTitle from "../ui/DynamicDashboardHeader";
import UserAccountNav from "../ui/UserAccountNav";

export default async function DashboardHeader({ className, ...props }) {
  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 px-5 py-4 bg-gray-800 gap-2 backdrop-blur-sm flex flex-row justify-between items-center",
        className
      )}
      {...props}
    >
      <DynamicDashboardHeaderTitle />
      <UserAccountNav />
    </header>
  );
}
