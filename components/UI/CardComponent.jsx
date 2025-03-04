import Link from "next/link";
import React from "react";

export const CardComponent = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 space-y-3 md:space-y-6">
            <div className="bg-zinc-300 w-full h-32"></div>
            <div className="p-4 space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                    Content for B2B
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li className="text-base lg:text-lg">Website Landing Page Content</li>
                    <li className="text-base lg:text-lg">Landing page copywriting</li>
                    <li className="text-base lg:text-lg">Blog Writing</li>
                    <li>LinkedIn Content Creation for Founders</li>
                </ul>
                <button className="mt-8 hover:scale-90 transition-all transform duration-500 ease-in-out">
                    <Link href={"#"} className="p-3 rounded-lg border text-sm">Learn more</Link>
                </button>
            </div>
        </div>
    );
};
