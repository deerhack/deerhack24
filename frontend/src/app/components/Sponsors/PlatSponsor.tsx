import UserEntity from "@/app/SponsorTypes/userentity";
import { ReactElement } from "react";
import Image from "next/image";
export default function PlatinumSponsor ({svg}:{svg?:ReactElement}):ReactElement {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-[15rem]">
      <div className=" inset-0 flex flex-row justify-center items-center">
        <div className=" mb-[2rem] mx-[1rem] w-[12rem] h-[12rem] rounded-full bg-[#241A4A] flex flex-row justify-center items-center">
          {svg}
        </div>
      </div>
    </div>
  );
}

