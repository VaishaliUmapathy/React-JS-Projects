
function User(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        
    </div>
  )
}

function Students({name,age}){
  return (
    <div>
      <h1>Students List</h1>
      <tabel>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      </tabel>
    
    </div>
  )
}
function Tables({name,age,email}){
  return (
    <div>
      <h1>Students List</h1>
      <table>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      </table>
    
    </div>
  )
}

export {User,Students,Tables}