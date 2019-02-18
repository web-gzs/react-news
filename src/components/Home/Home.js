import React,{Component} from 'react';
import Slider from '../../common/Slider/Slider';
import List   from '../../common/List/List';
import * as types from '../../store/types';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList'

class Home extends Component{
    constructor(props){
        super()
        props.get()
       
    }
    componentDidMount(){
    }
   render(){
       let {home} = this.props
       return (
           <div>
                <Slider/>
                <List list={home} dataName="home"/>
           </div>
       )
   }
}
const initMapStateToProps = state =>({
    home:state.home
})
const initMapDispatchToProps = dispatch =>({
    get:()=>dispatch(asynList({
        // url:'/data/index.data',
        url:'/index',
        type:types.UPDATE_HOME
    }))
})

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);