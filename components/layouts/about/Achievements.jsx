import { Gradient } from '@/components/UI/Gradient'
import { achievements } from '@/utils/Data'
import Image from 'next/image'
import React from 'react'
import { GiFeather } from 'react-icons/gi'

const Achievements = () => {
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8">
            <h3 className='w-full xl:w-3/4 text-4xl sm:text-5xl lg:text-6xl font-semibold'>Our Achievements in Content Creation & Strategy</h3>
            <Gradient rotate />
            <div className='w-full flex flex-col lg:flex-row gap-8 md:gap-0 items-start'>
                <ul className="w-full lg:w-3/4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {achievements.map((achievement, index) => (
                        <div key={index} className='space-y-5'>
                            {achievement.list.map((item, index) => (
                                <div key={index} className='flex items-start gap-x-3'>
                                    <GiFeather className="text-base shrink-0 lg:text-lg mt-2" />
                                    <p>{item.para}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </ul>
                <div className='w-full lg:w-2/4 relative h-[40vh] md:h-[50vh] lg:h-[70vh]'>
                    <Image fill src="/achievement-illustration.png" alt="achievements" className='object-contain object-center' />
                </div>
            </div>
        </section>
    )
}

export default Achievements
