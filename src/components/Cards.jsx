function Cards(props){
    
    return (
        <>
        <h1>Shopping Cards</h1>
        <div className="card-container">
            <div className="card">
                <img src={props.img} alt="Beach Blue Stud"/>
                <h2>Beach Blue Stud</h2>
                <div className="price">
                    <p>$300</p>
                    <button>Add to Cart</button>
                </div>
                <ul className="price-list">
                    <li className="item">Medium</li>
                    <li className="item">Stone</li>
                    <li className="item">Nature</li>
                    <li className="item">Screw Back</li>
                   
                </ul>
            </div>
            <div className="card">
                <img src="/ear3.jpeg" alt="Trendy golden Stud"/>
                <h2>Trendy Stud</h2>
                <div className="price">
                    <p>$300</p>
                    <button>Add to Cart</button>
                </div>
                <ul className="price-list">
                    <li className="item">Lightweight</li>
                    <li className="item">M</li>
                    <li className="item">L</li>
                    <li className="item">Screw Back</li>
                    
                </ul>
            </div>
            <div className="card">
                <img src="/ear2.jpeg" alt="pearl stud hook"/>
                <h2>Hook Pearl Stud</h2>
                <div className="price">
                    <p>$300</p>
                    <button>Add to Cart</button>
                </div>
                <ul className="price-list">
                    <li className="item">Lightweight</li>
                    <li className="item">Pearl</li>
                    <li className="item">Minimalist</li>
                    <li className="item">Hooks</li>
                    
                </ul>
               
            </div>
            <div className="card">
                <img src="/ear1.jpeg" alt="pearl stud modern look"/>
                <h2>Pearl Stud</h2>
                <div className="price">
                    <p>$300</p>
                    <button>Add to Cart</button>
                </div>
                <ul className="price-list">
                    <li className="item">Lightweight</li>
                    <li className="item">Pearl</li>
                    <li className="item">Minimalist</li>
                    <li className="item">Screw Back</li>
                    
                </ul>
            </div>

        </div>
        </>
    )
}
export default Cards;