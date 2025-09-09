import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div id="container">
      <h1 className="text-3xl text-white text-shadow-black text-shadow-md text-center p-2">Assignment Tracker</h1>
      <p className="text-white text-xl text-shadow-black text-shadow-md text-center mr-2">Welcome to this assignment tracker! Click on the button to add an assignment and get started. Check out the Github repository for the project at the bottom of the website.</p>
      <button type="button" className="rounded-full w-20 h-20 bg-white fixed bottom-3 right-3 font-semibold flex justify-center items-center"><p className="text-4xl">+</p></button>
    </div>
  )
}

export default App
