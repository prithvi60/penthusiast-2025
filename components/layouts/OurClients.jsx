import React from 'react'
import Image from 'next/image'
import { ourClients } from '@/utils/Data'

const OurClients = () => {
    return (
        <section className="w-full h-full flex flex-col sm:flex-row items-center gap-5 md:gap-10 padding">
            <div className='w-full sm:w-2/4'>
                <h2 className="text-2xl md:text-3xl font-semibold text-center sm:text-start">Trusted by our clients and associations</h2>
            </div>
            <div className='w-full relative sm:w-3/4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-10 place-content-center place-items-center sm:before:top-0 sm:before:-left-10 sm:before:h-full sm:before:w-1 sm:before:bg-[#E4E4E4] sm:before:absolute'>
                {ourClients.map((item, idx) => (
                    <div key={idx} className="w-24 h-12 lg:w-36 lg:h-20 relative overflow-hidden">
                        <Image
                            key={idx}
                            fill
                            alt={item.alt}
                            src={item.logo}
                            className="object-contain object-center"
                        />
                    </div>
                ))}
            </div>
            {/* <div className='w-full px-5'>
                <OurClientsMarquee />
            </div> */}
        </section>
    )
}

export default OurClients
