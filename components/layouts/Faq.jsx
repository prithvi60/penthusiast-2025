import React from 'react'
import { Accordion } from '../UI/Accordion'
import { accordionItems } from '@/utils/Data'

const Faq = () => {
    return (
        <section className='w-full padding space-y-8 flex flex-col justify-center items-center'>
            <h2 className="text-4xl md:text-5xl font-semibold">FAQs</h2>
            <p className="text-base md:text-xl">Your most common questions about us, answered.</p>
            <Accordion items={accordionItems} />
        </section>
    )
}

export default Faq
