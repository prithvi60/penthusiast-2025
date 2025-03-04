import Achievements from '@/components/layouts/about/Achievements'
import Founder from '@/components/layouts/about/Founder'
import Hero from '@/components/layouts/about/Hero'
import OurGuidingValues from '@/components/layouts/about/OurGuidingValues'
import Reviews from '@/components/layouts/about/Reviews'
import React from 'react'

const Page = () => {
    return (
        <main>
            <Hero />
            <Achievements />
            <OurGuidingValues />
            <Reviews />
            <Founder />
        </main>
    )
}

export default Page
