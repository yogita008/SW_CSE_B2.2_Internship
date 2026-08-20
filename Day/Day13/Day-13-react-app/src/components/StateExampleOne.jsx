import { useState } from "react";
function Counter(){
    //syntax
    //const [nameofstate,functiontomodifystate]=usestate(initialvalue);
    const [count,setcount] =usestate(0);
    return(
        <div>
            <h2>Counter</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setcount(count+1)}>Increase</button>
            <button onClick={()=>setcount(count-1)}>Decrease</button>
        </div>
    )

}
export default Counter;