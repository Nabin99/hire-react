import { Button } from "react-bootstrap"
import { useState } from "react";
const LoadingIconComponent = () =>{

    const [isLoading,setIsLoading] = useState(false);
    
    const OnClick=() => {
        setIsLoading(true);
       setTimeout(()=>setIsLoading(false),5000); 
      };
    return(
            <Button onClick={OnClick} variant="primary" size="lg">
                { isLoading?(<div>
                <div class="spinner-border text-light" role="status"></div>
                <span class="sr-only">Loading...</span>
                </div>):"Click Me!" }
            </Button>
    )
}

export default LoadingIconComponent