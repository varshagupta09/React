import React, { useState } from "react";

const UseStateArray = () => {

const biodata = [{
  id:0, myName:"Varsha", Age:28
},
{
  id:0, myName:"bjbj", Age:28
},
{
  id:0, myName:"Vabjbjbjrsha", Age:28
},

]

const [myArray, setMyArray] = useState(biodata);


console.log(myArray + "array");

const clear = () => {
  setMyArray([]);
}

const removeElement = (id) => {
  const newArray = myArray.filter((curEl) => 
  {
   return curEl.id =id;
  })
  setMyArray(newArray);
}

  return (
    <div>
{
  myArray.map((element) => { 
    return ( 
    <h1 className="">Name : {element.myName} & Age:{element.Age}
    <button onClick={() => removeElement(element.id)}>Remove</button>
    </h1>)
    ;} )
}    
<button onClick={clear}>Clear</button>  
    </div>
  );
};

export default UseStateArray ;
