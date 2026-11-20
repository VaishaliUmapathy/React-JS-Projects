import  { User,Students,Tables } from "./User.jsx"
 function Header() {
  const user={
    name: "John Doe", 
    age: 30,
    email: "johndoe@example.com"
  };
 const students={
   name: "Alice Smith", 
   age: 25,
   email: "alicesmith@example.com"
   
  };
 
return (
  <div>
      <h1>Hello Hi Everybody</h1>
   <h2>USING Props</h2>
      <User 
      name={user.name} 
      age={user.age}
      />
      <h2>Using destrucuring</h2>
      <Students 
      name={students.name} 
      age={students.age}
      />
      <h2>Using spread Operator</h2>
      <Tables
      {...students}
      />
  </div>
);
}
export default Header;