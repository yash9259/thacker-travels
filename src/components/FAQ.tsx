import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you provide taxi service in Bhuj airport?",
        answer: "Yes, we provide reliable airport pickup and drop taxi service in Bhuj at affordable rates. Our drivers track flight timings to ensure punctual service."
    },
    {
        question: "Do you offer Kutch tour packages?",
        answer: "Yes, we offer customized Kutch tour packages including Rann of Kutch, Mandvi, Dholavira, and other nearby destinations. Packages can be tailored to your duration and budget."
    },
    {
        question: "How can I book a taxi in Bhuj with Thacker Tours?",
        answer: "You can book a taxi by calling us directly or sending a message on WhatsApp. We offer simple and quick booking confirmation with transparent pricing."
    },
    {
        question: "Is it safe to travel to Rann of Kutch at night?",
        answer: "Yes, our drivers are experienced and familiar with the routes. We prioritize safety and ensure a comfortable journey, especially for night travel to witness the Rann under moonlight."
    },
    {
        question: "What types of vehicles are available in your fleet?",
        answer: "We have a wide range of vehicles including Swift Dzire, Toyota Etios, Toyota Innova, Innova Crysta, and Tempo Travellers for larger groups. All vehicles are well-maintained and air-conditioned."
    },
    {
        question: "Do you provide one-way taxi services?",
        answer: "Yes, we provide one-way taxi services for various routes from Bhuj to other cities in Gujarat like Ahmedabad, Rajkot, Dwarka, and Somnath."
    },
    {
        question: "Are there any hidden charges?",
        answer: "No, we believe in transparent pricing. The fare quoted includes fuel, driver allowance, and toll taxes (if specified). Any additional parking or state entry taxes are communicated upfront."
    }
];

const FAQ = () => {
    return (
        <section id="faq" className="py-20 md:py-32 bg-stone-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500">
                        Everything you need to know about our taxi services in Bhuj.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 md:px-8 rounded-2xl border border-transparent shadow-sm hover:shadow-md transition-all duration-200">
                            <AccordionTrigger className="text-left font-bold text-lg text-charcoal hover:text-primary hover:no-underline transition-colors py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
