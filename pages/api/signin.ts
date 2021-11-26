import { compare } from "bcrypt";
import { withIronSessionApiRoute } from "iron-session/next";
import isEmail from "validator/lib/isEmail";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../lib/db";
import { sessionOptions } from "../../lib/session";
import { User } from "../../lib/user";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password }: { email: string; password: string } = req.body;
      const emailValid = isEmail(email);
      console.log("Email valid: " + emailValid);
      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        res.status(404).json({ message: "User with this email not found" });
        return;
      }

      const doc = snapshot.docs[0];
      const userId = doc.id;
      const userData = doc.data() as User;
      const passValid = await compare(password, userData.password);

      if (!passValid) {
        res.status(401).json({ message: "Password incorrect" });
        return;
      }

      req.session.userId = userId;
      await req.session.save();

      res.status(200).json({ message: "User ID saved" });
      return;
    } else {
      res.status(500).json({ message: "Invalid route" });
      return;
    }
  },
  sessionOptions,
);
