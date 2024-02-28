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

    <div className = "relative w-[22.625rem] ">
      <div className="bottom-3 left-2 z-[5] rounded-lg h-full w-96 overflow-hidden ">
        <video
          className="border rounded-xl w-full h-full object-cover"
          ref={videoRef}
          src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`}
        ></video>

        <div className="absolute top-[40%] left-[35%] z-[6] w-96">
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
    <div className="absolute h-[33.625rem] sm:h-[33.625rem] w-[22.56rem] bg-saffron rounded-lg flex"></div>
    </div>
  );
}