"use client";
import { useState } from "react";
import Loader from "../UI/Loader";

const initialFormData = {
    name: "",
    email: "",
    message: "",
};
export const ContactForm = () => {
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
                    title: "contact"
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
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-[85%] lg:w-3/5 space-y-5"
        >
            <div className="gap-2 flex flex-col">
                <label htmlFor="name" className="capitalize tracking-wider">
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
                <label htmlFor="email" className="capitalize tracking-wider">
                    email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                />
            </div>
            <div className="gap-2 flex flex-col">
                <label htmlFor="message" className="capitalize tracking-wider">
                    message
                </label>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    rows={3}
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
    );
};
