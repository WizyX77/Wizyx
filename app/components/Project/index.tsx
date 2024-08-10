import Card from "@/app/components/Project/components/Card";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto my-16 w-11/12 py-4 sm:w-9/12"
    >
      <h2 className="text-3xl"> Wizyx Kalitesi  </h2>
      <p className="text-[#a7a7a7]"> Pubg Mobile, Scrim ve Lig Sunucuları. </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <motion.div variants={item}>
          <Card
            cardName="Wizyx"
            cardType="discord"
            cardUrl={`https://discord.gg/wizyx`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="S2G Here Academy"
            cardType="games"
            cardUrl={`https://discord.gg/s2ghere`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="Here Organizasyon"
            cardType="games"
            cardUrl={`https://discord.gg/hereorg`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="S2G Here"
            cardType="games"
            cardUrl={`https://discord.gg/s2g`}
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
