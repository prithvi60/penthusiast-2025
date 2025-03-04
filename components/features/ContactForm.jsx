import React from "react";

export const ContactForm = () => {
    return (
        <form className="w-full md:w-[85%] lg:w-3/5 space-y-5">
            <div className="gap-2 flex flex-col">
                <label htmlFor="name" className="capitalize tracking-wider">
                    name
                </label>
                <input
                    type="text"
                    id="name"
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
                    rows={3}
                    className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none"
                />
            </div>
            <button
                type="submit"
                className="bg-linear-to-bl from-green-light to-green-darker px-4 py-2 md:py-3 hover:scale-90 transition-all transform duration-500 ease-in-out text-white md:px-6 cursor-pointer rounded-md border-b-3 border-[#00FFE7] shadow-xl capitalize text-sm"
            >
                submit
            </button>
        </form>
    );
};
