import Achievements from '@/components/layouts/about/Achievements'
import Founder from '@/components/layouts/about/Founder'
import Hero from '@/components/layouts/about/Hero'
import OurGuidingValues from '@/components/layouts/about/OurGuidingValues'
import Reviews from '@/components/layouts/about/Reviews'
import OurClients from '@/components/layouts/OurClients'
import AnimatedOverlapCards from '@/components/UI/AnimatedOverlapCards'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Hero />
            <AnimatedOverlapCards />
            <Achievements />
            <OurGuidingValues />
            <OurClients />
            <Reviews />
            <Founder />
        </div>
    )
}

export default Page
