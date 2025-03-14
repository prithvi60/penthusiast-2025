"use client"
import { bitsCrunchTags, congruentTags, t10SportTags, vurveTags } from "@/utils/Data";
import CalendlyLink from "../features/CalendlyButton";
import { CardClient } from "../UI/CardComponent";
import { Gradient } from "../UI/Gradient";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ClientSpotlight = ({ subTitle, title }) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <section className="w-full h-full space-y-12 md:space-y-24 padding relative">
            <div className="space-y-4 text-center">
                <h4 className="text-sm">{subTitle}</h4>
                <Gradient rotate />
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">
                    {title}
                </h2>
                <CalendlyLink type />
            </div>
            <div className="w-full relative max-w-7xl mx-auto slider-container">
                <Slider {...settings} className="explore-slider">
                    <CardClient
                        bgColor={
                            "bg-gradient-to-b from-[#FFFFFF] via-[#EFDBD5E9] to-[#B5543999] text-[#BF1E2D]"
                        }
                        data={t10SportTags}
                        icon={"/client-14.png"}
                        img={"/spot-1.svg"}
                        title={"Brand Awareness on LinkedIn"}
                        href="https://t10sports.com"
                        type
                    />
                    <CardClient
                        bgColor={
                            "bg-gradient-to-b from-[#FFFFFF] via-[#AAB6D8BA] to-[#21409A4D] text-[#006ACF]"
                        }
                        data={bitsCrunchTags}
                        icon={"/client-5.svg"}
                        img={"/spot-2.svg"}
                        title={"Blockchain Analytics Content Strategy"}
                        href="https://bitscrunch.com"
                        para="Our team collaborated closely with various internal departments to
                    understand bitsCrunch's operations. We developed a clear strategy,
                    combining subject knowledge with consistency and patience. Content
                    creation spanned multiple formats, including informative blogs, PRs,
                    C-suite interviews, and podcasts, contributing to the client's growth
                    in the blockchain and NFT space."
                    />
                    <CardClient
                        bgColor={
                            "bg-gradient-to-b from-[#FFFFFF] via-[#FEF0B7] to-[#FDDA4F] text-[#FFCB0F]"
                        }
                        data={congruentTags}
                        icon={"/client-1.svg"}
                        img={"/spot-3.svg"}
                        title={"LinkedIn Content for the Company's Handle"}
                        href="https://www.congruentsolutions.com/"
                        type
                        col
                    />
                    <CardClient
                        bgColor={
                            "bg-gradient-to-b from-[#FFFFFF] via-[#C6E3C0E0] to-[#39B54A99] text-[#13B786]"
                        }
                        data={vurveTags}
                        icon={"/client-11.png"}
                        img={"/spot-4.svg"}
                        title={"Enhancing Online Presence through Blogs"}
                        href="https://vurvesalon.com/"
                        col
                        para="our team created engaging website blogs for Vurve Salon, focusing on relevant beauty and wellness topics. This strategic content initiative significantly boosted the salon's online visibility, attracting a substantial organic reach and positioning Vurve as a knowledgeable and appealing destination in the beauty sector."
                    />
                </Slider>
            </div>
        </section>
    );
};


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker absolute -bottom-12 md:bottom-1/2 cursor-pointer hover:opacity-80 right-32 md:-right-10 xl:-right-16 group"
            }
            onClick={onClick}
        >
            <FaArrowRight className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "p-1.5 md:p-2 xl:p-3 rounded-full border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker absolute -bottom-12 md:bottom-1/2 cursor-pointer left-32 hover:opacity-80 md:-left-10 xl:-left-16 group"
            }
            onClick={onClick}
        >
            <FaArrowLeft className="text-base text-white md:text-lg xl:text-xl group-hover:text-secondary" />
        </div>
    );
}
