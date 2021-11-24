import { hash } from "bcrypt";
import { withIronSessionApiRoute } from "iron-session/next";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import isDate from "validator/lib/isDate";
import isStrongPassword from "validator/lib/isStrongPassword";
import { db } from "../../lib/db";
import { sessionOptions } from "../../lib/session";
import { User } from "../../lib/user";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, password, dob, gender }: User = req.body;
      const nameValid = isAlpha(name, "en-US", {
        ignore: " ",
      });
      const emailValid = isEmail(email);
      const passValid = isStrongPassword(password);
      const dobValid = isDate(dob);
      const genderValid = gender === "male" || gender === "female";
      console.log("Name valid:" + nameValid);
      console.log("Email valid:" + emailValid);
      console.log("Password valid:" + passValid);
      console.log("Date valid:" + dobValid);

      if (
        nameValid && emailValid && passValid && dobValid && genderValid
      ) {
        console.log("Creds hehe");
      } else {
        console.log("Creds not hehe");
        res.status(422).json({ message: "Invalid data" });
        return;
      }

      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        console.log("User not hehe");
        res.status(422).json({ message: "User already exists" });
        return;
      }

      const doc = addDoc(collection(db, "users"), {
        name,
        username: name.replaceAll(" ", "").toLowerCase(),
        email,
        password: await hash(password, 12),
        dob,
        gender,
      });
      console.log("User hehe");
      const userId = (await doc).id;
      req.session.userId = userId;
      await req.session.save();

      res.status(201).json({ message: "User registered and logged in" });
    } else {
      res.status(500).json({ message: "Invalid route" });
    }
  },
  sessionOptions,
);
