import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Reg.css'
class Reg extends Component{
    render(){
        return(
            <div className="content">
            <p className="fhbtn"><NavLink to={{pathname:'/user'}}></NavLink></p>
            <h1></h1>
            <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                <NavLink to={{pathname:'/login'}}>登录</NavLink>
                <span></span>
                <NavLink to={{pathname:'/reg'}}>注册</NavLink>
                </div>
                <p className="rsolid"></p>
            </div>
            <ul>
                <li className="lifirst">
                <input type="text" value=""/>
                <span>帐号</span>
                </li>
                <li>
                <input type="text" value=""/>
                <span>密码</span>
                </li>
            </ul>
            <div className="footbox">
                <input type="button" value="注 册" className="login-btn"/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
            </div>
            </div>
        )
    }
} 
export default Reg;