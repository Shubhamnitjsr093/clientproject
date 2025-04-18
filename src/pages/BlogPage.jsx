import PageHeader from '@/components/PageHeader'
import React from 'react'
import HeroImage from "@/assets/images/common/blog-page-header-banner.webp";

import WebDevImg from "@/assets/images/common/web-dev.webp"; 
import ServiceList from '@/components/ServiceList';

const blogData = [
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    },
    {
        title: 'Lorem ipsum sit',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        image: WebDevImg,
    }, 
]

const BlogPage = () => {
    return (
        <>
            <PageHeader
                image={HeroImage}
                title={"Our Blog"}
                titleClassName="text-center mb-0 md:mb-0"
                pageType="cmsheader"
            />

            <ServiceList
                serviceData={blogData}
                page='blog'
            />
        </>
    )
}

export default BlogPage