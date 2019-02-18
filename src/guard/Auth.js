/* eslint-disable react/react-in-jsx-scope */
import React from 'react' ;
import {Route,Redirect} from 'react-router-dom';
import * as types from '../store/types'
import connect from 'react-redux/es/connect/connect'
const Auth = ({component:Component,auth,...rest})=>(
    <Route {...rest}  render={(props)=>
        auth ? //data == 预载数据
            <Component {...props} /> :
            <Redirect to="/login" />
        } />
);
const initMapStateToProps = state=>({
    auth : state.user.auth
});
const initDispatchToProps = dispatch=>({

}) 

export default connect(initMapStateToProps,initDispatchToProps)(Auth)
    // class Auth extends React.Component{
    //     constructor(props){
    //         super(props)
    //         this.state={
    //             hasAuth:false,
    //             auth:false,
    //             data:null
    //         }
    //     }
    //     componentDidMount(){
    //         fetch(
    //             `/data/user.json`
    //         ).then(
    //             res=>res.json()
    //         ).then(
    //             res => {
    //                 this.setState({
    //                     auth:res.auth,
    //                     hasAuth:true,
    //                     data:res.data
    //                 })
    //             }
    //         )
    //     }
    //     render(){
    //         let {component:Component,...rest} = this.props;
    //         if(!this.state.hasAuth) return null;
    //         return (
    //             <Route {...rest}  render={(props)=>
    //                 this.state.auth ? //data == 预载数据
    //                   <Component data={this.state.data} {...props} /> :
    //                   <Redirect to="/login" />
    //               } />
    //         )
    //     }
      
    // }