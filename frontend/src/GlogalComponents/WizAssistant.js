import "bootstrap/dist/css/bootstrap.css";
import styles from "./assistant.module.css";
import chat from "./chat_8272973.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WizAssisant() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        className={styles.assistantDiv}
        whileHover={
          isOpen
            ? "nothing"
            : {
                scale: 1.2,
                transition: { duration: 0.5 },
                cursor: "pointer",
              }
        }
        whileTap={isOpen ? "nothing" : { scale: 0.9 }}
      >
        {isOpen ? (
          <motion.div className={styles.chatDiv + " " + styles.text}>
            <motion.div className={"container-fluid position-relative "}>
              <span
                className={styles.Exit}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                X
              </span>
              Magic Assistant
            </motion.div>
            <motion.div className={styles.msgDiv}></motion.div>
            <motion.div>
              <motion.input></motion.input>
            </motion.div>
          </motion.div>
        ) : (
          <Image
            src={chat}
            className={styles.assistant}
            alt="chat"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </motion.div>
    </>
  );
}
