import Productcard from "./Productcard";

function Cards(){
    const cardData = [
        {
          img: "../public/ear4.jpeg",
          name: "Beach Blue Stud",
          price: 300,
          attributes: ["Medium", "Stone", "Nature", "ScrewBack"],
        },
        {
          img: "../public/ear3.jpeg",
          name: "Trendy Stud",
          price: 300,
          attributes: ["Lightweight", "Golden", "Swirl", "Screw Back"],
        },
        {
          img: "../public/ear2.jpeg",
          name: "Hook Pearl Stud",
          price: 300,
          attributes: ["Lightweight", "Pearl", "Minimalist", "Hooks"],
        },
        {
          img: "../public/ear1.jpeg",
          name: "Pearl Stud",
          price: 300,
          attributes: ["Lightweight", "Pearl", "Minimalist", "Screw Back"],
        },
      ];
      
    
    return (
        <>
        <h1 className="card-title">Shopping Cards</h1>
        <div className="card-container px-4 py-4">
          {
            cardData.map((card, index) => (
              <Productcard key={index} 
              image={card.img}
              name={card.name}
              price={card.price}
              attributes={card.attributes}
              />
            ))
          }
        </div>
        </>
    )
}

export default Cards;