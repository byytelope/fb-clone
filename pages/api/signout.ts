import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(
  async function handler(req, res) {
    if (req.session) {
      req.session.destroy();
    }

    res.redirect("/login");
  },
  sessionOptions,
);
