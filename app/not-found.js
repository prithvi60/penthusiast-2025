import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6 mx-auto h-full w-full text-center">
      {/* <div className='relative h-56 w-56 -mt-5'> */}
      <Image
        src={"/404.png"}
        height={225}
        width={225}
        alt="404 page not found"
        title="404 page not found"
        className="object-contain mx-auto"
      />
      {/* </div> */}
      <h2 className="font-Lora text-3xl md:text-5xl capitalize">
        Looking for something <span className="animate-pulse">?</span>
      </h2>
      <p className="text-base md:text-lg">
        We&apos;re sorry. The web address you entered can&apos;t be found on our
        site. Your page may have moved or may no longer be available.{" "}
      </p>
      <p className="text-base md:text-lg">
        Try to access the page using the navigation above.
      </p>
      <p className="text-base md:text-lg">
        If you typed the page address in the address bar, make sure that
        it&apos;s spelled correctly.
      </p>
      <div className="w-full flex justify-center items-center">
        <Link
          scroll={false}
          href={"/"}
          title="Back To Home button"
          className="rounded-lg border-2 border-solid border-white bg-linear-to-bl from-green-light to-green-darker px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#00FFE7] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}
