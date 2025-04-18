import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/terms-policy-banner.webp";

const CookiePlocicy = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Cookies Policy"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <section className="py-12 md:py-16 lg:py-20 cms__content__wrapp terms">
                <div className="container">
                    <p className='font-semibold text-lg'>Obiztec Cookies Policy</p>
                    <p>Last Updated: May 10th 2025</p>
                    <p>Obiztec uses cookies on our website www.obiztec.com to enhance user experience, analyze site traffic, manage subscriptions, and provide personalized content and advertisements.</p>
                    <p>By using our website, you consent to the use of cookies as described in this policy.</p>

                    <h2>1. What Are Cookies?</h2>
                    <p>Cookies are small text files stored on your device when you visit websites. They help websites recognize your device and remember certain information to provide a more personalized experience.</p>

                    <h2>2. How We Use Cookies</h2>
                    <p className='!mb-2'>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6"> 
                        <li>Essential Cookies: Required for the website to function properly, including security features, subscription processing, and user authentication.</li>
                        <li>Performance Cookies: Collect anonymous data on website traffic and visitor interactions to improve performance.</li>
                        <li>Functional Cookies: Store user preferences, such as language selection, subscription details, and display settings.</li>
                    </ul>

                    <h2>3. Cookies for Subscription Management</h2>
                    <p className='!mb-2'>Obiztec uses cookies to manage subscription-based services, including:</p>
                    <ul className="list-disc pl-6 mb-2"> 
                        <li>Storing user login details for easy access to subscription accounts.</li>
                        <li>Remembering subscription preferences, such as billing cycles and service plans.</li>
                        <li>Providing automated reminders about upcoming renewals or payment due dates.</li>
                        <li>Personalizing content based on the selected subscription tier.</li>
                    </ul>

                    <p>Disabling cookies may affect the ability to manage and access your subscription account properly.</p>
                    <h2>4. Managing Cookies</h2>
                    <p className='!mb-2'>You can control or delete cookies through your browser settings. Most browsers allow you to:</p>
                    <ul className="list-disc pl-6 mb-5"> 
                        <li>Delete all cookies</li>
                        <li>Block all cookies</li>
                        <li>Allow only certain types of cookies</li>
                        <li>Set preferences for different websites</li>
                    </ul>
                    <p className='!mb-2'>For more information on managing cookies in your browser:</p>

                    <ul className="list-disc pl-6 mb-2"> 
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=en">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/en-us/HT201265">Safari </a></li>
                    </ul>
                    <p>Please note that disabling cookies may impact certain website functionalities, including access to your subscription account.</p>

                    <h2>5. Third-Party Cookies</h2>
                    <p className='!mb-2'>Some third-party services integrated into our website may use cookies. These may include:</p>
                    <ul className="list-disc pl-6 mb-2"> 
                        <li>Analytics tools (Google Analytics)</li>
                        <li>Subscription payment gateways (Stripe, PayPal)</li>
                        <li>Social media plugins (Facebook, LinkedIn, Twitter)</li>
                    </ul>
                    <p>Obiztec does not control these third-party cookies. Please refer to their respective privacy policies for more information.</p>

                    <h2>6. Changes to This Cookies Policy</h2>
                    <p>Obiztec reserves the right to update this Cookies Policy as needed to reflect changes in legal requirements, technology, or website functionality. Any updates will be posted with a revised “Last Updated” date.</p>

                    <h2>7. Contact Us</h2>
                    <p className='!mb-2'>For any questions regarding our Cookies Policy, please contact us:</p>
                    <p> 
                        Email: contact@obiztec.com <br />
                        Website: www.obiztec.com <br />
                        Business Address: <br />
                        Obiztec <br />
                        5900 Balcones Drive #24285 <br />
                        Austin, TX 78731
                    </p>

                    <p>By continuing to use our website, you acknowledge that you have read, understood, and agree to our Cookies Policy, including its use for managing subscriptions.</p>
                </div>
                {/* container */}
            </section>

 

        </>
    )
}

export default CookiePlocicy