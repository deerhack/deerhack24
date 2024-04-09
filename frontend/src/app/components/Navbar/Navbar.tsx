"use client";
import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import NavLinks from "./Navlinks";
import { cabinetBold, cabinetMedium, satoshiBlack } from "@/app/utils/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import menuSVG from "@/app/assets/icons/menu.svg";
import crossSVG from "@/app/assets/icons/cross.svg";
import Counter from "../counter/Counter";
import Counter_wrapper from "../counter/Counter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const resourceRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResourceClick = () => {
    setIsResourceOpen(!isResourceOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const currentRef = resourceRef.current as HTMLElement | null;
    if (currentRef && !currentRef.contains(event.target as Node)) {
      setIsResourceOpen(false);
    }
  };

  useEffect(() => {
    if (isResourceOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isResourceOpen]);

  return (
    <div className="relative">
      <header className="fixed bg-violet/50 w-screen isolate z-10 mx-auto shadow-lg backdrop-blur-lg">
        <nav
          className={`flex w-screen flex-row justify-${
            isMenuOpen ? "" : "evenly"
          } lg:px-28 gap-x-28 gap-y-8 py-4 items-start ${
            isMenuOpen ? "flex-col bg-dark-purple  h-screen " : "flex-row"
          }`}
        >
          <div className="flex justify-between items-start w-full lg:w-auto px-4 ">
            <div>
              <a href="/">
                <DeerhackLogo width="50" height="50" />
              </a>
            </div>
            <div>
              <button
                onClick={toggleMenu}
                className="lg:hidden mt-2 md:mt-2 lg:right-0"
              >
                {isMenuOpen ? (
                  <Image
                    src={crossSVG}
                    alt="Close Menu"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image src={menuSVG} alt="Open Menu" width={40} height={40} />
                )}
              </button>
            </div>
          </div>

          <div
            className={`lg:flex lg:items-start md:w-[800px] h-[55px] lg:h-auto ${
              isMenuOpen ? cabinetMedium.className + " block " : "hidden"
            }`}
          >
            <div className="md:flex px-4">
              <Counter_wrapper />
            </div>
          </div>

          <div
            className={`lg:flex ${
              cabinetBold.className
            } lg:flex-row lg:items-between mt-4 lg:gap-10  ${
              isMenuOpen
                ? cabinetMedium.className +
                  " flex-col mt-5 text-2xl space-y-5 px-4"
                : "hidden"
            } font-[16px] text-magnolia`}
          >
            <Link
              href="/schedule"
              className="hover:text-secondary block lg:inline-block "
            >
              Schedule
            </Link>
            <Link
              href="/winners"
              className="hover:text-secondary block lg:inline-block "
            >
              Winners
            </Link>

            <div className="flex flex-col" ref={resourceRef}>
              <span
                className=" hover:text-secondary block lg:inline-block cursor-pointer "
                onClick={handleResourceClick}
              >
                Resources
              </span>
              {isResourceOpen ? (
                <div
                  className={`lg:hidden block text-xl ${cabinetMedium.className}`}
                >
                  <ul>
                    <li className="pt-4 px-6 mb-4">
                      <a
                        href="/resources/selection_criteria.pdf"
                        className="hover:text-secondary"
                        target="_blank"
                      >
                        Selection Criteria
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div
            className={`lg:flex lg:items-between ${
              isMenuOpen ? cabinetMedium.className + " block px-4" : "hidden"
            }`}
          >
            <Link href="https://deerhack24.devfolio.co" target="_blank">
              <button
                className={` ${satoshiBlack.className} font-[20px] md:text-md bg-secondary text-dark-purple text-xl p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}
              >
                Register Now
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <div
        className={`${
          isResourceOpen ? "opacity-1" : "opacity-0 duration-500"
        } fixed bg-violet/50  backdrop-blur-md ${cabinetMedium.className} shadow-lg transition-all ease-in-out duration-500 z-20 text-white invisible rounded-br-xl rounded-bl-xl lg:visible lg:right-[15%] border-sm xl:right-[13.5%] xl2:right-[12.5%] xl3:right-[12%] xl4:right-[13.5vw]  xl5:right-[16.5vw] top-20 mt-[0.25rem]`}
      >
        <ul className="w-[18.6rem] mt-0.5 text-left list-none">
          {/* <li className="p-5 mb-2 "><a href= "#" className= "hover:text-secondary" target="_blank">Judging Criteria</a></li> */}
          <li className="pt-4 px-6 mb-4">
            <a
              href="/resources/selection_criteria.pdf"
              className="hover:text-secondary"
              target="_blank"
            >
              Selection Criteria
            </a>
          </li>
          {/* <li className="pt-4 px-6 mb-4"><a href= "#" className= "hover:text-secondary" target="_blank">Participation Guidelines</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
