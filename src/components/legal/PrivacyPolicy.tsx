import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivacyPolicy = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-display">Privacy Policy</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full pr-4">
                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4 pt-4">
                        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                        <p>
                            At Thacker Tours & Travels, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and taxi services.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">1. Information We Collect</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Book a taxi or tour package.</li>
                            <li>Contact us via phone, WhatsApp, or email.</li>
                            <li>Sign up for our newsletter (if applicable).</li>
                        </ul>
                        <p>This information may include your name, phone number, email address, pickup/drop-off locations, and travel dates.</p>

                        <h3 className="text-lg font-semibold text-charcoal">2. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Process and confirm your bookings.</li>
                            <li>Communicate with you regarding your trip details.</li>
                            <li>Improve our services and customer experience.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-charcoal">3. Data Security</h3>
                        <p>
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">4. Sharing of Information</h3>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">5. Cookies</h3>
                        <p>
                            Our website may use "cookies" to enhance user experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:<br />
                            <strong>Thacker Tours & Travels</strong><br />
                            Shop No. 3, Memon Musafir Khana, Station Road, Bhuj, Gujarat 370001<br />
                            Email: thackertravels1@gmail.com<br />
                            Phone: +91 98792 30104
                        </p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
