import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home_row">
                   <Product 
                   id="12321341"
                   title='The Lean Startup' price={29.99}  
                   image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={3}/>
                   <Product
                    id="49538094"
                    title="kenwood kMix Stand Mixer for baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61TAAzUL15L._AC_UY327_FMwebp_QL65_.jpg"
                   />


                </div>
                <div className="home_row">
                   <Product
                    id="4903850"
                    title="Samsung LC49RG90SSOLUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"

                   />
                   <Product
                    id="23445930"
                    title="Amazo nEcho (3 rd Generation) | Smart Speaker With Alexa,Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"

                   />
                   <Product
                    id="3254354345"
                    title="New Apple ipad-Pro(12.9-inch,Wi-fi,128 GB)-Silver(4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                   />


                </div>
                <div className="home_row">
                    <Product
                    id="90829332"
                    title="Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
                    price={1094.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81U0lF7DJHS._AC_UL640_QL65_.jpg"
                    />

                    
                </div>
            </div>
        </div>
    )
}

export default Home
