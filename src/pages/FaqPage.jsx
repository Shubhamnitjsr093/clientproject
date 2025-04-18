import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/faq-banner.webp";
import QuestionIcon from "@/assets/images/icons/questions.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom';

const faqData = [
    {
        icon: QuestionIcon,
        title: 'General Questions',
        content: [
            {
                question: '1. What does Obiztec do?',
                answer: 'Obiztec is a tech solutions company that provides affordable, high-quality services including website development, mobile app development, branding, SEO, and digital marketing—tailored to help businesses grow and succeed online.'
            },
            {
                question: '2. Who do you work with?',
                answer: 'We work with entrepreneurs, small to medium-sized businesses, and growing brands—anyone looking to establish or scale their digital presence.'
            },
            {
                question: '3. Where is your company based?',
                answer: 'We are a registered business based in Austin, Texas, and we serve clients globally.'
            },
            {
                question: '4. How do I get started?',
                answer: <p>You can start by selecting your desired package from our <Link to={"/services"} className='text-primary'>Services Page</Link>, or by reaching out through our <Link to={"/services"} className='text-primary'>Get a Quote form</Link>. You can also email us directly at <Link to={"mailto:contact@obiztec.com"} className='text-primary'>contact@obiztec.com</Link>.
                We’ll guide you through the next steps and help you find the best solution for your needs.
                </p>
            },
        ]
    },
    {
        icon: QuestionIcon,
        title: 'Services & Pricing',
        content: [
            {
                question: '5. How much does a website/app cost?',
                answer: <>
                    <p>Our prices vary depending on the scope and complexity. Starting prices:</p>
                    <ul className="list-disc pl-4">
                        <li>Websites: $1,500+</li>
                        <li>E-Commerce: $1,800+</li>
                        <li>Mobile Apps: $3,900+</li> 
                    </ul>
                    <p>Visit our <Link to={"/pricing"} className='text-dark underline hover:text-primary'>Pricing Page</Link>  for package details.</p>
                </>
            },
            {
                question: '6. What’s included in your packages?',
                answer: <p>Our packages are clearly outlined by service on our <Link to={"/pricing"} className='text-dark underline hover:text-primary'>Services Page</Link> and include everything from strategy to design, development, testing, and launch support.</p>
            },
            {
                question: '7. Can I request a custom package?',
                answer: <>Absolutely. You can use our <Link to="/contact-us" className='text-dark underline hover:text-primary'>Get a Custom Quote</Link> form to tell us what you need, and we’ll tailor a plan just for you.</>
            },
            {
                question: '8. Do you offer one-time services or only subscriptions?',
                answer: <p>We offer both. You can choose between one-time development projects or ongoing services like SEO, maintenance, and ads management. Subscription details are outlined in our <Link to="/refund-policy" className='text-dark underline hover:text-primary'>Refund & Subscription Policy</Link>.</p>
            },
        ]
    },
    {
        icon: QuestionIcon,
        title: 'Timeline & Process',
        content: [
            {
                question: '9. How long does a website or app take to build?',
                answer: <> 
                    <ul className="list-disc pl-4">
                        <li>Basic Website: 4–6 weeks</li>
                        <li>E-Commerce: 6–8 weeks</li>
                        <li>Custom Web/App Development: 9–12 weeks or more based on features.</li> 
                    </ul> 
                </>
            },
            {
                question: '10. What’s the development process like?',
                answer: <p>We follow a structured process: <br />Discovery → Design → Development → Feedback → Testing → Launch → Support. You’ll be kept in the loop every step of the way.</p>
            },
            {
                question: '11. Will I be able to give feedback during development?',
                answer: <p>Yes. We use tools like Zoho Projects to manage communication, milestones, and approvals efficiently.</p>
            }, 
        ]
    },
    {
        icon: QuestionIcon,
        title: 'Support & Revisions',
        content: [
            {
                question: '12. Do you offer post-launch support?',
                answer: <> 
                    <p>Yes, each package includes 1–6 months of post-launch support. We also offer optional maintenance plans for continued care. See our <Link to="/support-maintenance-policy" className='text-dark underline hover:text-primary'>Support & Maintenance Policy</Link>.</p>
                </>
            },
            {
                question: '13. How many revisions are included?',
                answer: <p>Most packages include unlimited revisions during the development phase. Revisions after project completion may fall under a maintenance plan.</p>
            },
            {
                question: '14. Can I upgrade or downgrade my package?',
                answer: <p>Yes. You can upgrade or downgrade services based on your business needs at any time.</p>
            }, 
        ]
    },
    {
        icon: QuestionIcon,
        title: 'Payments & Refunds',
        content: [
            {
                question: '15. What payment methods do you accept?',
                answer: <> 
                    <p>We accept all major credit and debit cards via Stripe and PayPal, as well as bank transfers, ACH, and international wire payments.</p>
                    <p>For more details, please see our <Link to="/payment-policy" className='text-dark underline hover:text-primary'>Payment Policy</Link>.</p>
                </>
            },
            {
                question: '16. Do you offer refunds?',
                answer: <p>Our <Link to="/refund-policy" className='text-dark underline hover:text-primary'>Refund & Subscription Policy</Link> outlines when and how refunds are handled. We aim to be transparent and fair.</p>
            },
            {
                question: '17. Is there a contract?',
                answer: <p>Yes. All clients must agree to our <Link to="#" className='text-dark underline hover:text-primary'>Client Service Agreement</Link> before we begin work.</p>
            }, 
        ]
    },
    {
        icon: QuestionIcon,
        title: 'Technical Questions',
        content: [
            {
                question: '18. Will my website be mobile responsive?',
                answer: <> 
                    <p>Yes. All websites and apps are built to be fully responsive on all screen sizes.</p> 
                </>
            },
            {
                question: '19. Will my site be optimized for SEO?',
                answer: <p>Every site includes basic SEO setup. Advanced SEO is available via subscription. Learn more on our <Link to="/seo" className='text-dark underline hover:text-primary'>SEO Services Page</Link>.</p>
            },
            {
                question: '20. Can you integrate with CRM, email marketing, and other tools?',
                answer: <p>Absolutely. We offer integrations with platforms like Zoho, HubSpot, Mailchimp, Klaviyo, and more. Just mention your needs when requesting a quote.</p>
            }, 
        ]
    },
]


const FaqPage = () => {
    return (
        <>
            {/* header section */}
            <PageHeader
                image={HeroImage}
                title={<>
                    Frequently Asked Questions
                </>}
                titleClassName="text-center"
                className="pb-10 md:pb-20"
                pageType="faq"
            />

            <div className="py-12 md:py-16 lg:py-20">
                <div className="container">
                    <Accordion type="single" collapsible>
                        {
                            faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index + 1}`} className="px-5 py-2 border-dark">
                                    <AccordionTrigger className="text-left flex items-center gap-3">
                                        <div className="inline-flex gap-3 items-center">
                                            <img src={item.icon} alt="question" className="w-6 h-6" />
                                            <span className='text-dark text-xl md:text-2xl font-normal'>{item.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-8">
                                        {
                                            item.content.map((item, index) => (
                                                <div key={index} className="mb-4 text-sm md:text-base text-dark mt-5">
                                                    <h3 className="text-black text-lg md:text-xl font-normal mb-2">{item.question}</h3>
                                                    <div>{item.answer}</div>
                                                </div>
                                            ))
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                        
                    </Accordion>



                </div>
            </div>

        </>
    )
}

export default FaqPage