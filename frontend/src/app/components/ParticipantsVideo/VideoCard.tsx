"use client";
import PlayButton from "@/app/assets/images/PlayButton.svg";
import PauseButton from "@/app/assets/images/PauseButton.svg";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

export default function VideoCard() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (control: string) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative md:w-[22.625rem] w-[19.8125rem] md:h-[30rem] h-[25rem] ">
      <div className="bottom-3 left-1 z-[5] rounded-lg h-full w-92 absolute">
        <video
          className="border rounded-xl w-full h-full object-cover"
          ref={videoRef}
          src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`}
        ></video>

        <div className="absolute top-[40%] left-[35%] z-[6] w-64 md:w-96">
          <div className="controls">
            {playing ? (
              <Image
                src={PauseButton}
                alt="Play_button"
                className=""
                onClick={() => videoHandler("pause")}
              />
            ) : (
              <Image
                src={PlayButton}
                alt="Play_button"
                className=""
                onClick={() => videoHandler("play")}
              />
            )}
          </div>
        </div>
      </div>
      <div className="absolute h-[25rem] md:h-[29.5rem] md:w-[21.56rem] w-[19.6125rem] bg-saffron rounded-lg flex"></div>
    </div>
  );
}
