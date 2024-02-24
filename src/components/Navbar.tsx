"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Gurucool from "@/assets/Gurucool.png";
import Restaurant from "@/assets/Restauranr.png";
import Pokemon from "@/assets/Pokemon.png";
import Ecommerce from "@/assets/E-commerce.png";
import Project from "@/assets/projects.png";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#Home"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="About"
          ></MenuItem>
        </Link>{" "}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="All Projects"
              href="#projects"
              src={Project}
              description="All projects."
            />
            <ProductItem
              title="Gurucool"
              href="https://gurucool.io"
              src={Gurucool}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Pokemon Character"
              href="https://tailwindmasterkit.com"
              src={Pokemon}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Restaurant Page"
              href="https://gomoonbeam.com"
              src={Restaurant}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Ecommerce"
              href="https://userogue.com"
              src={Ecommerce}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <Link href={"#contact"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
