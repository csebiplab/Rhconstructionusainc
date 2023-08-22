import API from "@/config/API.config";
import firebase_app from "@/config/firebase";
import { errorMessage } from "@/libs/utils";
import { Spinner } from "@material-tailwind/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

async function fetchIsAdmin(accessToken) {
  try {
    const result = await API.get("/admin/is-admin", {
      headers: {
        Authorization: accessToken,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Failed",
      text: errorMessage(error),
    });
    throw errorMessage(error);
  }
}

export const AuthContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    (async () => {
        
        let is_admin_route= !pathname.includes("/signin") && !pathname.includes("/signup");
      try {
        setLoading(true);
        if(!is_admin_route) throw "only-check-in-admin-route";
        await fetchIsAdmin(user?.accessToken);
        setIsAdmin(true);
      } catch (error) {
        setIsAdmin(false);
        setLoading(false);
        if (is_admin_route)
          router.push("/admin/signin");
      } finally {
        setLoading(false);
      }
    })();
  }, [user]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center ">
        <Spinner />
      </div>
    );
  }
  return (
    <AuthContext.Provider value={{ user, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
