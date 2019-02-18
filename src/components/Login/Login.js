import React,{Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asynUser from '../../store/actions/asynUser';
class Login extends Component{
    render(){
        return(
            <div className="content">
            <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
            <h1></h1>
            <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                <Link to='/login'>登录</Link>
                <span></span>
                <Link to='/reg'>注册</Link>
                </div>
                <p className="rsolid"></p>
            </div>
            <ul>
                <li className="lifirst">
                <input type="text" value={this.state.username} name="username" onChange={this.changeIpt.bind(this)}/>
                <span>帐号</span>
                </li>
                <li>
                <input type="text" value={this.state.password} name="password" onChange={(ev)=>{this.changeIpt(ev)}}/>
                <span>密码</span>
                </li>
            </ul>
            <div className="footbox">
                <input type="button" value="登 录" className="login-btn" onClick={
                    this.props.login.bind(null,this.state.password,this.state.username,this.props.history)
                }/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
            </div>
            </div>
        )
    }
    state={
        username:'',
        password:''
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    // login(){
    //     console.log('login————',this.state.username,this.state.password);
    //     fetch(
    //         `/data/user.json`
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //         data=>{
    //             if(data.auth){
    //                 this.props.history.push({pathname:'/user'})
    //             }else{
    //                 this.props.history.push({pathname:'/error'})
    //             }
    //         },
    //     )
    // }
} 
const initMapStateToProps = state=>({

});
const initMapDispatchToProps = dispatch =>({
    login :(username,password,history)=>dispatch(asynUser({
            // url:'/data/user.json',
            url:'/user',
            username,
            password
    })).then(
        auth=>auth?
            history.push({pathname:"/user"}):
            history.push({pathname:"/login"})
    )
});

export default connect(initMapStateToProps,initMapDispatchToProps)(Login);