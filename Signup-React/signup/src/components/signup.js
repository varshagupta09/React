import React, { useState } from 'react'

const SignUp = () => {

    const [userRegistration, setUserRegistration] = useState({
        username:"",
        email:"",
        mobile:"",
        password: ""
    });

    const [records , setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userRegistration, id: new Date().getTime().toString()}
        console.log(records);

        setRecords([...records,newRecord ])

        console.log(records);

        setUserRegistration({username:"", email:"",mobile:"", password:""})
    }
  return (
 <>
 <form action='' onSubmit={handleSubmit}>

    <div className='text'>   
        <label className='lable' htmlFor='username'>Full Name</label>
        <input type='text' autoComplete='off' 
        value={userRegistration.username}
        onChange={handleInput}
        name="username" id="username"/>
    </div>
    <div >   
        <label className='lable'>Email</label>
        <input type='text' autoComplete='off' 
        value={userRegistration.email}
        onChange={handleInput}
        name="email" id="email"/>
    </div>
    <div>   
        <label  className='lable' >Mobile No.</label>
        <input type='text' autoComplete='off' 
        value={userRegistration.mobile}
        onChange={handleInput}
        name="mobile" id="mobile"/>
    </div>
     
    <div >   
        <label className='lable'>Password</label>
        <input type='text' autoComplete='off' 
        value={userRegistration.password}
        onChange={handleInput}
        name="password" id="password"/>
    </div>
    <button type='submit'>Submit</button>
 </form>
 <div>
    {
        records.map((curElem)=>{
            const{id,username, email, mobile,password} = curElem;
            return(
                <div className='showData' key={curElem.id}>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{mobile}</p>
                    <p>{password}</p>
                </div>
            )
        })
    }
 </div>
 </>
  )
}

export default SignUp