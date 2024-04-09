import { cabinetMedium } from "@/app/utils/fonts";
import securityPal from "@/app/assets/images/sponsors/securityPal.svg";
import VT from "@/app/assets/images/sponsors/VT.png";

import Image from "next/image";
import Link from "next/link";

const PlatinumSponsor = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div
        className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
      >
        Platinum Sponsor
      </div>
      <div className=" flex flex-wrap md:flex-row flex-col gap-20 justify-center items-center ">
        <div className=" flex flex-row  flex-wrap justify-center items-center gap-20">
          <div
            key="platinumSponsor"
            className="flex flex-row  justify-center items-center w-[13rem] md:w-[20rem] h-[11rem]  rounded-full mb-10"
          >
            <Link href="https://www.securitypalhq.com" target="_blank">
              <Image
                src={securityPal}
                alt="sercurityPal logo"
                width={100}
                height={100}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
          <div
            key="platinumSponsor"
            className="flex flex-row  justify-center items-center w-[13rem] md:w-[20rem] h-[11rem]  rounded-full mb-10"
          >
            <Link href="https://www.vianet.com.np" target="_blank">
              <Image
                src={VT}
                alt="Vianet Logo"
                width={100}
                height={100}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinumSponsor;
