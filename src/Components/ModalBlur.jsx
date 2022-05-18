import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function ModalBlur({ visible }) {
  const [isModalVisible, setModalVisible] = useState(visible);
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);
  return (
    <motion.div
      className="modal"
      initial={{
        scale: visible ? 1 : 0,
      }}
      animate={{
        scale: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
    ></motion.div>
  );
}
