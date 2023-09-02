import React from 'react'

const Hero = () => {
  return (
   <main className="Hero container">

    <div div className="HeroImage">
      <img src="/images/shoe_image.png" alt="" />
    </div>

    <div className="HeroContent">
        <h1>NIKE<br/>JUST DO IT.</h1>
        <p>Willpower knows no obstacles. Find your greatness. Strike fear or get struck. </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
        </div>

        <div className="shop-icons">
          <a href="https://www.flipkart.com/mens-footwear/sports-shoes/nike~brand/pr?sid=all%2Cosp%2Ccil%2C1cu&page=13" target='blank'><img src="/images/flipkart.png" alt="" /></a>
          <a href="https://www.amazon.com/stores/page/1368A17F-31CB-40BB-8FF0-ED3D49148DBE" target='blank'><img src="/images/amazon.png" alt="" /></a>
        </div>
    </div>

   </main>
  )
}

export default Hero