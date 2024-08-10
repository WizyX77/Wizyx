import Card from "@/app/components/Contact/components/Card";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto my-16 w-11/12 py-4 sm:w-9/12"
    >
      <h2 className="text-3xl"> Medya  </h2>
      <p className="text-[#a7a7a7]"> Tüm Sosyal Medya Hesaplarım.</p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <motion.div variants={item}>
          <Card
            cardName="Github"
            cardType="github"
            cardUrl={`https://github.com/WizyX77`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="Discord"
            cardType="discord"
            cardUrl={`https://discord.com/users/972557059860099082`}
          />
        </motion.div>


        <motion.div variants={item}>
          <Card
            cardName="TikTok"
            cardType="tiktok"
            cardUrl={`https://www.tiktok.com/@wizyx77`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="YouTube"
            cardType="youtube"
            cardUrl={`https://www.youtube.com/@S2GWizyxNP31`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
