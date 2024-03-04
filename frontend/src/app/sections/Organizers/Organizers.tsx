import { ReactElement } from "react";
import getData from "./fetchTeams";
import Team from "@/app/types/team";
import Image from "next/image";
import UserCard from "@/app/components/core/UserCard";
import { cabinetBold, cabinetExtraBold, cabinetBlack } from "@/app/utils/fonts";
import VolunteerSection from "../Volunteers/VolunteerSection";

export default async function Organizers() {
  const teams: Array<Team> = await getData();

  return (
    <div className="pb-9">
      <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
      >
        Meet The Organizers
      </h1>
      {teams.map((team: Team, key = team.id) => (
        <div className="text-white" key={key}>
          <h1
            className={`headings ${cabinetExtraBold.className} text-3xl mb-10`}
          >
            {team.name}
          </h1>
          <div>
            {team.organizers.length === 2 ? (
              <div className="flex justify-center flex-wrap items-center gap-x-6 mb-20">
                {team.organizers.map((organizer, index) => (
                  <UserCard
                    key={index}
                    image={organizer.image}
                    linkedin_url={organizer.linkedin_url}
                    name={organizer.name}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center align-middle gap-x-6 gap-y-3">
                {team.organizers.map((organizer, index) =>
                  index == 0 ? (
                    <div className="w-full" key={index}>
                      <UserCard
                        image={organizer.image}
                        linkedin_url={organizer.linkedin_url}
                        name={organizer.name}
                      />
                    </div>
                  ) : (
                    <UserCard
                      key={index}
                      image={organizer.image}
                      linkedin_url={organizer.linkedin_url}
                      name={organizer.name}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      <div
        key="volunteers"
        className="flex justify-center items-center flex-col mt-10"
      >
        <h1 className={`headings ${cabinetExtraBold.className} text-4xl`}>
          Volunteers
        </h1>
        <VolunteerSection />
      </div>
    </div>
  );
}
