import React, { useId } from 'react'

// we are expecting 2 props here in input box component 
//! 1. label: because when we will hit swap button so it must change the label of the input fields dynamically for that we will store label as state so can be updates in ui
//! 2. classname: We are taking this classname if user wants to give his own custom css so we can change it dynamically it is also state

// here we are taking default props 3rd way direct destructure
function InputBox(
    {
        label, 
        className = "",
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false
    }) {

        // we have to connect label and input field we can connect it by taking any random value in htmlFor and id but react provides useId hook that generates unique id.
        const id = useId()

  return (
    <div
    className = {`bg-[#f5c7f7] p-4 rounded-lg text-md flex ${className}`}
    >
        <div className='w-1/2'>
        <label className='text-[#27296d] inline-block' htmlFor={id}>
        {label} 
        </label>
        <input 
        id={id}
        className='outline-none w-full bg-transparent py-1 placeholder:text-lg placeholder:text-[#5e63b6] placeholder:font-semibold'
        type='number'
        placeholder='Amount'
        disabled = {amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // sometimes js takes values in event as string so amount cannot be string so we need to do type conversion from string to number thats why Number(e.target.value)
        />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-[#27296d] w-full'>Currency type</p>
        <select className='rounded-lg px-1 py-1 bg-[#a393eb] cursor-pointer outline-none' 
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled = {currencyDisabled}
        >
            {/* here we need to write a loop to display currencies options avalaible to convert */}
            {
                currencyOptions.map((currencies)=>
                    <option key={currencies} value={currencies}>
                {currencies}
            </option>
                )
            }         
        </select>
        </div>
    </div>
  )
}

export default InputBox