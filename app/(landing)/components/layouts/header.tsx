"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-7 px-4 md:px-0">
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />
        <nav className="hidden md:flex gap-44 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        <div className="flex items-center gap-10">
          <FiSearch size={24} />
          <div className="relative">
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
              3
            </div>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 py-4 px-4 font-medium">
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Category
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Explore Products
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
