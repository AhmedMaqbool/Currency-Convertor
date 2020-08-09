import React from 'react'


const CurrencyInput=({currencyoptions,SelectedCurrency,onChangeCurrency,amount,onChangeAmount})=> {
            
      return (
        <div>
            
      <input type='number' className='input' value={amount} onChange={onChangeAmount} min='0' /> 
                
                <select value={SelectedCurrency} onChange={onChangeCurrency}>
                      {
                         currencyoptions.map(option=>(
                        <option key={option} value={option}>{option}</option>
                                        
                      ))}
                </select>

                
        </div>
    )
}

export default CurrencyInput;
