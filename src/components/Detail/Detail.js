import React,{Component} from 'react';
import head from '../../assets/img/head.png';
import zan from '../../assets/img/zan.png';
import xing from '../../assets/img/xing.png';
import fx from '../../assets/img/fx.png';
import querystring from 'query-string';
import './Detail.css';

import * as types from '../../store/types';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';

class Detail extends Component{
    componentDidMount(){
        let id = this.props.match.params.id-0;
        let dataName = querystring.parse(this.props.location.search).dataName
        this.props.get(id,dataName)
    }
    render(){
        let detail = this.props.detail
        return (
           <div>
               <div className="nav">
                    <ul>
                        <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
                    </ul>
                    </div>
                    <div className="content">
                    <div className="header clear"><h2><img src={detail.author_face?detail.author_face : head} alt=""/></h2><p>作者名字</p></div>
                    <div className="cont">
                        <h3>{detail.title}</h3>
                        <div className="time"><p>2019年12月04日 20:35:58 {detail.time}<span><img src={zan} alt=""/></span></p></div>
                        <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}></div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul>
                        <li className="say"><a href="javascript:;">
                        <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                        <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                        <i><img src={xing} alt=""/></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                        <i><img src={fx} alt=""/></i>
                        </a></li>
                    </ul>
                </div>
           </div>
        )
    }
}

const initMapStateToProps = state =>({
        detail:state.detail
});
const initMapDispatchToProps = dispatch =>({
    get:(id,dataName)=>dispatch(asynList({
        id:id,
        type:types.UPDATE_DETAIL,
        // url:`/data/article_${dataName}.data`
        url:`/article_${dataName}`
    }))
})

export default connect(initMapStateToProps,initMapDispatchToProps)(Detail);