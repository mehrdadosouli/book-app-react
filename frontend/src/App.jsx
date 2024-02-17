import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [photos,setPhotos]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000')
    .then(res=>res.json())
    .then(data=>console.log(data))
    fetch('http://localhost:5000/photos')
    .then(res=>res.json())
    .then(data=>{setPhotos(data[0])})
    console.log(photos);
  },[])

  return (
    <>
      <div>
          <Header />
      </div>
    </>
  )
}

export default App
