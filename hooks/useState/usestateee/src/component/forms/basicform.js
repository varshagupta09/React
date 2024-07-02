import React, { useState } from 'react'

const Basicform = () => {

const [data, setData] = useState({
    email:"",
    password:"",
})

const printData = (e) => {
   const name = e.target.name;
   const value = e.target.value;
    console.log(name + value + " data");
setData(value);
}

const [entry , setEntry] = useState([])
const handleSubmit = () => {
    const newEntry = {}
}

  return (
    <>
    <form action="" className='form' onSubmit={handleSubmit}>

        <div>
            <label htmlFor='email'>Email Id</label>
            <input type="text" name="email" id="email" autoComplete='off'
            value={data.email} onChange={printData} />
        </div>

        <div>
        <label htmlFor='password'> Password</label>
            <input type="password" name="password" id="password" autoComplete='off'
            value={data.password} onChange={printData} />
        </div>
        <button type='submit' >Submit </button>
    </form>

    <div className='showData'>


{

}
        <p>cddsfdsfdsfd</p>

    </div>
    
    
    </>
  )
}

export default Basicform