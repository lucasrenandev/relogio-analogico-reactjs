import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    setInterval(clock, 1000)
    clock()
  }, [])

  function clock() {
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secondsElement = document.querySelector(".seconds")

    const now = new Date()
    const hours = (360 / 12) * now.getHours()
    const minutes = (360 / 60) * now.getMinutes()
    const seconds = (360 / 60) * now.getSeconds()

    hoursElement.style.transform = `rotate(${hours}deg)`
    minutesElement.style.transform = `rotate(${minutes}deg)`
    secondsElement.style.transform = `rotate(${seconds}deg)`
  }

  return (
    <>
      <main className="container">
        <div className="hours"></div>
        <div className="minutes"></div>
        <div className="seconds"></div>

        <span className="number1">1</span>
        <span className="number2">2</span>
        <span className="number3">3</span>
        <span className="number4">4</span>
        <span className="number5">5</span>
        <span className="number6">6</span>
        <span className="number7">7</span>
        <span className="number8">8</span>
        <span className="number9">9</span>
        <span className="number10">10</span>
        <span className="number11">11</span>
        <span className="number12">12</span>

        <small className='mark'>ReactJS</small>
      </main>
    </>
  )
}