import React,{Component} from 'react';
import './Column.css';
import List from '../../common/List/List'
import * as types from '../../store/types';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';

class Column extends Component{
    
    componentDidMount(){
       this.props.get()
    }
    render(){
        let {column} = this.props;
        return (
            <div className="newsList">
                <List list={column} dataName="home"></List>
            </div>
        )
    }
}
const initMapStateToProps = state=>({
    column : state.column
});
const initMapDispathToProps = dispatch=>({
    get:()=>dispatch(asynList({
        // url:'/data/index.data',
        url:'/index',
        type:types.UPDATE_COLUMN
    }))
})
export default connect(initMapStateToProps,initMapDispathToProps)(Column);