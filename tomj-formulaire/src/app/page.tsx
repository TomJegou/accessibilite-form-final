'use client'
import cardLogo from "./public/card-logo.svg"
import Image from "next/image"
import background from "@/app/public/bg-main-desktop.png"
import cardBack from "@/app/public/bg-card-back.png"
import cardFront from "@/app/public/bg-card-front.png"
import sucessLogo from "@/app/public/icon-complete.svg"
import { useState, useEffect } from "react"

export default function Home() {
  const [valid, setValid] = useState(false)
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [name, setName] = useState("Jane Appleseed")
  const [month, setMonth] = useState("09")
  const [year, setYear] = useState("26")
  const [CVC, setCVC] = useState("123")


  useEffect(() => {
    if (cardNumber.length <= 0) {
      setCardNumber("0000 0000 0000 0000")
    }

    if (name.length <= 0) {
      setName("Jane Appleseed")
    }

    if (month.length <= 0) {
      setMonth("09")
    }

    if (year.length <= 0) {
      setYear("26")
    }

    if (CVC.length <= 0) {
      setCVC("123")
    }
  }, [cardNumber, name, month, year, CVC])

  const submitForm = () => {
    setValid((e)=>(!e))
  }

  return (
    <main className="min-h-screen flex flex-row flex-wrap justify-center items-end text-[18px]" >
      <Image src={background} alt="background" className="absolute top-0 left-0 z-[-1] h-[100vh]" width={500} />
      <form className="flex flex-wrap flex-col justify-center items-center bg-white w-full p-3 h-[65vh] max-w-[600px] gap-5" action={submitForm} aria-label="card bank form informations">
        {valid ?
          <>
            <Image className="" src={sucessLogo} alt="icon-complete.svg" width={100} height={100} />
            <h1 className="text-4xl">THANK YOU !</h1>
            <p className="text-[#999B9B]">We've added your card details</p>
            <input className="py-4 w-full bg-[hsl(270,63%,15%)] rounded-lg text-white" type="submit" value="Continue" />
          </>
          :
          <>
            <div className="flex flex-wrap flex-col justify-center gap-6 w-[90%]">
              <div className="flex flex-wrap flex-col justify-center">
                <label>
                  Cardholder Name
                </label>
                <input className="border-[1px] border-[#D5DBDB] rounded-lg p-2" type="text" placeholder="e.g. Jane Appleseed" aria-label="cardholder name input text" required onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div className="flex flex-wrap flex-col justify-center">
                <label>
                  Card Number
                </label>
                <input className="border-[1px] border-[#D5DBDB] rounded-lg p-2" type="number" maxLength={16} minLength={16} placeholder="e.g. 1234 5678 9123 0000" aria-label="card number input text" required onChange={(e) => {setCardNumber(e.target.value)}} />
              </div>
              <div className="flex flex-wrap flex-row justify-start gap-2">
                <div className="flex flex-col justify-start">
                  <label>
                    EXP. Date (MM/YY)
                  </label>
                  <div className="flex flex-wrap flex-row justify-start items-center gap-2">
                    <input className="w-[10vh] border-[1px] border-[#D5DBDB] rounded-lg p-3" type="number" maxLength={2} minLength={2} placeholder="MM" aria-label="month experency date input" required onChange={(e) => {setMonth(e.target.value)}} />
                    <input className="w-[10vh] border-[1px] border-[#D5DBDB] rounded-lg p-3" type="number" maxLength={2} minLength={2} placeholder="YY" aria-label="year experency date input" required onChange={(e) => {setYear(e.target.value)}} />
                  </div>
                </div>
                <div className="flex flex-col flex-wrap">
                  <label>
                    CVC
                  </label>
                  <input className="w-32 border-[1px] border-[#D5DBDB] rounded-lg p-2" type="number" maxLength={3} minLength={3} placeholder="e.g. 123" aria-label="CVC input text" required onChange={(e) => {setCVC(e.target.value)}} />
                </div>
              </div>
              <input className="py-4 w-full bg-[hsl(270,63%,15%)] rounded-lg text-white" type="submit" value="Confirm" aria-label="submit information" />
            </div>
          </>
        }
      </form>
      <div className="absolute top-[2vh] left-[15vw] max-w-[600px] w-[80vw] max-h-[300px] h-[25vh] rounded-lg bg-no-repeat">
        <Image src={cardBack} alt="card-back" />
        <p className="relative top-[-14vh] left-[37vh] text-white text-[0.8rem] w-[50px]">{CVC}</p>
      </div>
      <div className="absolute max-w-[600px] w-[80vw] max-h-[300px] h-[25vh] rounded-lg bg-no-repeat top-[15vh] left-[6vw]">
        <Image src={cardFront} alt="card-front" className="relative top-0 left-0" />
        <Image className="relative top-[-23vh] left-[5vh]" src={cardLogo} alt="card-logo.svg" width={80} height={80} />
        <p className="relative top-[-18vh] left-[5vh] text-white text-[1.25rem]">{cardNumber}</p>
        <p className="relative top-[-17vh] left-[5vh] text-white text-[0.8rem] w-[200px]">{name}</p>
        <p className="relative top-[-18vh] left-[38vh] text-white text-[0.8rem] w-[50px]">{month}/{year}</p>
      </div>
    </main>
  );
}
