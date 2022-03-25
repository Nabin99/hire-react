import { useState } from "react";

const SliderComponent = () =>{
    const [value,setValue] = useState(50);
    return(
        <div className="slidecontainer">
             <p>Custom range slider:</p>
             <input type="range" min="0" max="100" step="5" value={value} onChange={e=>setValue(e.target.value)} className="slider" id="myRange"/>
             <p>Current Value = {value}</p>
        </div>
    )
}

export default SliderComponent;