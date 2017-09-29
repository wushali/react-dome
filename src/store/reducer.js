const reducer=(state=defaultState,action={})=>{
  let {type,payload} = action;
  switch (type){
    case 'INCREMENT':
      // console.log(payload);
      return Object.assign({},state,{
        count:state.count+1
      });
      break;
    case 'DECREMENT':
      return Object.assign({},state,{
        count:state.count-1
      });
      break;
    case 'ODD_INCREMENT':
      return state.count%2==0?Object.assign({},state,{
          count:state.count+1
        }):state;
      break;
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        loading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        loading:false
      });
      break;
    case 'ADD_ITEM':
      return Object.assign({},state,{
        list:state.list.concat(payload)
      });
      break;
    default:
      return state;
  }
};
export default reducer;