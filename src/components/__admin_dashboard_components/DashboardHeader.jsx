import { cn } from "@/lib/utils";
import UserAccountNav from "./user-account-nav";
import getCurrentUser from "@/lib/session";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import DynamicDashboardHeaderTitle from "./ui/dynamic-dashboard-header-title";

export default async function DashboardHeader({ className, ...props }) {
  const user = (await getCurrentUser()) || {
    name: "abc",
    email: "abc",
    image: "abc",
  };

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 px-5 py-4 bg-transparent gap-2 backdrop-blur-sm flex flex-row justify-between items-center",
        className
      )}
      {...props}
    >
      <DynamicDashboardHeaderTitle />
      <ThemeToggle className="hidden max-md:flex" />
      <MobileNav />
      <UserAccountNav
        user={{
          name: user?.name,
          email: user?.email,
          image: user?.image,
        }}
      />
    </header>
  );
}
