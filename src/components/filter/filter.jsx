import { useState } from "react";
const Filter= ({setFilteredData,actualData}) =>{
    const [key,setKey] = useState("");
    
    const filter = (key) =>{
        if(key==="")
        setFilteredData([...actualData]);
        setFilteredData(actualData.filter(val=>(val.name.toLowerCase().includes(key.toLowerCase()))));
    }
 
    return(
        <div id="filter"> <input onChange={e=>{setKey(e.target.value.trim()); filter(e.target.value.trim())}} value={key} type="text" placeholder="filter by name..."></input> </div>
       
    )
}
export default Filter;