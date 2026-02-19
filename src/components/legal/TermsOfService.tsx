import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TermsOfService = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-display">Terms of Service</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full pr-4">
                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4 pt-4">
                        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                        <p>
                            Welcome to Thacker Tours & Travels. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">1. Booking Services</h3>
                        <p>
                            Thacker Tours & Travels provides taxi booking and car rental services. All bookings are subject to availability. We reserve the right to refuse service to anyone for any reason at any time.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">2. Pricing and Payments</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Prices quoted are subject to change without prior notice, although we honor the price confirmed at the time of booking.</li>
                            <li>Toll taxes, parking fees, and state entry taxes are extra unless specified otherwise.</li>
                            <li>Payments can be made via cash, UPI, or bank transfer as agreed upon booking.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-charcoal">3. User Responsibilities</h3>
                        <p>
                            You agree to use our services for lawful purposes only. You are responsible for ensuring that you provide accurate information regarding pickup/drop-off locations and times. Any robust behavior towards drivers will not be tolerated and may result in immediate termination of service without refund.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">4. Limitation of Liability</h3>
                        <p>
                            Thacker Tours & Travels shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                        </p>
                        <p>
                            We are not responsible for delays caused by traffic, weather conditions, mechanical breakdowns, or other unforeseen circumstances.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">5. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the jurisdiction of courts in Bhuj, Gujarat.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">6. Changes to Terms</h3>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
