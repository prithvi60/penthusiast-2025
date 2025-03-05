import React from 'react'
import { Accordion } from '../UI/Accordion'

const Faq = () => {
    return (
        <section className='w-full padding space-y-8 flex flex-col justify-center items-center'>
            <h2 className="text-4xl md:text-5xl font-semibold">Who are we?</h2>
            <p className="text-base md:text-xl">Your most common questions about us, answered.</p>
            <Accordion items={accordionItems} />
        </section>
    )
}

export default Faq

const accordionItems = [
    {
        title: 'What sets your content marketing agency apart from others in the industry?',
        content: 'We stand out by offering tailored content solutions, from writing diverse content types to providing comprehensive content audits, all designed to meet your unique requirements.',
    },
    {
        title: 'Can we customize your services & avail content requirements based on our need?',
        content: 'TWe are adaptable, and are always open to customizing our services to best suit your needs.',
    },
    {
        title: 'Do you specialize in a particular content niche, or can you handle a wide range of industries?							',
        content: 'We are versatile and skilled in crafting content for various sectors and in different forms like blogs, social media, PR articles, and more, ensuring a personalized approach for your business.',
    },
    {
        title: "Can you help us assess our existing content's performance and quality?",
        content: "Absolutely, we offer in-depth content audits as a standalone service, providing comprehensive reports to enhance your existing content strategies."
    },
    {
        title: "How do you balance work commitments with work-life balance for your team?",
        content: "Our stress-free work culture prioritizes team well-being, allowing writers to take on projects based on bandwidth to ensure a healthy work-life balance while delivering quality results for our clients."
    },
    {
        title: "What are your work timings & how can I get in touch?",
        content: "We work between 9am to 6pm everyday from Monday to Friday.You can contact us by filling out the form or reach out to us at Phone: +91-90032 85687 | Email: reachout@penthusiasts.com"
    },
];