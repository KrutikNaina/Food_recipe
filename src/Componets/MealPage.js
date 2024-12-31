import React, { useState } from 'react'
import MealCard from './MealCard'

const MealPage = () => {

  const [data, setData] = useState()
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("")

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const mymeal = async () => {
    if (search == "") {
      setMsg("Please Enter Something")
    }
    else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const jsonData = await get.json()
   //   console.log(jsonData.meals);
      setData(jsonData.meals)
      setMsg("")
    }
  }
  console.log(data);

  return (
    <>
      <h1 className='head'>Food Recipe App</h1>
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter Dishe Name' onChange={handleInput} />
          <button onClick={mymeal}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <div>
          <MealCard detail={data} />
        </div>
      </div>
    </>
  )
}

export default MealPage