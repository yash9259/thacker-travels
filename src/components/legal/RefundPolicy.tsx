import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const RefundPolicy = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-display">Refund & Cancellation Policy</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full pr-4">
                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4 pt-4">
                        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                        <p>
                            We understand that plans can change. This policy outlines the terms for cancellations and refunds for services booked with Thacker Tours & Travels.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">1. Cancellation Policy</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>More than 24 hours before pickup:</strong> Full refund of any advance payment.</li>
                            <li><strong>12 to 24 hours before pickup:</strong> 50% refund of any advance payment.</li>
                            <li><strong>Less than 12 hours before pickup:</strong> No refund of advance payment.</li>
                        </ul>
                        <p>
                            Note: For peak season bookings (e.g., Rann Utsav, Diwali), cancellation policies may vary and will be communicated at the time of booking.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">2. Refund Process</h3>
                        <p>
                            If you are eligible for a refund, we will initiate the process within 3-5 business days. The refund will be credited back to the original method of payment. Please allow 7-10 business days for the amount to reflect in your account depending on your bank's processing time.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">3. User-Initiated Changes</h3>
                        <p>
                            Changes to the booking date or time are subject to vehicle availability. If a vehicle is not available for the new slot and you wish to cancel, standard cancellation charges will apply.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">4. Service Failure</h3>
                        <p>
                            In the rare event that we are unable to provide a vehicle due to unforeseen circumstances (breakdown, accident, etc.), we will try our best to arrange an alternative vehicle. If we fail to do so, a full refund of any advance payment will be made.
                        </p>

                        <h3 className="text-lg font-semibold text-charcoal">5. Contact for Refunds</h3>
                        <p>
                            To request a cancellation or refund, please contact us immediately at:<br />
                            Phone/WhatsApp: +91 98792 30104<br />
                            Email: thackertravels1@gmail.com
                        </p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
