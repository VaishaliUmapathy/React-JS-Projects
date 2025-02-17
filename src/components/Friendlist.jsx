import { useState } from 'react';
import '../components/friends.css';

const initialFriends = [
    { id: 1, img: "./ear1.jpeg", name: "Alice", balance: 10 },
    { id: 2, img: "./ear2.jpeg", name: "Bob", balance: -5 },
    { id: 3, img: "./ear3.jpeg", name: "Charlie", balance: 45 },
    { id: 4, img: "./ear4.jpeg", name: "David", balance: 20 },
    { id: 5, img: "./ear2.jpeg", name: "Emma", balance: -15 },
];

function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend,setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((prevFriends) => [...prevFriends, friend]);
        setShowAddFriend(false);
    }
    function handleSelectedFriend(friend) {
        
        setSelectedFriend((current)=>(current?.id==friend.id ? null : friend));
        setShowAddFriend(false);
    }
    function handleSpiltBill(value){
        setFriends(friends=>friends.map(friend => friend.id===selectedFriend.id ? {...friend,balance: friend.balance + value} : friend))
        setSelectedFriend(null);
    }
    return (
        <div className='container'>
            <div className='sidebar'>
                <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelectedFriend}/>
                {showAddFriend && <AddForm onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowAddFriend} className="btn">{showAddFriend ? "Close" : "Add Friend"}</Button>
            </div>
            {selectedFriend && <SplitForm selectedFriend={selectedFriend} onSpiltBill={handleSpiltBill}/>}
        </div>
    );
}

function FriendList({ friends, onSelection,selectedFriend}) {
    return (
        <ul>
            <h2>Spilt Bill</h2>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection}/>
            ))}
        </ul>
    );
}

function Friend({ friend, onSelection,selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "Selected" : ""}>
            <img src={friend.img} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (<p className='red'>You owe {friend.name} {Math.abs(friend.balance)}</p>)}
            {friend.balance > 0 && (<p className='green'>{friend.name} Owes You {Math.abs(friend.balance)}</p>)}
            {friend.balance === 0 && (<p>You and {friend.name} are even.</p>)}
            <Button onClick={()=>onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </li>
    );
}

function AddForm({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID();
        if (!name || !image) return;

        const newFriend = {
            id,
            name,
            img: `${image}?=${id}`,
            balance: 0,
        };
        onAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <label>🧚Friend name</label>
            <input type="text" placeholder="Add a new friend" value={name} onChange={(e) => setName(e.target.value)} />
            <label>🌉Image URL</label>
            <input type="text" placeholder="Add image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button>Add</Button>
        </form>
    );
}

function SplitForm({selectedFriend,onSpiltBill}) {
    const [bill,setBill] = useState("");
    const [expense,setExpense] = useState("");
    const paidByFriend=bill ? bill-expense : "";
    const [whoIsPaying,setWhoIsPaying]=useState("user");
    function handleSubmit(e){
e.preventDefault();
if(!bill || !expense) return;
onSpiltBill(whoIsPaying === 'user' ? paidByFriend : - expense)
    }
    return (
        <form className="split-form" onSubmit={handleSubmit}>
            <h2>Split a Bill with {selectedFriend.name}</h2>
            <label>💵Bill Value</label>
            <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>
            <label>🙋Your Expense</label>
            <input type="text" value={expense} onChange={(e)=>setExpense(Number(e.target.value) > bill ? expense : Number(e.target.value))}/>
            <label>👧{selectedFriend.name}'s Expense</label>
            <input type="text" disabled value={paidByFriend}/>
            <label>🤑💸 Who is paying the amount?</label>
            <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
                <option value="user">YOU</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    );
}

export default App;
