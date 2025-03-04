import Link from "next/link"


export const GetStartButton = () => {
    return (
        <Link href={"/contact"} className="bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 hover:scale-90 transition-all transform duration-500 ease-in-out text-white md:px-4 cursor-pointer rounded-md border-b-3 border-[#00FFE7] shadow-xl capitalize text-sm">
            Get Started
        </Link>
    )
}
