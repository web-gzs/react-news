//异步action //返回函数；
import * as types from '../types';

const asynList=({type,url,start,count,id})=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true});
  
    fetch(
      url,
 
    ).then(
      res=>res.json()
    ).then(
      data=>{
        // setTimeout(()=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            if (id){
                dispatch({
                  type:type,
                  payload:{data,id}
                })
              } else {
                dispatch({type:type,payload:data})
              }
        // },1000)
        
        // console.log(type,data)
      }
    )
  };
export default asynList