"use client";
import Square from "@/app/components/Background/Square";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import Project from "./components/Project";

export default function Projects() {


  return (
    <>
      <div className="relative z-10 h-full">
        <Square
          column="10"
          row="10"
          transparentEffectDirection="bottomToTop"
          blockColor="#161616"
        />

        <Header />
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="container mx-auto w-11/12 sm:w-9/12 my-16 pb-4 pt-12">
          <div>
            <h2 className="text-5xl font-semibold"> Projelerim </h2>
            <p className="text-[#a7a7a7] sm:w-3/5 mt-1"> Bugüne Kadar Yaptığım Bazı Projelerim. </p>
          </div>

<motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836125392011387/Wizyx_Code_1.gif?ex=66b8c931&is=66b777b1&hm=7f683e8ddfdd88c7bb9f0ae262d20ef6b1aab51da0b535a9ae959455592a3a65&"
   name="Wizyx BOT"
   githubLink="https://github.com/WizyX77/WizyxBOT"
   websiteLink="https://wizyxbot.vercel.app"
   description="Moderation Bot with the Most Advanced Systems of Your Discord Server!"
   tags={["Discord Bot", "Support", "Website", "Moderasyon"]}
  />
  </motion.div>

<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836135621918780/Wizyx_Code_2.gif?ex=66b8c934&is=66b777b4&hm=a53c79e4231b06a29639cedbaca0df69480c27c586b4ee9dcb8e166e4d260907&"
   name="Wizyx FUN"
   githubLink="https://github.com/WizyX77/WizyxFUN"
   websiteLink="https://wizyxfun.vercel.app"
   description="Entertainment Bot with the Most Advanced Systems of Your Discord Server!"
   tags={["Discord Bot", "Support", "Website", "Eğlence"]}
  />
  </motion.div>

<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836150998372392/Wizyx_Code_3.gif?ex=66b8c937&is=66b777b7&hm=b5e6dd9a89eb6c7115bf12e6046954b60d4646095e9040944c3b689a9f0d69c6&"
   name="Wizyx Code"
   githubLink="https://github.com/WizyX77"
   websiteLink="https://discord.gg/wizyx"
   description="A Place Where People Can Share Code and Benefit from Shared Code!"
   tags={["Destek", "Paylaşım", "Website", "Kod Paylaşım"]}
  />
  </motion.div>

<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836170430451772/Wizyx_Code_4.gif?ex=66b8c93c&is=66b777bc&hm=26c660efe6acd57262caf72fe226dbfc6d0293869ce4c1363fa889b3ced0b87a&"
   name="HERE ORGANİZATİON"
   githubLink="https://github.com/WizyX77"
   websiteLink="https://discord.gg/hereorg"
   description="Her Gün Düzenli Olarak Pubg Mobile Scrim ve Lig Maçları Olan Bir Yer. "
   tags={["Pubg Mobile", "Scrim", "Turnuva", "Lig", "Oyun"]}
  />
  </motion.div>

<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836179523829780/Wizyx_Code_5.gif?ex=66b8c93e&is=66b777be&hm=5985c840ad982011400da9b70d8c2486bb44558da536fc31bf53958b27f0a7ac&"
   name="S2G HERE"
   githubLink="https://github.com/WizyX77/S2GHere"
   websiteLink="https://s2ghere.vercel.app"
   description="S2G Here / S2G Here Academy Pubg Mobile Klanına Yaptığım Bir Website."
   tags={["Pubg Mobile", "Sohbet", "Yayın", "Oyun", "Website"]}
  />
  </motion.div>

<motion.div variants={item}>
 <Project
   imgUrl="https://cdn.discordapp.com/attachments/1271835757375393876/1271836192253673483/Wizyx_Code_6.gif?ex=66b8c941&is=66b777c1&hm=a55a219a50cd2edbd939e67adf59e01580613551b5dbfb1d564c34672291cd11&"
   name="ROSE HERE"
   githubLink="https://github.com/WizyX77/RoseHere"
   websiteLink="https://rosehere.vercel.app"
   description="Tanınmış (İnfluencer) İçerik Üreticisi Olan, Gül Balcan'a Yaptığım Bir Website."
   tags={["Pubg Mobile", "Sohbet", "Yayın", "Oyun", "Website"]}
  />
  </motion.div>
 </motion.div>
</motion.div>
 <Footer />
   </div>
  </>
 );
}
