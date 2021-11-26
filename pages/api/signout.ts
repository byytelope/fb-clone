import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.method === "POST") {
      if (req.session) {
        req.session.destroy();
      }

      res.status(200).json({ message: "User logged out" });
      return;
    } else {
      res.status(500).json({ message: "Invalid route" });
      return;
    }
  },
  sessionOptions,
);
