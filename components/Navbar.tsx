import FbLogo from "./FbLogo";

export default function Navbar() {
  return (
    <div className="fixed w-full flex bg-white h-14 justify-between items-center px-4 shadow">
      <div>
        <FbLogo />
      </div>
      <div>Nav</div>
      <div>Profile</div>
    </div>
  );
}
