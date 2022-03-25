import { Button } from "react-bootstrap"
import { useEffect, useState } from "react";
const LoadingIconComponent = () =>{

    const [isLoading,setIsLoading] = useState(false);
    let id;
    
    const OnClick=() => {
        setIsLoading(true);
       id=setTimeout(()=>setIsLoading(false),5000); 
      };

      useEffect(()=>{
          return()=>{
              clearTimeout(id);
          }
      })

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