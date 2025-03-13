import { Gradient } from '@/components/UI/Gradient'
import { ProgressCard } from '@/components/UI/ProgressCard'
import React from 'react'

const HowWeMake = ({ title, data }) => {
    return (
        <section className='padding w-full h-full space-y-14 max-w-7xl mx-auto'>
            {title && title()}
            <div className='grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20'>
                <Gradient rotate />
                <ProgressCard data={data} />
            </div>
        </section>
    )
}

export default HowWeMake
