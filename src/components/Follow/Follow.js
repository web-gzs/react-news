import React,{Component} from 'react' ;
import List from "../../common/List/List";
import './Follow.css';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asynList from '../../store/actions/asynList';

class Follow extends Component{
    constructor(props){
        super()
        props.get()
       
    }
//    componentDidMount(){
//        this.props.get()
//    }
    render(){
        let {follow} = this.props 
        return (
            <div className="newsList">
                <List list={follow} dataName="follow"/>
            </div>
            )
    }
}
const initMapStateToProps = state =>({
    follow : state.follow
})
const initMapDispatchToprops = dispatch =>({
    get:()=>dispatch(asynList({
        // url:'./data/follow.data',
        url:'/follow',
        type:types.UPDATE_FOLLOW
    }))
})    
export default connect(initMapStateToProps,initMapDispatchToprops)(Follow)
