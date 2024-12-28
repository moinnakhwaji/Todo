import React, { useState } from 'react'
import Data from './Data'

const Input = () => {
  const [data,setdata] = useState("")
  const [item,setitem] = useState([])
  const handelchange = (e)=>{
    setdata(e.target.value)
    console.log(data)
  }
  const handelSubmit = (()=>{
    if(data.length > 0){
      setitem([...item,data])
    }
    setdata("")
    console.log(item)

  })
  const DeleteHandel = ((index)=>{
    const filterdItem = item.filter((_,i)=>i !== index)
   setitem(filterdItem)
   console.log(filterdItem)

  })

  const updateData = (index, updatedValue) => {
    const updatedItems = [...item];
    updatedItems[index] = updatedValue; 
    setitem(updatedItems); 
    
  };


  return (
    <div className='mt-4'>
      <input type="text" placeholder='Add Todo' className='p-2 text-white bg-transparent rounded-md ' value={data} onChange={handelchange} />
      <button className='p-2 mx-4 text-white bg-blue-500 rounded-md hover:bg-blue-600' onClick={handelSubmit}>Submit</button>
   <Data data={item} DeleteHandel={DeleteHandel} updateData={updateData} />
    </div>
  )
}

export default Input