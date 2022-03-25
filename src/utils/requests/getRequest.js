const getRequest =(srcUrl,successCallBack,errorCallBack)=>{
fetch(srcUrl,{
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
        'Content-Type': 'application/json'
      },
  }).then(response=>{
      if(response.ok)
          return response.json();
      else
        throw response.json();
  }).then(data=>{
     successCallBack(data);
  }).catch(async err=>{
      errorCallBack(await err);
  })
}
export default getRequest;