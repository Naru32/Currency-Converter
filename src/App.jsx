import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
 
 const [amount,setAmount] =  useState(0)
 const [from,setFrom] = useState("usd"); // this state is for showing from and to on button dynamically means when user will click on swap that button text also changes and the currency type options also swaps
 const [to,setTo] = useState("inr");
 const [convertedAmount, setConvertedAmount] = useState(0) // this will be shown as result(calculated value) in 2nd inp box
 const currencyInfo = useCurrencyInfo(from) // this state will hold the data of currencies available that we fetched from api, useCurrencyInfo the custom hook we have build 
// to get all the keys present in this currencyInfo object we have to use keys method which will give all the keys present inside object as array
let options = Object.keys(currencyInfo)


// this swap function will swap the currencies selected in currency type and the amount of input boxes
const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount);
  setAmount(convertedAmount);
}

// now write a function to calculate the currency values when user will click on convert currency

const convert = ()=>{
    // this will select the key that is user entered in to(2nd dropdown) field and multiply it with amount user entered
 const convertedVal = (amount * currencyInfo[to].toFixed(2))
  setConvertedAmount(Number(convertedVal))
}

  return (
    <>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange_115579-923.jpg')`,
        }}
    >
  <div className="w-full">
      <div
        className="w-full max-w-md mx-auto border border-[#c1d4e8] rounded-lg p-5 bg-white/30 backdrop-blur-sm"
      >
        <form
        onSubmit={(e)=>{
          e.preventDefault();
          convert() // calling the function when user submits the form
        }}
        >
           <div className="w-full mb-1">
              <InputBox
               label="From"
               amount={amount}
               currencyOptions={options}
               onCurrencyChange={(currency) => setFrom(currency)}
               selectCurrency={from}
               onAmountChange={(amount)=> setAmount(amount)}
               />
           </div>
           <div className="relative w-full h-0.5">
            <button
               type="button" 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#7fa99b] text-[#112730] px-2.5 py-1 cursor-pointer"
            onClick={swap}
            >Swap</button>
           </div>
           <div className="w-full mt-1 mb-4">
           <InputBox
               label="To"
               amount={convertedAmount}
               currencyOptions={options}
               onCurrencyChange={(currency) => setTo(currency)}
               selectCurrency={to}
               amountDisabled

               />
           </div>
           <button type="submit" className="w-full bg-[#61b390] text-[#01352c] px-4 py-3 rounded-lg cursor-pointer">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
           </button>
        </form>
      </div>
  </div>
    </div>
  
    </>
  )
}

export default App
