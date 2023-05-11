import React ,{ useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/Firebase-config";
import {onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";





export default function Signup(){
const [showPassword, setshowPassword ]=useState(false);
const navigate= useNavigate();
const [formValues, setFormValues]=useState({
  
Email: "" ,
Password: ""
});

const handleSighIn = async()=>{
    try{
const {Email , Password}= formValues;
await createUserWithEmailAndPassword(firebaseAuth, Email, Password);
    } catch(error){
        console.log(error.code)
    }

};

onAuthStateChanged(firebaseAuth, (CurrentUser)=>{
    if(CurrentUser) navigate("/");
})

    return (
<Container showpassword={showPassword}>
<Backgroundimage />

<div className="content">
    <Header login/> 

<div className="body flex column a-center j-center">
<div className="text flex column">
<h1>Unlimited movies, TV shows and more</h1>
<h4>Watch anywhare, cancel anytime</h4>
<h6>Ready to watch ? Enter your email to create or restart memdership </h6>
</div>

<div className ="form">
 <input type="Email" placeholder="Email Address" name="Email" value={formValues.Email} onChange={(e)=>setFormValues({...formValues,[e.target.name] : e.target.value})} />
 { showPassword && (
 <input type="Password" placeholder="Enter Password" name="Password" value={formValues.Password} onChange={(e)=>setFormValues({...formValues,[e.target.name] : e.target.value})}/>
 )}
 {!showPassword && (
 <button onClick={()=> setshowPassword(true)}>Get started</button>)}
 
</div>
<button onClick={handleSighIn}>Sign up</button>
</div>
</div>
    
</Container>
   
    );
  
  
}

const Container =styled.div`
position: relative;
.content {
    position : absolute;
    top : 0;
    left : 0;
     background-color : rgba (0,0,0,0) ;
     height : 100vh;
     width :100;
     display : grid;
     grid-template-rows : 15vh ,85vh;  
  }
.body{
      gap: 1rem;
      text-align: center;
      font-size: 2rem; }
      h1{
      padding:0 25rem;
  }
     
     .form{
      display: grid;
       grid-template-columns:${({showpassword})=>showpassword ? "1fr 1fr" : "2fr 1fr"}; 
      width: 55%; 
     }
     
     input{
          color: black;
          border: none;
          padding: 1.5rem;
          font-size:1.2rem;
          border: 1px solid black;
            &:focus{ 
      outline: none;
  }
}
  
      button{
          padding : 0.5rem 1rem;
          background-color:#e50914;
          border:none;
          cursor:pointer;
          color: white;
         
          font-weight:bolder;
          font-size:1.0rem;
      }
     
     button{
      padding : 0.5rem 1rem;
      background-color:#e50914;
      border:none;
      cursor:pointer;
      color: white;
      border-radius:0.2rem;
      font-weight:bolder;
      font-size:1.0rem;
     }
  
`;