import React, { useState } from 'react'

export default function Style() {
    let[Status,setStatus]=useState(true);
    let[color,setColor]=useState(false)

  return (
    <div>
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button  onClick={()=>setStatus(!Status)}>Toggle</button>
      { Status?  <div className='Status' style={color?{backgroundColor:"red"}:{backgroundColor:"green"}}>
      </div>: null}

      <button onClick={()=>setColor(!color)} >Change Color</button>
   
    </div>
  )
}

