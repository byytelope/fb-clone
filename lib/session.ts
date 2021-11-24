import type { IronSessionOptions } from "iron-session";

export const sessionOptions: IronSessionOptions = {
  cookieName: process.env.COOKIE_NAME ?? "fbclone",
  password: process.env.IRON_PASSWORD!,
};

declare module "iron-session" {
  interface IronSessionData {
    userId?: string;
  }
}
