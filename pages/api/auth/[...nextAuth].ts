import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../../utils/firebaseUtils";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      id: "credentialsProvider",
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const q = query(
          collection(db, "users"),
          where("email", "==", credentials!.email),
        );
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          throw new Error("No user found with email");
        }

        const docs = snapshot.docs;
        const docData = docs[0].data();
        const passCheck = compare(credentials!.password, docData.password);

        if (!passCheck) {
          throw new Error("Incorrect password");
        }

        return { email: docData.email };
      },
    }),
  ],
});
