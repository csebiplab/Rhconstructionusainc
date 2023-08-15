import { AdminHeader } from "./Header";

export default function admin_layout({ children }) {
  return (
    <>
      <AdminHeader/>
      {children}
    </>
  );
}
