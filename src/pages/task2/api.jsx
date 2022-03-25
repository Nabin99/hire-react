import { useEffect, useState } from "react";
import ApiDataCard from "../../components/apiData/apiData";
import Filter from "../../components/filter/filter";
import PageLayout from "../../components/pageLayout/pageLayout";
import getRequest from "../../utils/requests/getRequest";

const ApiData = () =>{
const [actualData,setActualData] = useState(null);
const [filteredData,setFilteredData] = useState([]);
const srcUrl = "https://api.github.com/repos/facebook/react/issues";
    useEffect(()=>{
        let isMounted=true;
      if(!actualData) { 
          getRequest(srcUrl,data=>{
              let temp;
              if(isMounted){
                  temp = data.map(obj=>({
                    html_url: obj.html_url,
                    title:obj.title,
                    number:obj.number,
                    state:obj.state,
                    created_at: obj.created_at,
                    updated_at: obj.updated_at,
                    body: obj.body,
                    id: obj.labels[0].id,
                    name:obj.labels[0].name
                 }
                ));
                setActualData([...temp]);
                setFilteredData([...temp]);
    }
          },err=>{
              console.log(err);
          });
        }

          return()=>{
              isMounted=false;
          }

    });
    return(
        <PageLayout heading="Api Data">
            <Filter setFilteredData={setFilteredData} actualData={actualData}/>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {actualData && filteredData.map(value=>(<ApiDataCard key={value.number} data={{...value}}/>))}
            
            </div>
        
    </PageLayout>
    )
}
export default ApiData;