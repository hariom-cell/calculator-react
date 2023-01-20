import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'

export default function Showtable() {

    const[labelView,setLabelView]=useState("Enter table number");
    const [test,setTest]=useState("");
    const [tablenumber,setTablenumber]=useState("");
    const [containstable,setContainstable] = useState([]);
    const getTextValue=(event)=>{
        setTest(event.target.value)
        setContainstable([])
        setTablenumber(event.target.value);
    }

    const handleClick=()=>{
        if(tablenumber !== "")
        {
        var value=parseInt(tablenumber)
        for(let i=1;i<=10;i++)
        {
            setContainstable((containstable) => [ ...containstable, value*i]);
        }
    }
       
    }

    const getOptionValue=(event)=>{
        setTest(event.target.value)
            var value=parseInt(event.target.value)
            setContainstable(()=>[])
            for(let i=1;i<=10;i++)
                {
                    setContainstable((containstable) => [ ...containstable, value*i]);
                }
        }

    useEffect(()=>{
    return ()=>{
        console.log("changed")
    };
    },[test])

  return (
    <>
    <label>{labelView}</label>
    <input type="number"  pattern="[0-9]*" onChange={getTextValue} value={test} />
    <button onClick={handleClick}>Enter</button>
    <select onChange={getOptionValue} value="1">  
        {containstable.map((e, key) => {  
        return <option key={key}>{e}</option>
        })}  
    </select> 
    </>
  )
}
