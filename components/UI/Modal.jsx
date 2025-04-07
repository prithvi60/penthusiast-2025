"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader";
import Image from "next/image";
import CalendlyLink from "../features/CalendlyButton";

export const WorksModal = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thank, setThank] = useState(false);
  const [pdf, setPdf] = useState("");
  const [field, setField] = useState("");

  return (
    <div>
      <div className="space-y-10">
        <h4 className="text-3xl sm:text-4xl lg:text-[60px] tracking-wider font-medium text-center">
          {title}
        </h4>
        <div
          className="flex flex-wrap justify-center items-center w-full h-full gap-8 sm:gap-10 lg:gap-16"
          onClick={() => {
            setIsOpen(true);
            setThank(false);
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg w-72 sm:w-60 lg:w-72 h-[350px] hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer bg-white overflow-hidden flex flex-col justify-between"
              onClick={() => {
                setPdf(item.pdfUrl);
                setField(item.field);
              }}
            >
              <div className="w-full h-64 flex items-center justify-center">
                <Image
                  title={item.altText}
                  src={item.imageUrl}
                  alt={item.altText}
                  width={300}
                  height={256}
                  quality={85}
                  className="object-contain object-center w-full h-full rounded-t-lg"
                />
              </div>
              <div className="flex justify-between items-center p-3.5">
                <h5 className="text-xl font-medium tracking-wider md:text-2xl">
                  {item.field}
                </h5>
                <p className="text-base md:text-lg tracking-wide">
                  {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={field}
        thank={thank}
        setThank={setThank}
        pdf={pdf}
      />
    </div>
  );
};

export const SpringModal = ({
  isOpen,
  setIsOpen,
  title,
  thank,
  setThank,
  pdf,
}) => {
  const initialFormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    try {
      const emailResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: "",
          title: title,
          pdf: pdf,
          priceTag: "",
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        throw new Error(
          `Email API Error: ${emailResponse.status} ${errorData}`
        );
      }

      const emailDataResult = await emailResponse.json();

      // Check for success in both responses
      if (emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();
        setThank(true);
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setThank(false);
          }}
          className="fixed inset-0 !z-[9999] grid w-full h-full p-6 md:p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-[#0000001A] backdrop-blur place-items-center font-Montserrat"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-xl no-scrollbar"
          >
            {thank ? (
              <div className="w-full mt-5 space-y-2 p-4 md:p-8">
                <Image
                  title="thumbs up icon"
                  src={"/thumbs-up.gif"}
                  alt="thumbs up icon"
                  width={65}
                  height={65}
                />
                <h3 className="text-base font-bold text-text md:text-lg">
                  You're All Set!
                </h3>
                <p className="text-base md:text-lg">
                  Check your inbox for access to our curated work samples.
                </p>
              </div>
            ) : (
              <div className="relative z-10 p-6 md:p-16">
                <div className="w-full mt-5 space-y-4">
                  <h3 className="text-base font-bold text-text md:text-lg">
                    One - Click Away!
                  </h3>
                  <p className="text-base md:text-lg">
                    Access High-Quality Content Samples Now
                  </p>
                </div>
                <div className="relative w-full space-y-2">
                  <form
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-2 text-black md:space-y-8 py-7"
                  >
                    <div className="gap-2 flex flex-col">
                      <label
                        htmlFor="name"
                        className="capitalize tracking-wider"
                      >
                        name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name || ""}
                        onChange={handleChange}
                        className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                      />
                    </div>
                    <div className="gap-2 flex flex-col">
                      <label
                        htmlFor="email"
                        className="capitalize tracking-wider"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email || ""}
                        onChange={handleChange}
                        className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                      />
                    </div>
                    <button
                      role="button"
                      aria-label="Submit Form"
                      type="submit"
                      className="bg-linear-to-bl from-green-light to-green-darker px-4 py-2 md:py-3 hover:scale-90 transition-all transform duration-500 ease-in-out text-white md:px-6 cursor-pointer rounded-md border-b-3 border-[#00FFE7] shadow-xl capitalize text-sm"
                    >
                      {status ? <Loader /> : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const SpringModalPrice = ({ isOpen, setIsOpen, thank, setThank, price }) => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    try {
      const emailResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `${price} Quote`,
          priceTag: "true",
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        throw new Error(
          `Email API Error: ${emailResponse.status} ${errorData}`
        );
      }

      const emailDataResult = await emailResponse.json();

      // Check for success in both responses
      if (emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();
        setThank(true);
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setThank(false);
          }}
          className="fixed inset-0 !z-[9999] grid w-full h-full p-6 md:p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-[#0000001A] backdrop-blur place-items-center font-Montserrat"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-xl no-scrollbar"
          >
            {thank ? (
              <div className="w-full mt-5 space-y-2 p-4 md:p-8">
                <Image
                  title="thumbs up icon"
                  src={"/thumbs-up.gif"}
                  alt="thumbs up icon"
                  width={65}
                  height={65}
                />
                <h3 className="text-base font-bold text-text md:text-lg">
                  You're All Set!
                </h3>
                <p className="text-sm md:text-base">
                  We've received your request and will get back with a detailed
                  quote soon. Meanwhile, if you'd like to discuss your project
                  in more detail, feel free to book a quick call with us.
                </p>
                <div className="flex justify-start items-center w-full mt-6">
                  <CalendlyLink price />
                </div>
              </div>
            ) : (
              <div className="relative z-10 p-6 md:p-16">
                <div className="w-full mt-5 space-y-4">
                  <h3 className="text-base font-bold text-text md:text-lg">
                    One - Click Away!
                  </h3>
                  <p className="text-base md:text-lg">
                    Complete the form now to get in touch with us.
                  </p>
                </div>
                <div className="relative w-full space-y-2">
                  <form
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-2 text-black md:space-y-8 py-7"
                  >
                    <div className="gap-2 flex flex-col">
                      <label
                        htmlFor="name"
                        className="capitalize tracking-wider"
                      >
                        name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name || ""}
                        onChange={handleChange}
                        className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                      />
                    </div>
                    <div className="gap-2 flex flex-col">
                      <label
                        htmlFor="email"
                        className="capitalize tracking-wider"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email || ""}
                        onChange={handleChange}
                        className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                      />
                    </div>
                    <div className="gap-2 flex flex-col">
                      <label htmlFor="message" className="capitalize font-bold tracking-wider">
                        message
                      </label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        rows={3}
                        className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none bg-white"
                      />
                    </div>
                    <button
                      role="button"
                      aria-label="Submit Form"
                      type="submit"
                      className="bg-linear-to-bl from-green-light to-green-darker px-4 py-2 md:py-3 hover:scale-90 transition-all transform duration-500 ease-in-out text-white md:px-6 cursor-pointer rounded-md border-b-3 border-[#00FFE7] shadow-xl capitalize text-sm"
                    >
                      {status ? <Loader /> : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
