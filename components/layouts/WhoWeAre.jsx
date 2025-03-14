import Link from 'next/link'
import { Gradient } from '../UI/Gradient'

const WhoWeAre = () => {
    return (
        <section className="relative flex flex-col items-center justify-center px-6 py-16 text-center padding">
            {/* Background Blur Effect */}
            {/* <Gradient rotate /> */}

            {/* Content */}
            <div className="relative max-w-full md:max-w-5xl md:mx-auto z-10 space-y-5 md:space-y-8">
                <h2 className="text-4xl md:text-5xl font-semibold">Who are we?</h2>
                <p className="mt-4 text-justify md:text-center text-base md:text-lg lg:text-xl">
                    Forget those keyword-stuffed word salads! We know you&apos;re tired of
                    content that sounds like a robot wrote it (and frankly, so are we). At
                    Penthusiasts, we&apos;ve been crafting kick-ass content since 2017.
                    We&apos;ve evolved alongside AI, but we still believe in the power of
                    human creativity. Our secret sauce? We curate content that connects
                    with your audience, sparks engaging conversations, and ultimately
                    drives conversions. No matter your industry, we&apos;ll make you shine
                    in the digital space brighter than your competitors.
                </p>
                <div className="w-full flex justify-center items-center">
                    <Link title="about link" href={"/about"} className="rounded-lg border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        To know more about us!
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
