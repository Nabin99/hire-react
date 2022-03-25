import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const ProgressBarComponent = () =>{
    const [value,setValue] = useState(50);
    const id = useRef(null);
    const OnClick=()=>{
    id.current = setInterval(()=>{
            setValue(pre=>{
                 if (pre < 100) {
                     return ++pre;
                    } 
                    else 
                    clearInterval(id);
                    return pre;
                });  
      }, 10);
    }

    useEffect(()=>{
        return ()=>{
            clearInterval(id.current);
        }
    },[])

  
    return(
            <div >
            <div id="myProgress">
                <div id="myBar" style={{width:`${value}%`}}></div>
                </div>
                <br/>
                <Button onClick={OnClick} disabled={(value>50)} >Click Me</Button> 
            </div>
    )
}

export default ProgressBarComponent;