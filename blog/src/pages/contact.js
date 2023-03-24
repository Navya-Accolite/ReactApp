import TableData from "./TableData";
import React, { useContext } from "react";
import './stylesforcontact.css'
import AuthContext, { Auth } from "./Auth";
import Login from "./Login";
export function Contact(){


  const { isAuthenticated, userName, handleLogout } = useContext(AuthContext);

  console.log(isAuthenticated)

 const column = Object.keys(TableData[0]);

 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
                
           </tr>
       )
     })
}


  return (
    <div className="contactBg">
    
    {isAuthenticated ? <table className="table">
        <thead className="thead">
         <tr>{ThData()}</tr>
        </thead>
        <tbody className="tbody">
         
        {tdData()}
        </tbody>
       </table> 
       : <Login/>
}
    
    </div>
  )

}


export default Contact;



