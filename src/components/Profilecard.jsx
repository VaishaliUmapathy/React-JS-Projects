function Profilecard(){
    return (
    <>
    <div className="container">
        <h1>Profile Card</h1>
        <Profile/>
    </div>
    </>)
}
function Avatar(){
    return (
    <>
    <img src="./avatar.jpeg"/>
    </>
    )
}
function Profile(){
    return (
    <>
    <div className="card">
    <Avatar/>
        <h1>Andrea Philip</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores vero 
        reprehenderit tenetur aspernatur ex, pariatur, officia magni sit dolorem officiis minima quod alias.
         Sapiente provident cupiditate est qui in exercitationem.</p>
    <hr/>
    <Skills/>
    </div>
    </>
    )
}
function Skills(){
    const bgColor="#12acd5";
    return (
    <>
    <h2>Skills</h2>
    <div className="skill">
    
        <Skill skill='HTML' color={bgColor} level="pro"/>
        <Skill skill='css' color={bgColor} level="pro"/>
        <Skill skill='Javascript' color={bgColor} level="intermediate"/>
        <Skill skill='ReactJS' color={bgColor} level="beginner"/>
        <Skill skill='C' color={bgColor} level="intermediate"/>
    </div>
    </>
    )
}
function Skill(props){
    return (
    <>
         <h3 className="skill-title" style={{backgroundColor:props.color}}>{props.skill}<span>{props.level === "beginner" && "😎"}{props.level==="pro" && "🏆"}{props.level === "intermediate" && "🚀"}</span></h3>
    </>
    )
}
export default Profilecard;