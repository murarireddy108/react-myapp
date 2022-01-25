
import './App.css';


export default function App() {
  const users = [
    {
      name: "Tony" , 
      pic : "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952__480.jpg"
     
    },
    {
      name: "Caption America" ,
      pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVMqMDtsWdd5Y-6jqsNVBG1lbZZV0K5iUNBUJqOi-sq1-jpoLyc9xovkodV1sCqAU4H4&usqp=CAU"
    },
    {
      name: "Thor",
      pic : "https://image.shutterstock.com/image-photo/las-vegas-nv-usa-sep-600w-721221445.jpg"
    }
    ];
  return (
    <div className="App">
        {/* <Msg name = "Tony" />
        <Msg name = "Steve" />
        <Msg name = "Thor" /> */}
        <h1 className = "users"> Super Heros User Profile</h1>
        {users.map(ur => <Msg name = {ur.name} pic = {ur.pic}/>)}
    </div>
  );
}

function Msg({name , pic}){
  // console.log(props)
  return (
  <div>
     <img className = "user-profile" src = {pic} alt = {name} />
     <h1 className="user-name"> 🙂 {name} 😍</h1>
 
  </div>
  );
}





