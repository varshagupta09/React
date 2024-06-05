import React, { useState } from "react";

const UseStateObject = () => {
  const [data, setData] = useState({
    name: "ytrht",
    age: "hgfhg",
    degree: "hgfh",
    address: "hgfg",
  });

  const changeData = () => {
    setData({ ...data,
      name: "hhgbg",
     
    });
  };

  console.log(data);

  return (
    <>
      <div className="showData">
        <h1>
          Name:{data.name} | Age: {data.age}| Degree:{data.degree} | Address:{" "}
          {data.address}
        </h1>
        <button onClick={changeData}>Update</button>
      </div>
    </>
  );
};

export default UseStateObject;
