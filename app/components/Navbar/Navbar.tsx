"use client";

import Logo from "../Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 w-full bg-black text-white">
      <div className="py-4">
        <div className="flex flex-row items-center justify-between gap-4 px-20">
          <Logo />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
