import Link from "next/link";
import { FiSend } from "react-icons/fi";

export const GetStartButton = () => {
    return (
        <Link title="contact page" href={"/contact"} className="rounded-lg border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Get Started
        </Link>
    );
};
