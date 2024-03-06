// import DashboardHeader from "@/components/__admin_dashboard_components/DashboardHeader";
import DashboardNav from "@/components/__admin_dashboard_components/DashboardNav";
import ThemeProvider from "@/components/ui/ThemeProvider";
// import DashboardShell from "@/components/__admin_dashboard_components/DashboardShell";
import "../../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex flex-row p-3 gap-3 h-screen">
          <aside
            className="max-h-screen w-60 p-5 bg-gray-3 border border-gray-2
      rounded-lg sticky top-0 max-md:hidden overflow-scroll"
          >
            <DashboardNav />
          </aside>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
          </ThemeProvider>
          {/* <main className="flex-1 bg-gray-3 border border-gray-2  rounded-lg  max-h-screen overflow-auto pb-5 ">
        <DashboardShell>
          <DashboardHeader title={""} />
          {children}
        </DashboardShell>
      </main> */}
        </div>
      </body>
    </html>
  );
}


