import Link from "next/link";
import { FiSend } from "react-icons/fi";

export const GetStartButton = () => {
    return (
        // <Link href={"/contact"} className="bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3  transition-all transform duration-500 ease-in-out text-white md:px-4 cursor-pointer rounded-md border-b-3 border-[#00FFE7] capitalize text-sm
        // shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        // hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        // ">
        //     Get Started
        // </Link>

        <Link title="contact page" href={"/contact"} className="rounded-lg border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Get Started
        </Link>
    );
};

//     <Link
//         href={"/contact"}
//         className={`bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:px-4 md:py-3 rounded-full flex items-center gap-2 text-white text-sm
//     shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
//     transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-white/80
// `}
//     >
//         <FiSend />
//         <span>Hover Me</span>
//     </Link>