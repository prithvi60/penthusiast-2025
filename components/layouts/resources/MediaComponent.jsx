import { Gradient } from '@/components/UI/Gradient'
import { media } from '@/utils/Data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MediaComponent = () => {
    return (
        <section className='padding w-full space-y-14'>
            <h2 className="text-3xl text-center uppercase sm:text-5xl lg:text-6xl font-bold">
                MEDIA
            </h2>
            <div className='w-full grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-10'>
                <Gradient rotate />
                {media.map((list, idx) => (
                    <Link key={idx} href={list.link} className='hover:scale-110 transition-all duration-500 ease-in-out'>
                        <Image src={list.img} alt='article image' width={380} height={450} className='object-cover object-center shadow-lg rounded-lg' />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default MediaComponent
