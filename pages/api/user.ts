import { withIronSessionApiRoute } from "iron-session/next";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../lib/db";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.session.userId == null) {
      res.status(401).json({ message: "Not logged in" });
      return;
    } else {
      const userId = req.query.userId as string ?? req.session.userId;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const user = docSnap.data();
        res.status(200).json(user);
        return;
      } else {
        res.status(404).json({ message: "User not found" });
        return;
      }
    }
  },
  sessionOptions,
);
