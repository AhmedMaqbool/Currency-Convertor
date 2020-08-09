import React,{useEffect,useState} from 'react';
import './App.css';
import CurrencyInput from './Components/CurrencyInput';

const BASE_URL=`https://api.exchangeratesapi.io/latest`;

function App() {

 const [currencyOptions,SetCurrencyOptions]=useState([]);
 const [fromcurrency,setFromCurrency]=useState();
 const [tocurrency,setTocurrency]=useState();
 const [exchangeRate,setExhangerate]=useState();
 const [amount,Setamount]=useState(1);
 const [amountInFromCurrency,SetamountInFromCurrency]=useState(true);

let toamount;
let fromamount;
if(amountInFromCurrency)
{
   fromamount=amount
   toamount=amount*exchangeRate;
}
else
{
  toamount=amount;
  fromamount=amount/exchangeRate;
}
  


useEffect(()=>{
    fetch(BASE_URL)
    .then(res=>res.json())
    .then(data=> {
      const firstcurrency=Object.keys(data.rates)[0]
      SetCurrencyOptions([data.base,...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setTocurrency(firstcurrency)
      setExhangerate(data.rates[firstcurrency])
    })
      
  },[])

  useEffect(()=>{
    if(fromcurrency!=null&&tocurrency!=null)
    {
      fetch(`${BASE_URL}?base=${fromcurrency}&symbols=${tocurrency}`)
      .then(res=>res.json())
      .then(data=>setExhangerate(data.rates[tocurrency]))
    }
       
  },[fromcurrency,tocurrency])

  
function handleFromAmountChange(e)
{
      
  Setamount(e.target.value)
  SetamountInFromCurrency(true)
}

function handleToAmountChange(e)
{
      
  Setamount(e.target.value)
  SetamountInFromCurrency(false)
}


  return (
    <div >
    <h1>Currency Convertor</h1>
    <CurrencyInput 
    currencyoptions={currencyOptions}
    SelectedCurrency={fromcurrency}
    onChangeCurrency={e=>setFromCurrency(e.target.value)}
    amount={fromamount}
    onChangeAmount={handleFromAmountChange}
    />
    
    <div className='equals'>=</div>
    
    <CurrencyInput 
    currencyoptions={currencyOptions}
    SelectedCurrency={tocurrency}
    onChangeCurrency={e=>setTocurrency(e.target.value)}
    amount={toamount}
    onChangeAmount={handleToAmountChange}
    />
    </div>
  );
}

export default App;
