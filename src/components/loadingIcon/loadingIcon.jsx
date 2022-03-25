import { Button } from "react-bootstrap"
import { useEffect, useState, useRef } from "react";
const LoadingIconComponent = () =>{

    const [isLoading,setIsLoading] = useState(false);
    let id = useRef(null);
    const OnClick=() => {
        setIsLoading(true);
       id.current=setTimeout(()=>setIsLoading(false),5000); 
      };

      useEffect(()=>{
          return ()=>{
              clearTimeout(id.current);
          }
      },[])


    return(<div>
         { isLoading?(<div>
        <div className="spinner-border text-light" role="status"></div>
        <p className="sr-only">Loading...</p>
        </div>): null}
        <Button onClick={OnClick} variant="primary" size="lg">
        Click Me!
        </Button>
        </div>
            
    )
}

export default LoadingIconComponent