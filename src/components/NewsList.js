import React from 'react';

class NewsList extends React.Component {

    constructor(props) {
        super(props);     //继承
        this.state = {
            tabs:[
                {tabName:"上衣",id:1,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:2,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:3,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:4,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:5,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:6,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:7,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:8,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"上衣",id:9,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:10,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:11,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:12,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:13,title:"抢新衣",detail:"时尚套装",sister:"t恤"},
                {tabName:"裙子",id:14,title:"抢新衣",detail:"时尚套装",sister:"t恤"}


            ],
            currentIndex:0,   //指定判断显示与隐藏
        };
        this.tabUnChoiced=this.tabUnChoiced.bind(this)
    }
    componentDidMount() {

    }
    tabChoiced=(id)=>{
        //tab切换到方法
        console.log(id)
        this.setState({
            currentIndex:id
        });
    }
    //tab切换隐形
    tabUnChoiced=()=>{
        this.setState({
            currentIndex:0
        });
    }
    render(){
        var tabList=this.state.tabs.map((res,index)=> {
            var oflag=this.state.currentIndex==res.id?true:false
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            // var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
         return(<li key={index} onMouseOver ={this.tabChoiced.bind(null,res.id)} onMouseOut={this.tabUnChoiced} className= {oflag?"active cloth clearfix":"cloth clearfix"}>
                <a href="#" className="item">{res.tabName}</a>
                <ol>
                    <li>
                        <a href="#">{res.title}</a><span> | </span></li>
                    <li>&nbsp;
                        <a href="#">{res.detail}</a><span> | </span></li>
                    <li>&nbsp;
                        <a href="#">{res.sister}</a>
                    </li>
                </ol>
                 <div>
                     {/*展示显示与隐藏大结构*/}
                     <div className="cloth-more"  key={index} style={{display:oflag?"block":"none"}}>
                         <div className="cloth-wrap"  >

                         <h4><a href="#">新品发布{index+1}</a></h4>
                         <span><a href="#">衬衫 </a></span>
                         <span><a href="#">雪纺衫 </a></span>
                         <span><a href="#">防晒衫 </a></span>
                         <span><a href="#">娃娃衫 </a></span>
                     </div>
                     </div>
                 </div>
            </li>
         )
        });
        return (
            <div className="main-left-nav">
                <ul className="primary_nav_list">
                    {tabList}
                </ul>
                {/*{

                    this.state.tabs.map((item,index)=>
                    {
                        var oflag=this.state.currentIndex==item.id?true:false
                    return(

                        )
                     })
                }*/}

               {/* <div >

                </div>*/}

            </div>
        )
    }
}

export default NewsList;