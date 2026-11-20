import '../css/ecom.css';
import '../assets/Cards.css';

import Cards from '../done/Cards.jsx';

function Header() {
  return (
    <>
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-500">
          <a href="#">ShopEase</a>
        </div>
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button className="absolute right-2 top-2 text-gray-500 hover:text-blue-500">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Deals
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fas fa-user text-xl"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500 relative">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </a>
        </div>
      </div>

    </header>
    <AboutPage/>
    <Cards/>
    <Footer/>
    </>
  );
}
function AboutPage() {
return (
  <>
    <section className='p-8 m-12 '>
      <h1></h1>
      <p className='text-lg text-justify p-3'>Welcome to <span className='font-semibold text-blue-800 text-lg leading-relaxed'>Shopease</span>, your one-stop destination for premium-quality products. We are dedicated to offering the best shopping experience with an extensive range of items tailored to meet your every need.</p>
      <p className='text-lg text-justify p-3'>Our story began with a passion for providing products that bring value and joy to peoples lives. Today, [Your Store Name] has grown into a trusted platform that empowers shoppers to discover, connect, and enjoy. Every product we offer reflects our commitment to quality and integrity, and every customer we serve becomes a part of our story. Together, let redefine shopping.</p>
      <p className='text-lg text-justify p-3'>Welcome to <span className='font-semibold text-blue-800 text-lg leading-relaxed'>Shopease</span>, your one-stop destination for premium-quality products. We are dedicated to offering the best shopping experience with an extensive range of items tailored to meet your every need.</p>
      <div>
      <ul className="list-[checkmark] p-6">
            <li>Customer First: Your satisfaction is our priority.</li>
            <li>Quality Assured: Every product we sell is handpicked to meet the highest standards.</li>
            <li>Innovation: Constantly evolving to bring you the latest and most efficient shopping solutions.</li>
            <li>Sustainability: Committed to eco-friendly practices and reducing our carbon footprint.</li>
          </ul>
      </div>

    </section>
  </>
)
}
function Footer(){
return(
    <>
    <footer className='footer-div'>
       <div className="foot-list">
                <h3>About Us</h3>
                <p> ShopEase is your one-stop shop for the latest trends, exclusive deals, and amazing offers.</p>
               
        </div>
       <div className="foot-list">
            <h3>Quick Links</h3>
            <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
            </ul>
       </div>
       <div className="foot-list">
            <h3>Customer Service</h3>
            <ul>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>
       </div>
       <div className="foot-list">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
       </div>
       <div className="foot-list">
                <div>
                   <a href="#"><img src="logo.png" alt="ShopEase logo" /></a>
                   <p>ShopEase, Inc.</p>
                   <p>123 Main St, City, State, 12345</p>
                   <p>Phone: (123) 456-7890</p>
                   <p>Email: info@shopease.com</p>
                </div>
            <p>© 2024 ShopEase. All rights reserved.</p>
       </div>
       <div className='foot-social'>
        <ul className='flex flex-row justify-center'>
          <li><a href="#">13<i className="fab fa-facebook"></i></a></li>
          <li><a href="#">2<i className="fab fa-twitter"></i></a></li>
          <li><a href="#">3<i className="fab fa-instagram"></i></a></li>
          <li><a href="#">4<i className="fab fa-youtube"></i></a></li>
          <li><a href="#">5<i className="fab fa-pinterest"></i></a></li>
          <li><a href="#">6<i className="fab fa-linkedin"></i></a></li>
        </ul>
       </div>

    </footer>
    </>
)
}
export default Header;
