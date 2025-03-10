"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const ThankyouModal = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                    className="fixed inset-0 !z-[9999] grid w-full h-full p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-[#0000001A] backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-xl no-scrollbar"
                    >
                        <div className="w-full mt-5 space-y-2">
                            <Image title="thumbs up icon" src={"/thumbs-up.gif"} alt="thumbs up icon" width={65} height={65} />
                            <h3 className="text-base font-bold text-text md:text-lg">
                                You're All Set!
                            </h3>
                            <p className="text-base md:text-lg">
                                Check your inbox for access to our curated work samples.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
