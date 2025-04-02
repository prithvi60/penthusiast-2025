import React from "react";

export const ProgressCard = ({ data }) => {
    return (
        <>
            {data.map((list, idx) => (
                <div
                    className={`space-y-2 md:space-y-4 w-full text-center sm:text-start`}
                    key={idx}
                >
                    <h4 className="text-lg md:text-xl tracking-wide font-bold text-[#001A1A]">
                        {list.title}
                    </h4>
                    {list.title === "Trust Wins Business" ? (
                        <>{list.desc}</>
                    ) : (
                        <p className="text-sm md:text-base">{list.desc}</p>
                    )}
                </div>
            ))}
        </>
    );
};
