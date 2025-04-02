import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
let [rates, setRates] = useState({});
useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then(res => res.json())
.then((val) => setRates(val[currency])) // always use [] to access dynamic keys present inside the object dot notation allows only hardcoded keys
.catch((err)=> {
  console.log("Error occurred while fetching data:", err);
  setRates({})
})
},[currency])

// console.log(rates);
return rates
}
export default useCurrencyInfo