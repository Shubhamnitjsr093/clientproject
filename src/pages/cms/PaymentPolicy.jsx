import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";

const PaymentPolicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Payment Policy"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Payment Policy</p>
                    <p>Effective Date: May 10, 2025</p>
                    <p>Domain: www.obiztec.com</p>
                    <p>At Obiztec, we provide web development, app development, digital marketing, branding, and consulting services. This policy ensures a clear payment structure for one-time projects and subscription-based services.</p>
                    <p>By making a payment, the Client agrees to the terms outlined in this Payment Policy, which is part of the Obiztec Terms and Conditions.</p>

                    <h2>1. Payment Structure for One-Time Projects</h2>
                    <p className='!mb-2'>Payments are structured based on the total project cost:</p>
                    <ul className="list-disc pl-6">  
                        <li>For projects under $3,500 → 100% upfront payment required before work begins.</li>
                        <li>For projects between $3,500 and $5,000 → 75% upfront payment required, with the remaining 25% due before project completion.</li>
                        <li>For projects above $5,000 → Payments are broken into milestones, which will be outlined in the project proposal.</li>
                    </ul>

                    <p className='!mb-2 mt-6'>Milestone Example for Larger Projects</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>1. Initial Deposit (30%) – Due upon agreement and project start.</li>
                        <li>2. First Milestone (25%) – Due after the initial design phase (e.g., wireframes, mockups).</li>
                        <li>3. Second Milestone (25%) – Due upon development phase completion (e.g., coding, integrations).</li>
                        <li>4. Third Milestone (15%) – Due upon successful testing and quality assurance (QA).</li>
                        <li>5. Final Payment (5%) – Due upon project completion and final delivery.</li>
                    </ul>
                    <p>The exact milestone schedule will be outlined in the service agreement based on the project scope.</p>

                    <h2>2. Payment Structure for Subscription Services</h2>
                    <p>Obiztec offers subscription-based services for website/app maintenance, digital marketing, SEO, email marketing, and branding support.</p>

                    <p className='!mb-2'>Subscription Terms</p>
                    <ul className="list-disc pl-6">  
                        <li>Commitment Periods: 2, 3, 4, or 6 months (depending on the selected plan).</li>
                        <li>Billing Cycle: Auto-renews monthly or quarterly after the commitment period unless canceled.</li>
                        <li>Cancellations:</li>
                        <li>During the commitment period: Cancellation requests will only take effect after the commitment period ends.</li>
                        <li>After the commitment period: Clients can cancel anytime before the next billing cycle to avoid renewal.</li>
                        <li>Modifications: Upgrade, downgrade, or pause requests must be made before the next billing cycle.
                        Subscription Payment & Renewals</li>
                        <li>Subscription fees are non-refundable once the billing cycle starts.</li>
                        <li>Payments are automatically processed on each renewal date.</li>
                        <li>Failed Payments: A 5-day grace period applies before late fees and service suspension.</li>
                    </ul>

                    <h2>3. Non-Refundable Services</h2>
                    <p className='!mb-2'>Certain services are non-refundable due to the nature of the work, third-party costs, and immediate value delivery. These include:</p>
                    <ul className="list-disc pl-6">  
                        <li>Social Media Marketing – Non-refundable once the campaign is launched.</li>
                        <li>Google Ads & Paid Advertising – Non-refundable once the campaign is live or in progress.</li>
                        <li>SEO Services – Non-refundable after keyword research, content optimization, or site audits have commenced.</li>
                        <li>Email Marketing & Newsletter Services – Non-refundable once the campaign has launched or content has been scheduled.</li>
                        <li>Branding & Graphic Design – Non-refundable after initial concepts have been delivered.</li>
                        <li>Subscription Services – Non-refundable once activated for the billing cycle.</li>
                    </ul>

                    <h2>4. Refunds and Cancellations</h2>
                    <ul className="list-disc pl-6">  
                        <li>Refund Requests: Refunds will not be issued for non-refundable services or completed work. Refunds for projects in progress will be evaluated based on work completed excluding non-refundable portions.</li>
                        <li>Project Cancellation: If a client cancels after work has begun, the initial deposit and any completed milestones will not be refunded.</li>
                        <li>Subscription Cancellations:</li>
                        <li>Clients must request cancellation before the next billing cycle to avoid renewal charges.</li>
                        <li>If a client fails to cancel before the next billing cycle, the subscription will renew for the next term, and no refunds will be issued for that cycle.</li>
                    </ul>

                    <h2>5. Payment Methods</h2>
                    <p className='!mb-2'>We accept the following payment methods:</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>Credit Card (via Stripe)</li>
                        <li>Bank Transfer</li>
                        <li>PayPal</li>
                    </ul>
                    <p>All payments must be cleared before work begins or continues.</p>

                    <h2>6. Late Payments & Project Pauses</h2>
                    <ul className="list-disc pl-6">  
                        <li>If payments are not made by the due date for any milestone, work will be paused until payment is received.</li>
                        <li>Late payments may result in a delay in project timelines.</li>
                    </ul>

                    <h2>7. Scope Changes & Additional Costs</h2>
                    <ul className="list-disc pl-6">  
                        <li>If the client requests new features, revisions, or scope changes after project initiation, additional costs may apply.</li>
                        <li>New milestones and payment schedules may be introduced to accommodate the additional work.</li>
                    </ul>

                    <h2>8. Client Responsibilities</h2>
                    <p className='!mb-2'>Clients are responsible for:</p>
                    <ul className="list-disc pl-6">  
                        <li>Providing all necessary content, materials, approvals, and feedback in a timely manner.</li>
                        <li>Delays caused by the client (missed deadlines, unapproved changes, lack of feedback) may impact the project timeline and will not result in refunds.</li>
                    </ul>

                    <h2>9. Governing Law & Dispute Resolution</h2>
                    <p className='!mb-2'>This Payment Policy is governed by and construed in accordance with the laws of the State of Texas, USA.</p>
                    <ul className="list-disc pl-6">  
                        <li>Any disputes arising from payments shall first be attempted to be resolved through mediation.</li>
                        <li>If mediation fails, disputes shall be settled through arbitration in Texas, unless both parties agree otherwise.</li>
                        <li>Users waive their right to participate in class-action lawsuits against Obiztec.</li>
                    </ul>

                    <h2>10. Changes to Payment Policy</h2>
                    <p className='!mb-2'>We reserve the right to modify or update this Payment Policy at any time.</p>
                    <ul className="list-disc pl-6">  
                       <li>Any changes will be posted on this page and will take effect immediately upon posting.</li>
                    </ul>

                    <h2>11. Contact Information</h2>
                    <p className='!mb-2'>For payment-related questions or further clarification, please contact us:</p>
                    <p>
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731
                    </p>

                    <p>By making a payment, the Client acknowledges and agrees to the terms outlined in this Payment Policy.</p>

                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default PaymentPolicy