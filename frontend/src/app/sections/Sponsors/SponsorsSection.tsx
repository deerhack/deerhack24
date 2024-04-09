import Sponsor from "@/app/components/Sponsors/Sponsor";
import NetworkSVG from "@/app/assets/images/network";
import { cabinetMedium, cabinetExtraBold } from "@/app/utils/fonts";
import TitleSponsor from "@/app/components/Sponsors/TitleSponsor";
import { sponsors } from "@/app/components/Sponsors/data";
import PlatinumSponsor from "@/app/components/Sponsors/PlatinumSponsor";

export default function SponsorsSection() {
  return (
    <div>
      <div className="mb-[5rem] flex flex-col justify-center items-center">
        <div className={`mb-8 ${cabinetExtraBold.className} headings`}>
          Our Sponsors
        </div>
        <TitleSponsor image={<NetworkSVG height={100} width={100} />} />
      </div>

      <div>
        <PlatinumSponsor />
      </div>
      {sponsors.map((sponsorType) => (
        <div
          key={sponsorType.name}
          className="flex flex-col justify-center items-center mb-[5rem] gap-10"
        >
          <div
            className={`${cabinetMedium.className} text-white text-3xl font-extrabold tracking-normal`}
          >
            <div className=" text-3xl mb-2">{sponsorType.name}</div>
          </div>
          <div className=" flex flex-wrap md:flex-row flex-col gap-20 justify-center items-center ">
            {sponsorType.sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className=" flex flex-row  flex-wrap justify-center items-center "
              >
                <Sponsor
                  image={sponsor.image}
                  alt={sponsor.imageAlt}
                  url={sponsor.url}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
