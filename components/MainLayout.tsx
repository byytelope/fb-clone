import { ReactNode } from "react";
import CommonHead from "./CommonHead";
import Navbar from "./Navbar/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col">
      <CommonHead themeColor="#FFFFFF" />
      <div className="mb-14">
        <Navbar />
      </div>
      {children}
    </main>
  );
}
