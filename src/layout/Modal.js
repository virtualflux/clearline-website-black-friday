import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { Close } from "../../public/assets/svgs";
import Image from "next/image";

const CLearlineModal = ({ isOpen, onClose, children, className }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-y-auto outline-0 w-3/4 mt-[15%] lg:mt-[5%] mx-auto p-4 md:p-6 px-4 lg:px-7 border-0 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-0"
      >
        <div className="flex justify-end">
          <Image
            src={Close}
            alt="close modal"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className={`overflow-y-auto max-h-[500px] ${className}`}>
          {children}
        </div>
      </motion.div>
    </Modal>
  );
};
export default CLearlineModal;
