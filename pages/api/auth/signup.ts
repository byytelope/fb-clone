import { hash } from "bcrypt";
import validator from "validator";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { db } from "../../../utils/firebaseUtils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email, newPassword, dob, gender }: {
      name: string;
      email: string;
      newPassword: string;
      dob: string;
      gender: string;
    } = req.body;

    if (
      validator.isAlpha(name) && validator.isEmail(email) &&
      validator.isStrongPassword(newPassword) && validator.isDate(dob) &&
      (gender === "male" || gender === "female")
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

    addDoc(collection(db, "users"), {
      name,
      email,
      passwordHash: await hash(newPassword, 12),
      dob,
      gender,
    });

    console.log("User hehe");
    res.status(201).json({ message: "User registered" });
  } else {
    res.status(500).json({ message: "Invalid route" });
  }
}
