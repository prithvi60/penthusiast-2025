import { Gradient } from '@/components/UI/Gradient'
import { achievements } from '@/utils/Data'
import Image from 'next/image'
import React from 'react'

const Achievements = () => {
    return (
        <section className="padding relative w-full h-full space-y-5 md:space-y-8">
            <h3 className='w-full xl:w-3/5 text-3xl sm:text-4xl lg:text-5xl font-semibold'>Our Achievements in Content Creation & Strategy</h3>
            <Gradient rotate />
            <div className='w-full flex flex-col lg:flex-row gap-8 md:gap-0 items-start'>
                <ul className="w-full lg:w-3/5 mt-10 list-disc list-inside grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {achievements.map((achievement, index) => (
                        <div key={index} className='space-y-5'>
                            {achievement.list.map((item, index) => (
                                <div key={index}>
                                    {item.para}
                                </div>
                            ))}
                        </div>
                    ))}
                </ul>
                <div className='w-full lg:w-2/5 relative h-[40vh] md:h-[50vh] lg:h-[70vh]'>
                    <Image fill src="/achievement-illustration.png" alt="achievements" className='object-contain object-center' />
                </div>
            </div>
        </section>
    )
}

export default Achievements
