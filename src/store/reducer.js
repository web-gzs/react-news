//纯函数  不可改输入 ， 输出可控 ， 必输出；
//reducer  处理业务逻辑 ， 拷贝后将新的state返回（return），负责获取state；
import * as types from './types'
const reducer = (state,{type,payload})=>{
    // console.log(state,action)
    switch (type) {
        case types.VIEW_NAV:
            return {
                ...state,
                bNav:payload
            };
        case types.VIEW_FOOT:
            return {
                ...state,
                bFoot:payload
            };
        case types.VIEW_LOADING:
            return {
                ...state,
                bLoading:payload
            };
        case types.UPDATE_DETAIL:
            return {
                ...state,
                detail:payload.data[payload.id-1]
            }
        case types.UPDATE_FOLLOW:
            return {
                ...state,
                follow:payload
            }
        case types.UPDATE_HOME:
            return {
                ...state,
                home:payload
            }
        case types.UPDATE_COLUMN:
            return {
                    ...state,
                    column:payload
                }
        case types.CHECK_USER:
            return {
                ...state,
                user:payload
        }             
        default:
            return state
    }


}
export default reducer