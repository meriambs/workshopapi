import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import UserList from './UserList';



function App() {

const [user,setUser]=useState([])

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
  console.log(res.data,'res')
  setUser(res.data)
})
.catch(err=>{
  console.log(err)
})


},[])


  return (
    <div className="App">

{
  user.map((el)=>  (<UserList     kaskrout={el}   />   )  )
}
    </div>
  );
}

export default App;

