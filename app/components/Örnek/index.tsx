"use client";
import Square from "@/app/components/Background/Square";
import ActivityCard from "@/app/components/Card/Activity";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Repositories from "@/app/components/Repositories";
import SWR from "@/lib/swr";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Örnek() {
  const [ref, inView] = useInView();

  const { data, isLoading } = SWR(`https://api.lanyard.rest/v1/users/<USER_ID>`);
  const discordData = data?.data ?? null;

  const activities = discordData?.activities ?? [];
  const spotify = discordData?.spotify ?? null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto bg-gradient-to-r from-[#151515] to-[#161616] w-11/12 sm:w-9/12 my-16 py-4 px-2 sm:px-8 border border-[#262626] rounded-xl"
    >
      <div className="flex justify-between items-start pt-2">
        <div>
          <div>
            <h2 className="text-3xl ml-2">{!isLoading && discordData?.discord_user.global_name}</h2>
            <span className="text-[#ff2276] ml-2"> Örnek: {!isLoading && `@${discordData?.discord_user.username}`}</span>
          </div>
          <p className="mt-4 ml-2 text-[#86ec53]">
            Örnek
          </p>
        </div>

        <div className="w-96 lg:w-48 indicator flex justify-end">
          {!isLoading && (
            <>
              <Image
                src={`https://cdn.discordapp.com/avatars/${discordData?.discord_user.id}/${discordData?.discord_user.avatar}?size=1024`}
                alt="Wizyx"
                height={1024}
                width={1024}
                className="rounded-full lg:w-20 lg:h-20 h-34 w-96"
              />
              <div
                className={classNames({
                  "indicator-item indicator-bottom indicator-end transition-all duration-200 badge mb-3 mr-3": true,
                  "bg-[#747F8D]": discordData?.discord_status === "offline",
                  "bg-[#43B581]": discordData?.discord_status === "online",
                  "bg-[#FAA61A]": discordData?.discord_status === "idle",
                  "bg-[#F04747]": discordData?.discord_status === "dnd",
                })}
              ></div>
            </>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {spotify && (
          <ActivityCard
            imageUrl={`${spotify.album_art_url}`}
            name={`${spotify.song}`}
            details={`${spotify.artist}`.split(";")[0]}
            state={`${spotify.album}`}
            spotify
          />
        )}
      </div>
    </motion.div>
  );
}
