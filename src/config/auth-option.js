import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import firebase from "./firebase";
const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // Authenticate using Firebase
          const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(
              credentials.username,
              credentials.password
            );

          // If authentication is successful, return user info
          if (userCredential.user) {
            return Promise.resolve(userCredential?.user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // Other NextAuth.js configuration options
};
export default authOption;
