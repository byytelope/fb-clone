import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    const userId = req.session.userId;

    if (userId == null) {
      res.status(401).json({ message: "Not logged in" });
      return;
    } else {
      res.status(200).json({ message: "Success", userId });
      return;
    }
  },
  sessionOptions,
);
