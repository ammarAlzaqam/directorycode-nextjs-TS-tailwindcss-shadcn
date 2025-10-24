"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Topbar() {
  const [open, set] = useState(false);
  return (
    <section className="absolute w-full top-0 left-0 pt-8">
      {/*//! Sidebar */}
      <Sidebar open={open} set={set} />

      {/*//! Topbar */}
      <div className="main-container flex items-center justify-between gap-5">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-[130px] sm:w-[210px] " />
        </Link>
        <button className="sticky cursor-pointer hover:opacity-80">
          <img
            onClick={() => set(true)}
            src="/assets/sidebar/menu.svg"
            alt="menu-icon"
          />
        </button>
      </div>
    </section>
  );
}
