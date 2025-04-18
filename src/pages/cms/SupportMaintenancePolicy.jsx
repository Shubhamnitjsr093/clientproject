import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";

const SupportMaintenancePolicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Support and Maintenance Policy"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Support and Maintenance Policy</p>
                    <p>Last Updated: May 10, 2025</p>
                    <p>At Obiztec (www.obiztec.com), we are committed to ensuring that your web and app solutions remain secure, functional, and up to date. As part of our post-launch services, we offer 30 days of free support and maintenance to ensure smooth operation after project completion. After the initial 30-day period, ongoing support and maintenance will be provided under a subscription-based model or as an on-demand service based on the terms outlined below.</p>

                    <h2>1. Overview of Support and Maintenance Services</h2>
                    <p>We provide comprehensive support and maintenance services for websites and apps developed by Obiztec. Our goal is to ensure optimal performance, security, and stability while assisting with technical issues and updates.</p>

                    <h2>2. Free 30-Day Maintenance and Support</h2>
                    <p className='!mb-2'>For 30 days after the project launch, we provide complimentary maintenance and support, which includes:</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>Bug Fixes – Resolving issues that arise after launch.</li>
                        <li>Security Updates – Applying necessary patches to protect against vulnerabilities.</li>
                        <li>Software and Platform Updates – Updating third-party plugins, CMS, or integrations.</li>
                        <li>Performance Monitoring – Ensuring optimal website and app speed and uptime.</li>
                        <li>Basic Content Updates – Minor text, image, and link changes.</li>
                    </ul>

                    <p>After the free period expires, clients must subscribe to a maintenance plan or purchase individual support services.</p>

                    <h2>3. Maintenance Services After Free Period</h2>
                    <p>Once the 30-day free maintenance period ends, clients can subscribe to an ongoing maintenance plan or request one-time support services as needed.</p>
                    <p className='!mb-2'>Subscription-Based Maintenance Plans (Auto-Renews Monthly)</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>Lite Plan – $300 per month (Basic updates, security patches, backups, and minor fixes)</li>
                        <li>Essential Plan – $400 per month (Includes everything in Lite, performance monitoring, SEO audits, up to six content updates)</li>
                        <li>Elite Plan – $550 per month (Includes everything in Essential, priority support, ten content updates, weekly backups)</li>
                        <li>Premium Plan – $750 per month (Includes everything in Elite, unlimited updates, advanced SEO, daily backups) One-Time Maintenance Services (Billed Per Request)</li>
                    </ul>
                    <p>For clients not on a subscription, one-time maintenance services are available at hourly or fixed rates.</p>

                    <h2>4. Support Services</h2>
                    <p className='!mb-2'>We offer ongoing technical support based on the selected plan or as an individual service.</p>
                    <ul className="list-disc pl-6 mb-3">  
                        <li>Technical Assistance – Resolving website and app issues.</li>
                        <li>User Queries – Addressing functionality questions.</li>
                        <li>Feature Enhancements – Adjustments or minor upgrades based on client needs.</li>
                    </ul>

                    <p>Priority support is only available in Elite and Premium maintenance plans.</p>

                    <h2>5. Service Level Agreement (SLA)</h2>
                    <p className='!mb-2'>Our support response and resolution times are structured as follows:</p>

                    <table className='w-full border text-left'>
                        <tr>
                            <th className='px-4 py-2 border'>Service Level</th>
                            <th className='px-4 py-2 border'>Response Time</th>
                            <th className='px-4 py-2 border'>Resolution Time</th>
                        </tr>
                        <tr>
                            <td className='px-4 py-2 border'>Standard Support (Lite & Essential Plans)</td>
                            <td className='px-4 py-2 border'>24-48 business hours</td>
                            <td className='px-4 py-2 border'>3-5 business days</td>
                        </tr>
                        <tr>
                            <td className='px-4 py-2 border'>Priority Support (Elite & Premium Plans)</td>
                            <td className='px-4 py-2 border'>12-24 business hours</td>
                            <td className='px-4 py-2 border'>1-3 business days</td>
                        </tr>
                        <tr>
                            <td className='px-4 py-2 border'>Emergency Support (Critical Issues Only)</td>
                            <td className='px-4 py-2 border'>6-12 hours</td>
                            <td className='px-4 py-2 border'>Same-day resolution if possible</td>
                        </tr>
                    </table> 

                    <h2>6. Exclusions from Maintenance Services</h2>
                    <p className='!mb-2'>The following services are not included in any maintenance plan and require a separate contract or custom service agreement:</p>
                    <ul className="list-disc pl-6">  
                        <li>Major Redesigns – Full layout, structure, or UX changes.</li>
                        <li>Third-Party Issues – Problems related to third-party software, hosting, or external services.</li>
                        <li>Custom Development – Advanced features or custom coding beyond the original project scope.</li>
                        <li>Data Recovery – Data loss due to third-party hosting, security breaches, or client errors.</li>
                    </ul>

                    <h2>7. Billing and Payment for Maintenance Services</h2>
                    <ul className="list-disc pl-6">  
                        <li>Free Period: The first 30 days of support are free.</li>
                        <li>Subscription Payments: Billed monthly on the same date as the initial subscription.</li>
                        <li>One-Time Requests: Invoiced based on work performed.</li>
                        <li>Late Payments: A five-day grace period applies before late fees or service suspension.</li>
                    </ul>

                    <h2>8. Subscription Cancellation Policy</h2>
                    <ul className="list-disc pl-6">  
                        <li>Commitment Periods: Maintenance subscriptions require a minimum commitment of two, three, four, or six months before cancellation.</li>
                        <li>Cancellation After Commitment: Clients can cancel anytime with at least ten days’ notice before the next billing cycle.</li>
                        <li>No Refunds: Payments for ongoing maintenance services are non-refundable once billed.</li>
                    </ul>

                    <h2>9. Termination of Maintenance Services</h2>
                    <ul className="list-disc pl-6">  
                        <li>Obiztec or the Client may terminate the agreement with 30 days’ written notice.</li>
                        <li>Any outstanding invoices must be settled before termination takes effect.</li>
                        <li>Clients who terminate maintenance services may require a new contract to reinitiate services.</li>
                    </ul>

                    <h2>10. Governing Law & Dispute Resolution</h2>
                    <p className='!mb-2'>This Support and Maintenance Policy is governed by the laws of the State of Texas, USA.</p>
                    <ul className="list-disc pl-6">  
                        <li>Disputes must first go through mediation.</li>
                        <li>If mediation fails, disputes will be resolved via arbitration in Texas.</li>
                        <li>Clients waive their right to class-action lawsuits against Obiztec.</li>
                    </ul>

                    <h2>11. Changes to the Maintenance Policy</h2>
                    <p className='!mb-2'>Obiztec reserves the right to update this policy at any time.</p>
                    <ul className="list-disc pl-6">  
                        <li>Updates will be posted on this page and take effect immediately.</li>
                        <li>Clients are encouraged to review this policy periodically.</li>
                    </ul>

                    <h2>12. Contact Information</h2>
                    <p className='!mb-2'>For maintenance plan inquiries or support requests, please contact us:</p>

                    <p>
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731
                    </p>

                    <p>By using our support and maintenance services, you acknowledge that you have read, understood, and agreed to this policy.</p>

                    
                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default SupportMaintenancePolicy