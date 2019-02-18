import React,{Component} from 'react';

import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Error  from '../common/Error/Error';
import Loading from '../common/Loading/loading'

import Auth from '../guard/Auth'

import Home from  './Home/Home';
import Follow from './Follow/Follow';
import Column from './Column/Column';
import Detail from './Detail/Detail';
import Login from  './Login/Login';
import User from   './User/User';
import Reg from     './Reg/Reg' ;    
import {Route,Redirect,Switch} from 'react-router-dom';

import * as types from '../store/types';
import {connect} from 'react-redux'


class App extends Component{  
    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname
        this.watchRouter(path)
        console.log(path)
        window.scrollTo(0,0)
    }
    // componentDidMount(){
    //     let path = this.props.location.pathname;
    //     this.watchRouter(path)
    //     console.log(this.watchRouter)
    // }
    watchRouter(path){
        let {VIEWNAV,VIEWFOOT} = this.props
        if(/home|follow|column/.test(path)){
            VIEWNAV(true);VIEWFOOT(true)
        }
        if(/user/.test(path)){
            VIEWNAV(false);VIEWFOOT(true)
        }
        if(/login|reg|detail/.test(path)){
            // this.setState({bNav:false,bFoot:false})
            VIEWNAV(false);VIEWFOOT(false)

        }
    }
    render(){
        let {bNav,bFoot,bLoading} = this.props
        return (
            <>
                {bLoading && <Loading/>}
                {bNav && <Header/>}
                
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/column' component={Column}/>
                    
                    {/* <Route path='/user' component={User}/> */}
                    <Auth path='/user' component={User}/>

                    <Route path='/login' component={Login}/>
                    <Route path='/reg' component={Reg}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Redirect exact from='/' to='/home'/>
                    <Route component={Error}/>
                </Switch>
                {bFoot && <Footer/>}
           </>
        )
    }
}
const initMApStateToPrps = state=>({
    bNav :state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading
});
const initDispatchToProps = dispatch=>({
    VIEWNAV:(b1)=>dispatch({type:types.VIEW_NAV,payload:b1}),
    VIEWFOOT:(b1)=>dispatch({type:types.VIEW_FOOT,payload:b1})
})
export default connect(initMApStateToPrps,initDispatchToProps)(App);
