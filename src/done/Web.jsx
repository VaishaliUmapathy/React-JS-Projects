function Web(){
    return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Footer/>
    </>
    )
}
function Navbar(){
    return (
      <>
      
      <nav>
        <ul className="nav-list-items">
            <li id="">Home</li>
            <li id="">About</li>
            <li id=""> Services</li>
            <li id="">Contact</li>
        </ul>
      </nav>
      </>
    )
}
function Header() {
    return(
        <>
        <section>
        <h1>Welcome to Earring Elegance</h1>
        <p>Discover the perfect blend of style, craftsmanship, and elegance with our exclusive collection of earrings. Whether youre looking for timeless pearls, modern studs, or intricate designs, we have something for every occasion.</p>
        <ol className="ol-list-items">
            <li className="ol-items">Handcrafted Designs</li>
            <li className="ol-items">Affordable Luxury</li>
            <li className="ol-items">Curated for Every Occasion</li>
        </ol>
        <p>Explore our collections and add a touch of sparkle to your day. Your journey to stunning accessories begins here!</p>
        </section>
        </>
    )
}
function About(){
    return (
        <>
        <section>
        <h1>About Us</h1>
        <p>Earring Elegance is a family-owned business dedicated to providing high-quality, handcrafted earrings. We strive to create unique pieces that are both beautiful and functional, making them an essential addition to any outfit. Our team of skilled craftsmen work tirelessly to bring our products to life, ensuring that every earring is crafted with love and care.</p>
        <p>Our mission is to inspire and empower our customers with the best possible earrings, and we believe that through our commitment to quality and customer satisfaction, we can continue to make a difference in the world of accessories.</p>
        <p>At Earring Elegance, we believe jewelry is more than just an accessory—its an expression of individuality and style. Our mission is to bring you thoughtfully designed earrings that combine quality, comfort, and elegance at an affordable price.</p>
        <span>What We Offer</span>
        <ol className="ol-list-items">
            <li className="ol-items">Quality Craftsmanship</li>
            <li className="ol-items">Customer Satisfaction</li>
            <li className="ol-items">Innovation in Jewelry</li>
        </ol>
        <span> Why Choose Us?</span>
        <p>We take pride in delivering exceptional craftsmanship and timeless designs that resonate with your personal style. Each piece is curated to ensure you shine in your own unique way.

Join us on this journey to celebrate beauty and individuality, one earring at a time.</p>
</section>
        </>
    )
}
function Footer(){
        return (
          <>
          <section>
          <h1 style={{color:'purple',fontSize:'48px',textTransform:"uppercase"}}>Destination Dreamer</h1>
          <span>Turning your travel dreams into reality.</span>
          </section>
          </>
        )
        }
export default Web;
