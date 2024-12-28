import './profile.css'
function Userprofile(){
    return(
        <>
        <h1>hello</h1>
        <Profile/>
        <Forms/>
        </>

    )
}

function Profile(){ 

    return (
        <>
            <div className="profiles">
                <img src="" alt=""/>
                <h2 id="name"></h2>
                
            </div>
        </>
    )
}
function Forms(){
    return(
        <>
            <div className="form-container">
                <form>
                    <label>Personal Information <span>Edit</span></label>
                    <div className="input-text">
                        <input type="text" placeholder="firstname"/>
                        <input type="text" placeholder="lastname"/>
                    </div>
                    <label>Your Gender</label>
                    <input type="radio" name="gender" value="female"/>
                    <label>Email Address<span>Edit</span></label>
                    <input type="email" placeholder="enter a email address"/>
                    <label>Mobile Number<span>Edit</span></label>
                    <input type="number" placeholder="enter a mobile number"/>
                </form>
                <div>
                    <h2>FAQs</h2>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum?</h4>
                    <p></p>
                    <h4></h4>
                    <p></p>
                    <h4></h4>
                    <p></p>
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </>
    )
}
export default Userprofile;