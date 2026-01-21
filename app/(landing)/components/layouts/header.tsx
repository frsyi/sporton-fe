"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/50">
      <div className="container mx-auto flex items-center justify-between py-7 px-4 md:px-0">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>
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

        <div className="relative flex items-center gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            {items.length ? (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
                {items.length}
              </div>
            ) : (
              <></>
            )}
          </button>

          {isCartPopupOpen && <CartPopup />}

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
