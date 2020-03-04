import React from 'react'

export default function Buttons({type  ,OnSubmit}) {
    return (
                       <React.Fragment>
           
            
            <button  type={type}  onClick={OnSubmit} >Login</button>
            <br />
            </React.Fragment>
  
      )
}
