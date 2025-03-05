"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";
import Image from "next/image";

export const WorksModal = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thank, setThank] = useState(false);
  return (
    <div>
      <div className="space-y-10">
        <h4 className="text-3xl sm:text-4xl lg:text-[60px] tracking-wider font-medium text-center">
          {title}
        </h4>
        <div
          className="grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10"
          onClick={() => {
            setIsOpen(true);
            setThank(false);
          }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg border border-[#AFACAC] max-w-72 overflow-hidden hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={300}
                height={350}
                className="object-contain object-center "
              />
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
        title={title}
        thank={thank}
        setThank={setThank}
      />
    </div>
  );
};

export const SpringModal = ({ isOpen, setIsOpen, title, thank, setThank }) => {
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
        toast.success("Thank you! We will get back to you shortly.", {
          position: "top-right",
          duration: 3000,
          style: {
            border: "1px solid #65a34e",
            padding: "16px",
            color: "#65a34e",
          },
          iconTheme: {
            primary: "#65a34e",
            secondary: "#FFFAEE",
          },
        });
        // window.location.href = "/thankyou";
      } else {
        toast.error(
          "We are unable to receive your details. Please try again.",
          {
            position: "top-right",
            duration: 3000,
            style: {
              border: "1px solid #EB1C23",
              padding: "16px",
              color: "#EB1C23",
            },
            iconTheme: {
              primary: "#EB1C23",
              secondary: "#FFFAEE",
            },
          }
        );
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
          className="fixed inset-0 !z-[9999] grid w-full h-full p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-[#0000001A] backdrop-blur place-items-center font-Montserrat"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-white rounded-lg shadow-xl cursor-default md:p-8 md:max-w-xl no-scrollbar"
          >
            {thank ? (
              <div className="w-full mt-5 space-y-4">
                <h3 className="text-base font-bold text-text md:text-lg">
                  You're All Set!
                </h3>
                <p className="text-base md:text-lg">
                  Check your inbox for access to our curated work samples.
                </p>
              </div>
            ) : (
              <div className="relative z-10 p-16">
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
