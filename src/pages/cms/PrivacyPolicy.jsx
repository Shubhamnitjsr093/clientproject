import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";

const PrivacyPolicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Privacy Policy"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Privacy Policy</p>
                    <p>Last Updated: May 10th  2025</p>
                    <p>Obiztec (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website, www.obiztec.com (“Site”), and our services.</p>
                    <p>By accessing or using our Site and services, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please refrain from using our Site.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <div className="pl-6">
                        <h3>a) Personal Information</h3>
                        <p className='!mb-1'>We collect personal details when you:</p>
                        <ul className="list-disc pl-6"> 
                            <li>Sign up for an account</li>
                            <li>Purchase a service or subscription</li>
                            <li>Contact us for support or inquiries</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Fill out forms on our Site</li>
                        </ul>

                        <p className="mt-5 !mb-1">This may include your:</p>
                        <ul className="list-disc pl-6"> 
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Business name</li>
                            <li>Billing address</li>
                            <li>Payment details (processed securely by third-party payment providers)</li>
                        </ul>

                        <h3>b) Non-Personal Information</h3>
                        <p className='!mb-1'>We automatically collect data about how you use our Site, including:</p>
                        <ul className="list-disc pl-6"> 
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Website usage (pages visited, time spent on pages)</li>
                            <li>Cookies and tracking technologies (see Section 7)</li>
                        </ul>

                        <h3>c) Third-Party Integrations</h3>
                        <p className='!mb-1'>If you use third-party integrations (e.g., Google Analytics, payment processors, social media logins), we may collect data through those services, subject to their privacy policies.</p> 
                    </div>

                    <h2>2. How We Use Your Information</h2>
                    <p className='!mb-1'>We use the information we collect for:</p>
                    <ul className="list-disc pl-6">  
                        <li>Service Delivery: Processing orders, subscriptions, and providing requested services</li>
                        <li>Customer Support: Responding to inquiries, troubleshooting issues</li>
                        <li>Marketing & Communication: Sending newsletters, promotions, or important updates (you can opt-out anytime)</li>
                        <li>Security & Fraud Prevention: Detecting, preventing, and addressing security threats</li>
                        <li>Analytics & Improvement: Understanding how users interact with our Site to enhance functionality and user experience</li> 
                    </ul>

                    <h2>3. Subscription Services & Automatic Payments</h2>
                    <p className='!mb-1'>For subscription-based services:</p>
                    <ul className="list-disc pl-6 mb-2">   
                        <li>You agree to automatic billing for the agreed commitment period (2, 3, 4, or 6 months).</li>
                        <li>Your subscription will automatically renew unless canceled before the next billing cycle.</li>
                        <li>You can cancel anytime after your commitment period with a 10-day notice before your next billing date.</li>
 
                    </ul>
                    <p>We do not store credit card information. Payments are securely processed by third-party payment providers.</p>

                    <h2>4. How We Share Your Information</h2>
                    <p className='!mb-1'>We do not sell or rent your personal information. However, we may share your information with:</p>
                    <ul className="list-disc pl-6 mb-2">    
                        <li>Service Providers: Third-party vendors (e.g., payment processors, email marketing platforms) that help us operate our business</li>
                        <li>Legal Compliance: If required by law, we may disclose data to comply with legal obligations or enforce our policies</li>
                        <li>Business Transfers: If Obiztec undergoes a business sale, merger, or acquisition, customer data may be transferred</li>

                    </ul>
                    <p>All third-party service providers are contractually obligated to protect your data.</p>

                    <h2>5. Data Security</h2>
                    <p className='!mb-1'>We implement security measures to protect your data, including:</p>
                    <ul className="list-disc pl-6 mb-2">    
                        <li>SSL encryption for data transmission</li>
                        <li>Secure access controls for sensitive data</li>
                        <li>Regular security audits and updates</li> 
                    </ul>
                    <p>However, no method of data transmission over the internet is 100% secure. By using our services, you acknowledge and accept this risk.</p>

                    <h2>6. Data Retention</h2>
                    <p className='!mb-1'>We retain personal data:</p>
                    <ul className="list-disc pl-6 mb-2">     
                        <li>As long as necessary for providing services and fulfilling transactions</li>
                        <li>For legal or compliance purposes (e.g., tax regulations, record-keeping)</li> 
                    </ul>
                    <p>If you wish to delete your data, you can submit a request via email (contact@obiztec.com).</p>

                    <h2>7. Cookies & Tracking Technologies</h2>
                    <p className='!mb-1'>We use cookies and tracking technologies to enhance user experience, analyze traffic, and improve services. <br />Types of cookies we use:</p>
                    <ul className="list-disc pl-6 mb-2"> 
                        <li>Essential Cookies: Necessary for website functionality</li>
                        <li>Performance Cookies: Help us analyze website usage and improve features</li>
                        <li>Marketing Cookies: Used for personalized advertising and retargeting</li> 
                    </ul>
                    <p>You can manage cookie settings through your browser preferences.</p>

                    <h2>8. Your Rights & Choices</h2>
                    <p className='!mb-1'>You have the right to:</p>
                    <ul className="list-disc pl-6 mb-2"> 
                        <li>Access, update, or correct your personal data</li>
                        <li>Request data deletion (subject to legal limitations)</li>
                        <li>Opt-out of marketing emails (unsubscribe link provided in emails)</li>
                        <li>Restrict processing of your data under certain circumstances</li> 
                    </ul>
                    <p>To exercise these rights, contact us at contact@obiztec.com.</p>

                    <h2>9. Third-Party Links & Services</h2> 
                    <p>Our Site may contain links to third-party websites. Obiztec is not responsible for the privacy practices of external sites. We encourage users to review their privacy policies.</p>

                    <h2>10. Compliance with Global Privacy Laws</h2> 
                    <p className=' !mb-1'>Obiztec complies with applicable privacy laws, including:</p>
                    <ul className="list-disc pl-6 mb-2"> 
                        <li>General Data Protection Regulation (GDPR) (EU users): You have rights regarding data access, correction, deletion, and portability.</li>
                        <li>California Consumer Privacy Act (CCPA) (California residents): You can request details on how we collect and share your data.</li>
                        <li>Children’s Online Privacy Protection Act (COPPA): We do not knowingly collect data from children under 13.</li>
                    </ul>

                    <h2>11. Changes to This Policy</h2> 
                    <p className=' !mb-1'>We may update this Privacy Policy periodically. Changes will be posted on this page with the updated Last Updated date.</p>
                    <p>By continuing to use our Site, you acknowledge and accept any updates.</p>
                    

                    <h2>12. Contact Us</h2> 
                    <p className=' !mb-1'>For questions about this Privacy Policy or to exercise your rights, please contact:</p>
                    <p>
                        Email: contact@obiztec.com <br />
                        Phone: +1 (325) 275-5589 <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731 
                    </p>
                    
                    <p>By using our Site and services, you confirm that you have read and agree to this Privacy Policy.</p>
                    
 

                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default PrivacyPolicy