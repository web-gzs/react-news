import React from 'react';
import './List.css';
import {Link} from 'react-router-dom';
const List =({list,dataName})=>(
    
    <div className="newsList">
    <ul>
      {/* {list} */}
      {
        list.map(items=>(
          <li key={items.id}>
            <Link to={{pathname:'/detail/'+items.id,search:'?dataName='+dataName}}>
              <h2>{items.id}.{items.title}</h2>
              <p>{items.detail}</p>
            </Link>
          </li>
        ))
      }
      
    </ul>
  </div>
)
export default List;