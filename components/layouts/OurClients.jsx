import React from 'react'
import { OurClientsMarquee } from '../UI/Marquees'

const OurClients = () => {
    return (
        <section className="w-full h-full text-center space-y-5 md:space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold">Trusted by our clients and associations</h2>
            <div className='w-full px-5'>
                <OurClientsMarquee />
            </div>
        </section>
    )
}

export default OurClients
