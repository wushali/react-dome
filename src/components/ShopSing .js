import React,{Component} from 'react';
import {Link} from 'react-router';
const NewList = (props)=>(
  <div className="newsList">
    <table>
      {
        props.listData.map((item,index)=>{
          return (
            <tr key={item.id}>
              <Link
                to={{pathname:'/article/'+item.id,query:{name:props.dataName}}}
              >
                <td className="border-left-none">{item.id}.{item.title}</td>
                <td ><img src="{item.src}" alt=""/></td>
              </Link>
            </tr>
          );
        })
      }
    </table>
  </div>
);

export default NewList;