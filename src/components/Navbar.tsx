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
              description="Website Made for IT learning Center"
            />
            <ProductItem
              title="Pokemon Character"
              href="https://dazzling-ganache-eaf57d.netlify.app/"
              src={Pokemon}
              description="Website for Pokemon Characters and can see it's characteristics"
            />
            <ProductItem
              title="Restaurant Page"
              href="https://reliable-raindrop-881b63.netlify.app/"
              src={Restaurant}
              description="Simple Restaurant Website"
            />
            <ProductItem
              title="Ecommerce"
              href="https://visionary-granita-1124ba.netlify.app/"
              src={Ecommerce}
              description="Simple Website for ecommerce"
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
