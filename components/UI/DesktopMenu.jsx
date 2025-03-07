"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const hasSubMenu = menu?.subMenus?.length;

  return (
    <motion.li
      className={`group/link ${(menu.menu === "services" || menu.menu === "resources") && "relative"} font-medium tracking-wide`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={menu.menu}
    >
      <div
        className={`flex items-center gap-1 text-sm xl:text-[18px] cursor-pointer px-2 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-medium`}
      >
        {hasSubMenu ? (
          <>
            <h4 className="capitalize">{menu.menu}</h4>
            <IoIosArrowDown
              className={`mt-[0.6px] group-hover/link:rotate-180 duration-200 text-black`}
            />
          </>
        ) : (
          <Link
            href={menu.link || "#"}
            className="flex capitalize items-center gap-1"
          >
            <span>{menu.menu}</span>
          </Link>
        )}
      </div>

      <AnimatePresence>
        {isHover && hasSubMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute z-50 mt-2 top-10 bg-white text-black shadow-xl rounded-lg overflow-hidden w-max -left-32 xl:-left-32 border border-text backdrop-blur-md`}
          >
            {menu.menu === "services" || menu.menu === "resources" ? (
              // Card-based layout for Expert & Financial Consultation
              <div className="px-3.5 py-4 w-full grid grid-cols-2 gap-10 place-content-center place-items-center">
                <Image
                  alt="image"
                  width={180}
                  height={200}
                  src={"/menu.svg"}
                  className="object-contain object-center pl-5"
                />
                <div className="relative sm:before:top-5 md:before:-left-4 lg:before:-left-8 xl:before:-left-6 sm:before:h-40 sm:before:w-0.5 sm:before:bg-[#E4E4E4] sm:before:absolute">
                  {menu.subMenus?.map((submenu, i) => (
                    <div key={i} className="py-2 rounded-lg transition">
                      <Link
                        href={submenu.link || "#"}
                        className="flex items-center gap-2 rounded-md p-3 hover:bg-text/50 transition"
                      >
                        {/* <span className="mr-2">{submenu.icon}</span> */}
                        <span className="font-semibold text-base text-primary">
                          {submenu.menu}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Grid-based layout for all other submenus
              // <div className="">
              <div className={`px-6 py-10 w-full`}>
                {menu.subMenus?.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      href={item.link}
                      className="text-lg font-semibold pb-2.5"
                    >
                      {item.menu}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
