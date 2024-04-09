"use client";
import DiscordHero from "@/app/assets/icons/DiscordHero";
import styles from "./styles.module.css";
import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold, cabinetMedium } from "@/fonts";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  // DEVFOLIO REQUIREMENTS
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    // document.getElementById('hero_container')?.appendChild(script);
    document.body.appendChild(script);
    return () => {
      // document.getElementById('hero_container')?.removeChild(script);
      document.body.removeChild(script);
    };
  });

  return (
    <div
      className={` ${styles.hero_background_container} flex justify-center w-full `}
      id="hero_container"
    >
      <div className="absolute gap-[27px] top-[90px] flex flex-col text-center lg:top-48">
        <p
          className={` text-3xl font-bold text-center text-secondary ${cabinetBold.className}`}
        >
          10th - 12th May
        </p>
        <MainLogo width={300} height={135} />
        <div
          className="apply-button"
          data-hackathon-slug="deerhack24"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>

        <Link
          href="https://discord.gg/2pVf97qmzd"
          className="w-fit mx-auto"
          target="_blank"
        >
          <div className="flex flex-row justify-center items-center gap-2 p-4 bg-grape rounded-lg text-white mx-auto">
            <DiscordHero />
            <p className={`text-white ${cabinetBold.className} text-base `}>
              Join Our Discord!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
