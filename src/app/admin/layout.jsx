'use client';
import { AdminHeader } from "./Header";
import { AuthContextProvider } from "./provider/AuthProvider";

export default function admin_layout({ children }) {
  return (
    <AuthContextProvider>
      <AdminHeader/>
      {children}
    </AuthContextProvider>
  );
}
