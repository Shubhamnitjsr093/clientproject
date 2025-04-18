import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";
import { Link } from 'react-router-dom';

const DisclaimerPolicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Disclaimer"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Disclaimer</p>
                    <p>Last Updated: May 10th  2025</p>
                    <p>At Obiztec (www.obiztec.com), we take pride in providing high-quality services in web and app development, SEO, digital marketing, branding, consulting, and subscription-based website and app maintenance. The following Disclaimer outlines the limitations of our website and services. By accessing or using our site and services, you agree to the terms specified below.</p>

                    <h2>1. Accuracy of Content</h2>
                    <p>The information and materials presented on our website are intended for general informational purposes only. While we make every effort to ensure accuracy, we do not guarantee the completeness, reliability, or up-to-date nature of the content. Obiztec reserves the right to update or modify website content at any time without prior notice.</p>

                    <h2>2. No Professional Advice</h2>
                    <p>Any content, including blog posts, case studies, or materials on the website, is not intended to serve as legal, financial, or technical advice. Clients should consult with appropriate professionals for specific business or compliance matters.</p>

                    <h2>3. Service Availability, Performance & Subscriptions</h2>
                    <p>Obiztec offers both one-time and subscription-based services. While we aim for uninterrupted service, we do not guarantee that services will always be available, error-free, or free of disruptions.</p>

                    <p className='!mb-2'>Subscription-Based Services</p>
                    <ul className="list-disc pl-6">  
                        <li>Subscription services auto-renew at the end of each billing cycle unless canceled within the allowed cancellation period.</li>
                        <li>Clients are responsible for updating payment details to avoid service interruptions.</li>
                        <li>Failure to make timely payments may result in service suspension or termination.</li>
                    </ul>

                    <h2>4. Use of Third-Party Services</h2>
                    <p>Some services or functionalities on our website rely on third-party platforms (e.g., Stripe for payments, hosting providers). Obiztec is not responsible for any issues, errors, or disruptions caused by third-party providers.</p>

                    <h2>5. No Warranties</h2>
                    <p>All services and content on the Obiztec website are provided “as is” and “as available.” We make no warranties, express or implied, regarding:</p>

                    <ul className="list-disc pl-6 mb-2">  
                        <li>The accuracy or reliability of website content.</li>
                        <li>The fitness of our services for a particular purpose.</li>
                        <li>The uninterrupted or error-free operation of our services.</li>
                    </ul>
                    <p>No Guarantees on Service Outcomes</p>

                    <p className='!mb-2'>Obiztec does not guarantee specific results, such as:</p>
                    <ul className="list-disc pl-6 mb-2">  
                        <li>Increased website traffic.</li>
                        <li>Improved search engine rankings.</li>
                        <li>Business growth or financial success.</li>
                    </ul>
                    <p>Marketing, SEO, and business performance depend on multiple external factors beyond our control.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p className='!mb-2'>To the maximum extent permitted by law, Obiztec shall not be held liable for:</p>
                    <ul className="list-disc pl-6 mb-2">  
                        <li>Indirect, incidental, special, or consequential damages.</li>
                        <li>Loss of profits, data, or business opportunities.</li>
                        <li>Errors, disruptions, or downtime affecting service availability.</li>
                    </ul>
                    <p>Clients assume full responsibility for their use of our services.</p>

                    <h2>7. Client Responsibilities</h2>
                    <p>Clients must ensure they have the necessary rights, permissions, and licenses for any materials (text, images, videos, trademarks, etc.) submitted for projects. Obiztec is not liable for copyright or trademark disputes arising from client-provided content.</p>

                    <h2>8. Subscription Cancellations & Refunds</h2>
                    <ul className="list-disc pl-6 mb-2">  
                        <li>Subscription services require a minimum commitment period before cancellation is allowed.</li>
                        <li>After the commitment period, subscriptions may be canceled with a 10-day notice before the next billing date.</li>
                        <li>Payments are non-refundable once a billing cycle has started.</li>
                        <li>Failure to cancel in time will result in automatic renewal and charge for the next period.</li>
                    </ul>
                    <p>For full details, refer to our <Link to="/refund-policy" className='text-primary hover:text-secondary font-semibold underline hover:no-underline'>Refund Policy.</Link></p>

                    <h2>9. Third-Party Links</h2>
                    <p className='!mb-2'>Our website may contain links to third-party websites for convenience.</p>
                    <ul className="list-disc pl-6">  
                        <li>Obiztec does not endorse or take responsibility for the content, products, or services on external websites.</li>
                        <li>Users access third-party links at their own risk.</li>
                    </ul>

                    <h2>10. Indemnification</h2>
                    <p className='!mb-2'>You agree to indemnify, defend, and hold harmless Obiztec, its affiliates, officers, employees, and contractors from any claims, damages, losses, or legal fees arising from:</p>
                    <ul className="list-disc pl-6">  
                        <li>Your use of our services.</li>
                        <li>Your violation of these terms.</li>
                        <li>Your infringement of any third-party rights.</li>
                    </ul>

                    <h2>11. Governing Law & Dispute Resolution</h2>
                    <p className='!mb-2'>This Disclaimer is governed by the laws of the State of Texas, USA.</p>
                    <ul className="list-disc pl-6">  
                        <li>Any disputes shall first be attempted to be resolved through mediation.</li>
                        <li>If mediation fails, disputes shall be settled through arbitration in Texas.</li>
                        <li>Users waive their right to participate in class-action lawsuits against Obiztec.</li>
                    </ul>

                    <h2>12. Changes to This Disclaimer</h2>
                    <p className='!mb-2'>Obiztec reserves the right to modify this Disclaimer at any time.</p>
                    <ul className="list-disc pl-6 mb-2">  
                        <li>Updates will be posted on this page.</li>
                        <li>Changes take effect immediately upon posting.</li>
                    </ul>
                    <p>Users are encouraged to review this Disclaimer periodically.</p>

                    <h2>13. Contact Information</h2>
                    <p className='!mb-2'>For any questions regarding this Disclaimer, please contact us:</p>
                    <p>
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731
                    </p>
                    
                    <p>By continuing to use our website and services, you acknowledge that you have read, understood, and agreed to this Disclaimer.</p>
 

                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default DisclaimerPolicy