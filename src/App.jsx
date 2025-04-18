 
import { createBrowserRouter, Router, RouterProvider, } from 'react-router-dom'; 
import Layout from './components/layout/Layout';   
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import OurApproach from './pages/OurApproach';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import PricingPage from './pages/PricingPage';
import ReviewPage from './pages/ReviewPage';
import WebDevPage from './pages/WebDevPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import TermsPage from './pages/cms/TermsPage';
import GetQuotePage from './pages/GetQuotePage';
import ThankyouPage from './pages/ThankyouPage';
import QuestionPage from './pages/QuestionPage';
import Ecommerce from './pages/services/Ecommerce';
import Shophify from './pages/services/Shophify';
import Sitemaintance from './pages/services/Sitemaintance';
import AppDev from './pages/services/AppDev';
import Appmaintenance from './pages/services/Appmaintenance';
import Seo from './pages/services/Seo';
import Googleads from './pages/services/Googleads';
import SocialMedia from './pages/services/SocialMedia';
import Emailmarketing from './pages/services/Emailmarketing';
import Newsletters from './pages/services/Newsletters';
import Branding from './pages/services/Branding';
import PrivacyPolicy from './pages/cms/PrivacyPolicy';
import CookiePolicy from './pages/cms/CookiePolicy';
import DisclaimerPolicy from './pages/cms/DisclaimerPolicy';
import PaymentPolicy from './pages/cms/PaymentPolicy';
import RefundPolicy from './pages/cms/RefundPolicy';
import SubscriptionTermsConditions from './pages/cms/SubscriptionTermsConditions';
import SupportMaintenancePolicy from './pages/cms/SupportMaintenancePolicy';
import TermsConditions from './pages/cms/TermsConditions';
import FaqPage from './pages/FaqPage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      children: [
        { path: '/', element: <Home /> },   
        { path: '/about-us', element: <AboutPage /> },   
        { path: '/our-approach', element: <OurApproach /> },   
        { path: '/contact-us', element: <ContactPage /> },   
        { path: '/services', element: <ServicePage /> },   
        { path: '/pricing', element: <PricingPage /> },   
        { path: '/reviews', element: <ReviewPage /> },   
        { path: '/web-dev', element: <WebDevPage /> },   
        { path: '/e-comerce', element: <Ecommerce /> },   
        { path: '/shophify', element: <Shophify /> },   
        { path: '/site-maintenance', element: <Sitemaintance /> },   
        { path: '/app-dev', element: <AppDev /> },   
        { path: '/app-maintenance', element: <Appmaintenance /> },   
        { path: '/seo', element: <Seo /> },   
        { path: '/google-ads', element: <Googleads /> },   
        { path: '/social-media', element: <SocialMedia /> },   
        { path: '/email-marketing', element: <Emailmarketing /> },   
        { path: '/newsletters', element: <Newsletters /> },   
        { path: '/branding', element: <Branding /> },   

        { path: '/portfolios', element: <PortfolioPage /> },   
        { path: '/blog', element: <BlogPage /> },   
        { path: '/blog-detail', element: <BlogDetailPage /> },   
        { path: '/get-quote', element: <GetQuotePage /> },   
        { path: '/thank-you', element: <ThankyouPage /> },   
        { path: '/question', element: <QuestionPage /> },  
    
        { path: '/privacy-policy', element: <PrivacyPolicy /> },   
        { path: '/terms-conditions', element: <TermsConditions /> },   
        { path: '/cookie-policy', element: <CookiePolicy /> },   
        { path: '/disclaimer', element: <DisclaimerPolicy /> },   
        { path: '/payment-policy', element: <PaymentPolicy /> },   
        { path: '/refund-policy', element: <RefundPolicy /> },   
        { path: '/subscription-conditions', element: <SubscriptionTermsConditions /> },   
        { path: '/support-maintenance-policy', element: <SupportMaintenancePolicy /> },   

        { path: '/faq', element: <FaqPage /> },   
      ]
    },
    {
      path: '*',
      element:<NotFound />, 
    },
     
    
  ]);

  return (
    <>
       <RouterProvider router={router} /> 
    </>
  )
}

export default App
