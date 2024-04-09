import { redirect } from "next/navigation";
import { cabinetBlack, cabinetBold } from "../utils/fonts";

export default async function Page() {
  const response = await fetch(
    "https://api.devfolio.co/api/hackathons/deerhack24",
    {
      cache: "no-store",
    },
  );
  if (response.status != 200) {
    throw redirect("/");
  }
  const data = await response.json();
  const participant_count = data.participants_count;
  const nepal_time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  return (
    <div
      className={`flex justify-center mt-[20%] headings color-white ${cabinetBlack}`}
    >
      <h1>
        Participant Count as of {nepal_time} is{" "}
        <div className="font-black">{participant_count}</div>{" "}
      </h1>
    </div>
  );
}
