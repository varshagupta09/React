import React, { useState } from "react";

const SignUpPractice = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handlleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime().toString };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ username: "", email: "", mobile: "", password: "" });
  };

  return (
    <>
      <h1>SignUpPractice</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="text">
          <label className="lable">
            Full Name
          </label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={userRegistration.username}
            id="username"
            onChange={handlleChange}
          />
        </div>
        <div className="text">
          <label className="lable" >
            Email Id
          </label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={userRegistration.email}
            id="email"
            onChange={handlleChange}
          />
        </div>
        <div className="text">
          <label className="lable" >
            Mobile No.
          </label>
          <input
            type="text"
            name="mobile"
            autoComplete="off"
            value={userRegistration.mobile}
            id="mobile"
            onChange={handlleChange}
          />
        </div>
        <div className="text">
          <label className="lable" >
            Password
          </label>
          <input
            type="text"
            name="password"
            autoComplete="off"
            value={userRegistration.password}
            id="password"
            onChange={handlleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        {records.map((curElem) => {
          const { id, username, email, mobile, password } = curElem;
          return (
            <div className="showData" key={curElem.id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{mobile}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SignUpPractice;
