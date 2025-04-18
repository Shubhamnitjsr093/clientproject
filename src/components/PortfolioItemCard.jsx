import React from 'react'

const PortfolioItemCard = ({ item }) => {
  return (
    <>
        <div className="portfolio__card bg-primary-foreground p-5 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-500 hover:shadow-sm hover:rounded-sm">
            <div className="body"> 
                <div className="project">
                    <div className="image-bg-port">
                        <div className="image-shop-scroll" style={{backgroundImage: `url(${item.image})`}}></div>
                    </div>
                    {/* <img 
                        src={item.image}
                        alt="Portfolio image" 
                        className='w-full h-auto'
                    />  */}
                </div>
            </div>
            <div className="space-y-4 lg:space-y-5 px-3 pb-4"> 
                <h3 className="mt-5 md:mt-7 text-xl lg:text-2xl font-normal text-dark">{item.title}</h3>
                <p className='text-sm md:text-base tracking-wider text-dark'>
                    <span className="font-semibold">Features:</span> {item.features}
                </p>
                <p className='text-sm md:text-base tracking-wider text-dark'>
                    <span className="font-semibold">Platform:</span> {item.platform}
                </p>
            </div>
        </div>
    </>
  )
}

export default PortfolioItemCard