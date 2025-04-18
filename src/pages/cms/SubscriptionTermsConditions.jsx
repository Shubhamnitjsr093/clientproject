import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";
import { Link } from 'react-router-dom';

const SubscriptionTermsConditions = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Obiztec Subscription Terms & Conditions"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Subscription Terms & Conditions</p>
                    <p>Effective Date: May 10, 2025</p>
                    <p className='!mb-2'>These Subscription Terms & Conditions (“Agreement”) govern all recurring services provided by Obiztec (“Company,” “we,” “us”) to the Client (“Subscriber,” “you”), including but not limited to:</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>Website & App Maintenance Services</li>
                        <li>Digital Marketing & SEO Services</li>
                        <li>Branding & Graphic Design Subscriptions</li>
                        <li>Newsletter & Email Marketing Services</li>
                        <li>Any Other Subscription-Based Services</li>
                    </ul>
                    <p>By subscribing to any recurring service, you acknowledge and agree to these terms.</p>

                    <h2>1. Subscription Plans & Commitments</h2>
                    <div className="pl-6 md:pl-7">

                        <h3>1.1. Subscription Duration & Commitment</h3>
                        <ul className="list-disc pl-6">  
                            <li>All subscriptions require a minimum commitment of 2, 3, 4, or 6 months, depending on the selected plan.</li>
                            <li>After the commitment period, subscriptions continue on a month-to-month basis, allowing the client to cancel anytime with proper notice.</li>
                            <li>Upfront payment for the first billing cycle is required to activate the subscription.</li>
                        </ul>

                        <h3>1.2. Auto-Renewal & Billing</h3>
                        <ul className="list-disc pl-6">  
                            <li>Subscriptions automatically renew at the end of each billing cycle unless canceled as per the cancellation policy.</li>
                            <li>The payment method on file will be charged on the same date each cycle (monthly, quarterly, etc.).</li>
                        </ul>

                        <h3>1.3. Subscription Modifications</h3>
                        <ul className="list-disc pl-6">  
                            <li>Upgrades/Downgrades: Requests must be made 7 days before the next billing cycle.</li>
                            <li>Pauses or Adjustments: Requests must be made 14 days before the next billing cycle and are subject to approval.</li>
                        </ul>
                    </div>

                    <h2>2. Cancellation Policy</h2>
                    <div className="pl-6 md:pl-7">
                        <h3>2.1. Cancellation Requests</h3>
                        <ul className="list-disc pl-6">  
                            <li>Within Commitment Period: Clients cannot cancel before fulfilling the selected 2, 3, 4, or 6-month commitment.</li>
                            <li>After Commitment Period: Clients can cancel anytime by submitting a cancellation request at least 10 days before the next billing cycle.</li>
                        </ul>

                        <h3>2.2. Cancellation Process</h3>
                        <ul className="list-disc pl-6">  
                            <li>Cancellation requests must be submitted via email to contact@obiztec.com or through the client dashboard.</li>
                            <li>If a cancellation request is received after the 10-day window, the subscription will be billed for the next cycle and canceled afterward.</li>
                        </ul>

                        <h3>2.3. No Refunds for Early Termination</h3>
                        <ul className="list-disc pl-6">  
                            <li>No refunds are issued for cancellations before the commitment period is completed.</li>
                            <li>If canceling mid-cycle, services will remain active until the end of the billing period.</li>
                        </ul>

                    </div>

                    <h2>3. Payment Terms</h2>
                    <div className="pl-6 md:pl-7">
                        
                        <h3>3.1. Accepted Payment Methods</h3>
                        <ul className="list-disc pl-6">  
                            <li>Payments are processed via credit/debit card, PayPal, or ACH transfers.</li>
                            <li>Clients must ensure that the payment method on file remains valid.</li>
                        </ul>

                        <h3>3.2. Failed Payments & Late Fees</h3>
                        <ul className="list-disc pl-6">  
                            <li>If a payment fails, the client will be notified and given a 5-day grace period to update payment details.</li>
                            <li>After the grace period, a 5% late fee per week may apply, and services may be paused until payment is received.</li>
                        </ul>
                    </div>

                    <h2>4. Service Delivery & Support</h2>
                    <div className="pl-6 md:pl-7">
                        <h3>4.1. Scope of Services</h3>
                        <ul className="list-disc pl-6">  
                            <li>Services included in the subscription are detailed in the service package description.</li>
                            <li>Any additional work outside of the agreed scope requires a separate agreement and payment.</li>
                        </ul>

                        <h3>4.2. Response Time & Support Levels</h3>
                        <ul className="list-disc pl-6">  
                            <li>Support response times vary based on the selected subscription package.</li>
                            <li>Higher-tier plans receive priority support and faster turnaround times.</li>
                        </ul>

                    </div>

                    <h2>5. Refund Policy</h2>
                    <ul className="list-disc pl-6">  
                        <li>Subscription payments are non-refundable once a billing cycle begins.</li>
                        <li>Refunds are only considered if Obiztec fails to deliver agreed-upon services within the timeframe outlined in the service agreement.</li>
                    </ul>

                    <h2>6. Amendments & Changes</h2>
                    <ul className="list-disc pl-6">  
                        <li>Obiztec reserves the right to modify these Subscription Terms at any time.</li>
                        <li>Clients will be notified at least 14 days before any significant changes take effect.</li>
                    </ul>

                    <h2>7. Agreement to Terms</h2>
                    <p>By subscribing to a recurring service with Obiztec, you acknowledge and agree to these terms.</p>
                    <p className='!mb-2'>For questions, cancellations, or service modifications, contact:</p>

                    <p>
                        Email: contact@obiztec.com <br />
                        Website: <Link to="http://www.obiztec.com">www.obiztec.com</Link>
                    </p>

                    
                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default SubscriptionTermsConditions