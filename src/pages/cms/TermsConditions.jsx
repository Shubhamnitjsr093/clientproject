import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Terms and Conditions"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Terms and Conditions</p>
                    <p>Last Updated: May 10th 2025</p>
                    <p>These Terms and Conditions (“Terms”) govern your use of www.obiztec.com (“Site”) and the services provided by Obiztec (“we,” “our,” “us”). By accessing or using the Site and our services, you agree to these Terms. If you do not agree, please refrain from using the Site.</p>

                    <h2>1. Services Provided</h2>
                    <p>Obiztec provides a range of digital services, including but not limited to:</p>
                    <ul className="list-disc pl-6 mb-1">  
                        <li>Web & App Development</li>
                        <li>Digital Marketing (SEO, social media, email marketing, paid ads)</li>
                        <li>Branding & Graphic Design</li>
                        <li>Project Management Solutions</li>
                        <li>Ongoing Website & App Maintenance</li>
                    </ul>
                    <p>For details on each service, visit the respective pages of the Site.</p>

                    <h2>2. Use of the Website</h2>
                    <p>You agree to use the Site for lawful purposes only. You may not:</p>
                    <ul className="list-disc pl-6">  
                        <li>Engage in illegal activities</li>
                        <li>Upload or transmit harmful code (viruses, malware)</li>
                        <li>Engage in harassment, offensive conduct, or spam activities</li>
                    </ul>

                    <h2>3. Account Creation & Security</h2>
                    <p>To access certain services, you may need to create an account. You are responsible for maintaining account security and must notify us immediately of any unauthorized use.</p>
                    <p>By creating an account, you agree to provide accurate, up-to-date information.</p>

                    <h2>4. Payments & Subscriptions</h2>
                    <div className="pl-6 md:pl-7">
                        <h3>4.1 Payment Terms</h3>
                        <ul className="list-disc pl-6">  
                            <li>Payments are processed through designated gateways (Stripe, PayPal, etc.).</li>
                            <li>Certain services require full upfront payment or milestone-based payments.</li>
                            <li>Subscription plans require recurring payments according to the selected billing cycle.</li>
                        </ul>

                        <h3>4.2 Subscription Commitment & Billing</h3>
                        <ul className="list-disc pl-6">  
                            <li>Minimum commitment: [2 / 3 / 4 / 6] months depending on the plan.</li>
                            <li>After the commitment period, subscriptions auto-renew monthly unless canceled.</li>
                            <li>Cancellations must be requested at least 10 days before the next billing cycle.</li>
                            <li>Modification requests (upgrades, downgrades, pauses) must be made at least 7 days before renewal.</li>
                        </ul>

                        <h3>4.3 Late Payments & Service Suspension</h3>
                        <ul className="list-disc pl-6">  
                            <li>Failed payments will have a 5-day grace period before a late fee is applied.</li>
                            <li>Services may be suspended if payment is not received within this period.</li>
                        </ul> 
                    </div>

                    <h2>5. Copyright & Intellectual Property</h2>
                    <div className="pl-6 md:pl-7">
                        <h3>5.1 Ownership of Content</h3>
                        <p>All content on the Site, including text, graphics, logos, images, software, and code, is the exclusive property of Obiztec or its content suppliers and is protected by U.S. and international copyright laws.</p>

                        <p>Users may not:</p>
                        <ul className="list-disc pl-6">  
                            <li>Copy, modify, distribute, or reproduce any content from the Site without prior written consent from Obiztec.</li>
                            <li>Use Obiztec’s trademarks, brand names, or copyrighted materials for commercial purposes without permission.</li>
                        </ul>

                        <h3>5.2 User-Generated Content</h3>
                        <p>By submitting or posting any content (e.g., feedback, reviews, or other submissions) on the Site, you grant Obiztec a non-exclusive, royalty-free, worldwide license to use, copy, modify, and distribute such content for marketing or service improvements.</p>

                        <h3>5.3 Copyright Infringement & DMCA Compliance</h3>
                        <p>If you believe any content on the Site infringes your copyright, you may file a Digital Millennium Copyright Act (DMCA) notice by contacting:</p> 
                        <p>
                            Email: copyright@obiztec.com <br />
                            Address: Obiztec, 5900 Balcones Drive #24285, Austin, TX 78731
                        </p>

                        <p className='!mb-1'>Include:</p>
                        <ul className="list-disc pl-6 mb-2">  
                            <li>1. A description of the copyrighted work.</li>
                            <li>2. A statement of good faith belief that the use is unauthorized.</li>
                            <li>3. Contact details.</li>
                            <li>4. A sworn statement confirming the accuracy of the complaint.</li>
                        </ul>
                        <p>If a valid claim is received, Obiztec will investigate and may remove infringing content.</p>
                    </div>
                    

                    <h2>6. Disclaimer of Warranties</h2>
                    <p className='!mb-2'>Obiztec provides services “as is” without guarantees of:</p>
                    <ul className="list-disc pl-6 mb-2">  
                        <li>Increased website traffic</li>
                        <li>Improved search engine rankings</li>
                        <li>Business revenue growth</li>
                    </ul>
                    <p>SEO, digital marketing, and business outcomes depend on various external factors beyond our control.</p>

                    <h2>7. Limitation of Liability</h2>
                    <p className='!mb-2'>To the maximum extent permitted by law, Obiztec shall not be liable for:</p>
                    <ul className="list-disc pl-6">  
                        <li>Indirect, incidental, or consequential damages</li>
                        <li>Loss of profits, data, or business opportunities</li>
                        <li>Errors, disruptions, or downtime affecting service availability</li>
                    </ul>

                    <h2>8. Indemnification</h2>
                    <p className='!mb-2'>You agree to indemnify and hold harmless Obiztec, its officers, employees, and contractors from any claims or liabilities arising from:</p>
                    <ul className="list-disc pl-6">  
                        <li>Your use of our services</li>
                        <li>Your violation of these Terms</li>
                        <li>Third-party claims due to your actions</li>
                    </ul>

                    <h2>9. Refund & Cancellation Policy</h2>
                    <p className='!mb-2'>Refunds and cancellations are subject to our <Link to="/refund-policy" className='text-primary_dark font-semibold underline hover:no-underline'>Refund Policy.</Link></p>
                    <ul className="list-disc pl-6">  
                        <li>Deposits and milestone payments are non-refundable.</li>
                        <li>Subscription refunds apply only if the service has not started for that billing cycle.</li>
                        <li>No refunds for completed work or third-party fees (hosting, ad spend, software).</li>
                    </ul>

                    <h2>10. Governing Law & Dispute Resolution</h2>
                    <ul className="list-disc pl-6">  
                        <li>These Terms are governed by the laws of the State of Texas, USA.</li>
                        <li>Disputes shall first be addressed through mediation.</li>
                        <li>If mediation fails, disputes shall be resolved through arbitration in Texas.</li>
                        <li>Users waive the right to class-action lawsuits against Obiztec.</li>
                    </ul>

                    <h2>11. Changes to Terms</h2>
                    <p>We reserve the right to update these Terms at any time. Updates take effect immediately upon posting. Continued use of our services implies acceptance of the revised Terms.</p>

                    <h2>12. Contact Information</h2>
                    <p>For inquiries or concerns, contact us at:</p>
                    <p>
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Address: 5900 Balcones Drive #24285, Austin, TX 78731
                    </p>

                    <p>By using our Site and services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>




 
                    
                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default TermsConditions