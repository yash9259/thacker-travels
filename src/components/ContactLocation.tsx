import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ContactLocation = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-10">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Ready to explore Kutch? Contact us today for the best taxi rates and packages. We are available 24/7 to answer your queries.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg mb-1">Make a Call</h4>
                                    <p className="text-gray-500 mb-2">For urgent bookings and inquiries</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919879230104" className="font-medium text-lg text-charcoal hover:text-primary transition-colors">+91 98792 30104</a>
                                        <a href="tel:+919913900040" className="font-medium text-lg text-charcoal hover:text-primary transition-colors">+91 99139 00040</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-[#25D366]/10 p-4 rounded-2xl text-[#25D366] shrink-0">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg mb-1">WhatsApp Chat</h4>
                                    <p className="text-gray-500 mb-2">Chat with us for quick quotes</p>
                                    <a href="https://wa.me/919879230104" target="_blank" rel="noopener noreferrer" className="font-medium text-lg text-charcoal hover:text-[#25D366] transition-colors underline decoration-2 decoration-[#25D366]/30 underline-offset-4">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg mb-1">Visit Office</h4>
                                    <p className="text-gray-500 mb-2">Come say hello at our HQ</p>
                                    <p className="font-medium text-charcoal leading-relaxed">
                                        Shop No. 3, Memon Musafir Khana,<br />
                                        Station Road, Bhuj, Gujarat 370001
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                                <a href="tel:+919879230104" className="gap-2">
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-white bg-transparent">
                                <a href="https://wa.me/919879230104" target="_blank" rel="noopener noreferrer" className="gap-2">
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="h-[600px] w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white relative z-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.6338302390164!2d69.66440268800966!3d23.25070083984606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e649842a19b%3A0xc6383636af819777!2sStation%20Rd%2C%20Bhuj%2C%20Gujarat%20370001!5e0!3m2!1sen!2sin!4v1709825424564!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Thacker Tours & Travels Location"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactLocation;
