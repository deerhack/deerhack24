"use client";

import Link from "next/link";
import { cabinetBlack, cabinetBold, cabinetExtraBold } from "./utils/fonts";
import { redirect } from "next/navigation";
import GoBackToHome from "./components/GoBack/GoBackToHome";

export default function NotFound() {
  return (
    <div
      className={` bg-[url(./assets/images/Mobile_404.svg)] md:bg-[url(./assets/images/Tablet_404.svg)] lg:bg-[url(./assets/images/404_Desktop_Upscaled.svg)] bg-no-repeat bg-cover bg-top h-screen flex justify-center`}
    >
      <div
        className={`bg-mutedColor rounded-[0.65rem] w-[80vw] md:w-[50vw] max-w-[1080px] h-fit lg:h-[24vh] flex flex-col gap-4 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-6 mx-auto absolute top-[60%]`}
      >
        <p
          className={`${cabinetExtraBold.className} text-primary-gradient-color-reverse w-fit text-5xl text-center`}
        >
          Nobody Seems to be here!
        </p>
        <GoBackToHome />
      </div>
    </div>
  );
}

