import   '../src/assets/travel.css'
function App(){
  const travelData = [
    {
      name: "Paris",
      img:'./effiel.png',
      description: "The city of lights, known for the Eiffel Tower and romantic charm.",
      country: "France",
      cost: 1500,
      popularAttraction: "Eiffel Tower",
      available: true,
    },
    {
      name: "Tokyo",
      img:'./tokyo.png',
      description: "A bustling city blending modern technology with traditional culture.",
      country: "Japan",
      cost: 2000,
      popularAttraction: "Shibuya Crossing",
      available: true,
    },
    {
      name: "New York",
      img:'./newyork.png',
      description: "The city that never sleeps, home to Times Square and Central Park.",
      country: "USA",
      cost: 1800,
      popularAttraction: "Statue of Liberty",
      available: false,
    },
    {
      name: "Sydney",
      img:'./sydney.png',
      description: "A coastal city known for the Sydney Opera House and stunning beaches.",
      country: "Australia",
      cost: 2200,
      popularAttraction: "Sydney Opera House",
      available: true,
    },
    {
      name: "Cape Town",
      img:'./capetown.png',
      description: "A vibrant city with Table Mountain and breathtaking landscapes.",
      country: "South Africa",
      cost: 1200,
      popularAttraction: "Table Mountain",
      available: true,
    },
    {
      name: "Venice",
      img:'./venice.png',
      description: "A city built on canals, offering gondola rides and rich history.",
      country: "Italy",
      cost: 1400,
      popularAttraction: "Grand Canal",
      available: false,
    },
  ];
  return (
    <div className="section">
      <Header />
      <Menu travelData={travelData} />
      <Footer />
    
    </div>
  );
}
function Header(){
  const style={fontSize:'48px',textAlign:"center",textTransform:"uppercase"}
return (
  <>
  <header className="header">
    <h1 style={style}>Destination Dreamer</h1>
    <p className="title">Turning your travel dreams into reality.</p>
  </header>
  </>
)
}
function Menu({travelData}){
  return (
    <>
    <h1>Travel Places</h1>
    <ul  className="container">
        {
          travelData.map((place,index)=>{
            return (
              <Travel key={index} 
              name={place.name}
                image={place.img}
                description={place.description}
                country={place.country}
                cost={place.cost}
                popularAttraction={place.popularAttraction}
                available={place.available}/>
            )
          }
          )
        }
    </ul>
    </>
  )
}
function Travel({ name, image, description, country, cost, popularAttraction, available }){
  return (
    <>
     <div className="tour-place">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{popularAttraction}</p>
      <div className="sub-div">
        <span>{country}</span>
        <span>{cost}</span>
        <span>{available ? 'Available' : 'Not Available'}</span>
        
      </div>
      <div className="sub-div">
      <button>Book Now</button>
      
      </div>
      
      
    </div>
    </>
  )
}
function Footer(){
  return (
    <>
    <footer>
      <p>{new Date().toLocaleDateString()}. BOOKING Going ON</p>
      <p>&copy; 2024 Wanderlust Explorer. All rights reserved.</p>
      <p>Designed with ❤️ for travel enthusiasts.</p>
      </footer>  
      </>
    
  )
}

export default App;
