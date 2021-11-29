import { ReactNode } from "react";
import CommonHead from "./CommonHead";
import BottomNavbar from "./Navbar/BottomNavbar";
import Navbar from "./Navbar/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col">
      <CommonHead themeColor="#FFFFFF" />
      <div className="mb-14">
        <Navbar />
      </div>
      {children}
      <div className="mt-14">
        <BottomNavbar />
      </div>
    </main>
  );
}
