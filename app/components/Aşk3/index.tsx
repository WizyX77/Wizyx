"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Aşk3() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto bg-gradient-to-r from-[#151515] to-[#161616] w-11/12 sm:w-9/12 my-16 py-4 px-2 sm:px-8 border border-[#262626] rounded-xl"
    >
      { }
      <div className="mt-8 flex justify-center">
        <iframe
          src="https://open.spotify.com/embed/playlist/0COvgfBpIRsqIYejHerUxx"
          width="100%"
          height="600" 
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Playlist"
          className="rounded-lg"
        ></iframe>
      </div>
    </motion.div>
  );
  
}
