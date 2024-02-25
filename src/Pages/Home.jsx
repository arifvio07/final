import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from '../Layout'
// import DarkMode from '../features/counter/DarkMode'
import banner1 from '../images/banner-1.jpg'
import banner2 from '../images/clothes.jpg'
import banner3 from '../images/banner-women.jpg'
import product1 from '../images/bag1.jpg'
import product2 from '../images/dress2.jpg'
import product3 from '../images/hoodie7.jpg'
import productMan1 from '../images/product-man.jpg'
import productMan2 from '../images/jacket4.jpg'
import productMan3 from '../images/suit5.jpg'
import productWomen1 from '../images/dress1.jpg'
import productWomen2 from '../images/product-women-2.jpg'
import productWomen3 from '../images/jacket8.jpg'
import StickyBar from '../features/counter/DarkMode';

export default function Home() {
  return (
    <Layout>
        <StickyBar/>
    <section>
        <div className="containe-fluid">
        <div className="content">
            <img src={banner1} alt=""/>
        </div>
        <div className="text-content">
            <h1 className="display-4">Change Your Day</h1>
            <h1 className="display-4">With My Sneaker!</h1>
            <p>Tingkatkan Gaya Anda dengan Nike Jordan. Berani, Ikonik, Tak Terlupakan. #JumpmanStyle</p>
            <button>Shop Now!</button>
        </div>
        <div>
        <div className="title-new">
            <h3>New Arrival</h3>
        </div>
        <div className="new-container">
            <div className="new-content">
                <div className="new-img">
                    <img src={product1} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Galeh Bag</h6>
                    <p>new style for you to explore</p>
                    <p>Rp.10.000.000</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={product2} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Galeh Dress</h6>
                    <p>new style for you to explore</p>
                    <p>Rp.4.000.000</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={product3} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Hoodie 1.0</h6>
                    <p>new style for you to explore</p>
                    <p>Rp.7.000.000</p>
                </div>
            </div>
        </div>
        <div className="banner">
            <img src={banner2} alt=""/>
        </div>
        <div className="title-new">
            <h3>Man Style</h3>
        </div>
        <div className="new-container">
            <div className="new-content">
                <div className="new-img">
                    <img src={productMan1} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Sneakers x Galeh</h6>
                    <p>Rp.10.000.000</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={productMan2} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Galeh Jacket</h6>
                    <p>Rp.4.000.000</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={productMan3} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Galeh SUIT</h6>
                    <p>Rp.7.000.000</p>
                </div>
            </div>
        </div>
        <div className="banner">
            <img src={banner3} alt=""/>
        </div>
        <div className="title-new">
            <h3>Women Style</h3>
        </div>
        <div className="new-container">
            <div className="new-content">
                <div className="new-img">
                    <img src={productWomen1} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Dress by Galeh</h6>
                    <p>Rp.989.766</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={productWomen2} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Nike Air Max</h6>
                    <p>Rp.4.000.000</p>
                </div>
            </div>
            <div className="new-content">
                <div className="new-img">
                    <img src={productWomen3} alt=""/>
                </div>
                <div className="new-info">
                    <h6>Jacket By Galeh</h6>
                    <p>Rp.1.840.000</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </Layout>
  )
}
