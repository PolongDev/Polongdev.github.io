import Word from "../components/wordbyword";
import { motion } from "framer-motion";
import { pages_interface } from "../utils/interfaces";

export default function Hero(props: pages_interface) {
  const heroButton = (id: string) => {
    const _ = document.getElementById(id);
    if (_) {
      _.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      id={props.id}
      className={` transition ease delay-150 ${props.className}`}
    >
      <Word>Hello, I am Kenneth_G._Perez</Word>
      <motion.h1
        initial={{
          opacity: 0,
          marginTop: "150px",
          marginBottom: "-150px",
        }}
        animate={{
          opacity: 1,
          marginTop: 0,
          marginBottom: 0,
        }}
        transition={{
          delay: 4 / 5,
        }}
        className="text-xs lg:text-lg"
      >
        A student of Mangusu ng Lungsod ng Zamboanga City
      </motion.h1>
      <div className="flex flex-row justify-evenly gap-10 mt-4">
        <motion.button
          initial={{
            opacity: 0,
            marginLeft: "-150px",
            marginRight: "150px",
          }}
          animate={{
            opacity: 1,
            marginLeft: 0,
            marginRight: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="px-2 border-2 dark:border-white border-black border-solid rounded-full text-sm"
          onClick={() => {
            heroButton("contact");
          }}
        >
          Contact me
        </motion.button>
      </div>
    </div>
  );
}