import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    fetch('http://localhost:5000')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
