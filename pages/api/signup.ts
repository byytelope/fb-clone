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
import { User } from "../../lib/interfaces";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.method === "POST") {
      const { firstName, surname, email, password, dob, gender }: User =
        req.body;
      const firstNameValid = isAlpha(firstName, "en-US", {
        ignore: " ",
      });
      const surnameValid = isAlpha(firstName, "en-US", {
        ignore: " ",
      });
      const emailValid = isEmail(email);
      const passValid = isStrongPassword(password);
      const dobValid = isDate(dob);
      const genderValid = gender === "male" || gender === "female";

      if (
        !firstNameValid || !surnameValid || !emailValid || !passValid ||
        !dobValid || !genderValid
      ) {
        const errorJson: {
          message: string;
          firstName?: string;
          surname?: string;
          email?: string;
          password?: string;
          dob?: string;
          gender?: string;
        } = { message: "Invalid data" };

        if (!firstNameValid) {
          errorJson.firstName = "Invalid first name";
        }

        if (!surnameValid) {
          errorJson.surname = "Invalid surname";
        }

        if (!emailValid) {
          errorJson.email = "Please provide a valid email";
        }

        if (!passValid) {
          errorJson.password = "Password too weak";
        }

        if (!dobValid) {
          errorJson.dob = "Please provide a valid date";
        }

        if (!genderValid) {
          errorJson.gender = "Please select a gender";
        }

        res.status(422).json(errorJson);
        return;
      }

      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        res.status(422).json({ message: "User already exists" });
        return;
      }

      const doc = addDoc(collection(db, "users"), {
        firstName,
        surname,
        username: firstName.toLowerCase() + surname.toLowerCase(),
        email,
        password: await hash(password, 12),
        dob,
        gender,
      });
      const userId = (await doc).id;
      req.session.userId = userId;
      await req.session.save();

      res.status(201).json({ message: "User registered and logged in" });
      return;
    } else {
      res.status(500).json({ message: "Invalid route" });
      return;
    }
  },
  sessionOptions,
);
