function Productcard({image,name,price,attributes}){
    return(
        <>
        
            <div className="card">
                    <img src={image} alt={name}/>
                    <h2>{name}</h2>
                    <div className="price">
                        <p>{price}</p>
                        <button>Add to cart</button>
                    </div>
                    <ul className="price-list">
                        {
                            attributes.map((list,index)=>(
                                <li key={index} className="item">{list}</li>
                            ))
                        }
                        
                    
                    </ul>
            </div>
      
        </>
    )
}
export default Productcard;