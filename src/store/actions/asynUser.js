import * as types from '../types';

const asynUser = ({url,username,password})=>(dispatch,getState)=>{
    // console.log('asynUser',username,password)
    dispatch({type:types.VIEW_LOADING,payload:true});
    return fetch(
        url,
            /*{
                method:'post',
                headers:{"Content-type":"application/x-www-form-urlencoded"},
                body:{
                    username:username,
                    password:password
                }
            }*/
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false})
            dispatch({type:types.CHECK_USER,payload:data})
            return data.auth
        }
    )
};


export default asynUser;