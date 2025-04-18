import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";

const RefundPolicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Refund Policy"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Refund Policy</p>
                    <p>Effective Date: May 10th 2025</p>
                    <p>Domain: www.obiztec.com</p>
                    <p>At Obiztec (www.obiztec.com), we strive to provide high-quality digital solutions. Due to the nature of our services, some purchases are non-refundable. Please review this policy before making a payment.</p>
                    <p>By making a payment, the Client agrees to this Refund Policy, which is part of the Obiztec Terms and Conditions.</p>

                    <h2>1. Refund Eligibility</h2>
                    <ul className="list-disc pl-6">  
                        <li>Project Scope: Refunds may be considered if the project has not yet started or if significant delays occur due to our fault.</li>
                        <li>Partial Refunds: If a project is in progress, a partial refund may be granted based on the work completed at the time of the request.</li>
                        <li>Completed Projects: Once a project has been completed and delivered, no refunds will be issued.</li>
                    </ul>

                    <h2>2. Non-Refundable Services</h2>
                    <p className='!mb-2'>The following services are non-refundable once initiated due to planning, execution, and dedicated resources:</p>
                    <ul className="list-disc pl-6">  
                        <li>Website & App Development – Milestone payments are non-refundable once work has commenced.</li>
                        <li>Social Media Marketing – No refunds once campaigns, content creation, or ad management have started.</li>
                        <li>Google Ads & Paid Advertising – Ad budgets and campaign setup fees are non-refundable.</li>
                        <li>SEO Services – No refunds once keyword research, content optimization, or link-building begins.</li>
                        <li>Email & Newsletter Marketing – No refunds once campaigns are launched or automation is set up.</li>
                        <li>Branding & Graphic Design – No refunds once initial drafts or concepts have been delivered.</li>
                        <li>Subscription & Maintenance Services – No refunds once a billing cycle has started, as these services involve ongoing work.</li>
                    </ul>

                    <h2>3. Subscription Refund & Cancellation Policy</h2>
                    <p className='!mb-2'>Commitment Periods & Cancellations</p>
                    <ul className="list-disc pl-6">  
                        <li>All subscription services (e.g., website maintenance, SEO, ads management) require a minimum commitment of 2, 3, 4, or 6 months based on the selected plan.</li>
                        <li>During the commitment period, cancellations are not permitted. Clients are responsible for full payment until the end of the agreed term.</li>
                        <li>After the commitment period, the client may cancel at any time before the next billing cycle.Billing & Refunds for Subscriptions</li>
                        <li>Clients will be billed automatically at the start of each billing cycle.</li>
                        <li>Refund requests must be made at least 5 business days before the next billing date to avoid being charged for the next cycle.</li>
                        <li>No refunds for unused time if the Client cancels in the middle of an active billing period.</li>
                    </ul>

                    <h2>4. Non-Refundable Deposits & Project Payments</h2>
                    <ul className="list-disc pl-6">  
                        <li>Under $3,500 → Full payment upfront, non-refundable once work begins.</li>
                        <li>$3,500 - $5,000 → 75% non-refundable upfront, with the final 25% due at project completion (non-refundable).</li>
                        <li>Over $5,000 → 30% non-refundable deposit upfront, with milestone-based payments as per the service agreement.</li>
                        <li>Milestone Payments → All milestone payments are non-refundable, as they cover work already completed or in progress.</li>
                    </ul>

                    <h2>5. Refund Process</h2>
                    <ul className="list-disc pl-6">  
                        <li>Request Submission: All refund requests must be made in writing within 7 days of payment.</li>
                        <li>Review Process: Refund eligibility is assessed based on project progress. If deliverables have been provided, a refund will not be granted. Instead, adjustments or revisions will be offered.</li>
                        <li>Processing Time: Approved refunds will be processed within 7-14 business days.</li>
                    </ul>

                    <h2>6. Service Interruptions & Delays</h2>
                    <ul className="list-disc pl-6">  
                        <li>Obiztec Delays: If we are responsible for delays, we may offer a partial refund or service credit, depending on the situation.</li>
                        <li>Client Delays: If a client delays approvals, content submissions, or responses, refunds will not be granted for the resulting delay.</li>
                    </ul>

                    <h2> 7. Non-Refundable Fees</h2>
                    <ul className="list-disc pl-6">  
                        <li>Third-Party Services – Fees paid for domains, hosting, premium software, or paid advertising platforms are non-refundable.</li>
                        <li>Administrative & Planning Costs – Any fees covering initial consultations, research, or planning are non-refundable.</li>
                    </ul>

                    <h2>8. Indemnification</h2>
                    <p className='!mb-2'>The Client agrees to indemnify and hold Obiztec harmless from any claims, damages, losses, or disputes arising from:</p>
                    <ul className="list-disc pl-6">  
                        <li>The Client’s use of Obiztec’s services.</li>
                        <li>The Client’s violation of this Refund Policy.</li>
                        <li>The Client’s breach of any agreements with third parties (e.g., Google Ads, hosting providers).</li>
                    </ul>

                    <h2>9. Governing Law & Dispute Resolution</h2>
                    <p className='!mb-2'>This Refund Policy is governed by the laws of Texas, USA.</p>
                    <ul className="list-disc pl-6">  
                        <li>Mediation Required: Any refund disputes must first be attempted to be resolved through mediation.</li>
                        <li>Arbitration: If mediation fails, disputes shall be settled through arbitration in Texas, unless both parties agree otherwise.</li>
                        <li>No Class Actions: Users waive their right to participate in class-action lawsuits against Obiztec.</li>
                    </ul>

                    <h2>10. Changes to This Policy</h2>
                    <p>Obiztec reserves the right to update this Refund Policy at any time. Any changes will take effect immediately upon posting on our website.</p>

                    <h2>11. Contact Us</h2>
                    <p className='!mb-2'>For refund-related inquiries, contact us at:</p>
                    <p>
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731
                    </p>

                    <p>By making a payment, the Client acknowledges and agrees to the terms outlined in this Refund Policy.</p>
                    
                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default RefundPolicy