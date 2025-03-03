import React from 'react'
import { GetStartButton } from '../UI/Button'

const ExploreOurServices = () => {
    return (
        <section className='w-full h-full text-center space-y-5 md:space-y-8'>
            <div className='padding space-y-4'>
                <h4 className='text-sm'>Explore our services</h4>
                <h2 className="text-3xl sm:text-4xl w-[90%] md:w-3/5 mx-auto lg:text-5xl font-bold">From Websites to Social Media—We Write It All!</h2>
                <div className="w-full flex justify-center items-center">
                    <GetStartButton />
                </div>
            </div>
        </section>
    )
}

export default ExploreOurServices
