import React,{Component} from 'react';


class NavMid extends Component{
    constructor(){
        super()
        this.state={
            msg:"夏季时尚套装"
        }
        this.iptChange=this.iptChange.bind(this)
        this.iptPlaceHodler=this.iptPlaceHodler.bind(this)

    }
    iptChange(e){
        this.setState({
            msg:e.target.value
        })
    }
    iptPlaceHodler(){
        this.setState({
            msg:""
        })
    }
    render(){
        return(
            <div>


                <div className="header-mid-wrap">
                    <div className="header-mid clearfix">
                        <a rel="nofollow" href="#" className="logo" title="蘑菇街首页"></a>


                        <div className="normal-search-content">
                            <div className="top_nav_search" id="nav_search_form">
                                <div className="search_inner_box clearfix">

                                    <div className="selectbox" data-v="1">
                                        <span className="selected">搜商品</span>
                                        <ol>
                                            <li className="current">
                                                <a href="#">商品</a>
                                            </li>
                                            <li>
                                                <a href="#">店铺</a>
                                            </li>
                                        </ol>
                                    </div>
                                    <form action="#" method="get" id="top_nav_form">
                                        <input type="text" name="q" className="ts_txt"   onChange={this.iptChange} value={this.state.msg} onClick={this.iptPlaceHodler}/>
                                            <input type="submit" value="搜  索" className="ts_btn"/>
                                    </form>

                                </div>

                                <ul className="ts_hotwords clearfix">
                                    <li><a href="#"> 夏季套装 </a></li>
                                    <li><a href="#"> 凉鞋 </a></li>
                                    <li><a href="#"> T恤 </a></li>
                                    <li><a href="#"> 连衣裙 </a></li>
                                    <li><a href="#"> 运动套装 </a></li>
                                    <li><a href="#"> 斜跨小包 </a></li>
                                    <li><a href="#"> 泳衣 </a></li>
                                    <li><a href="#"> 高跟鞋 </a></li>
                                    <li><a href="#"> 睡衣 </a></li>
                                </ul>
                                <div className="history-search">
                                    <ul className="history-list">
                                        <li>历史记录</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mid_fr">
                            <div className="nav_mogu_qrcode">
                                <img src="src/assets/img/header/top_right_qrcode_300x300.png" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}
export default NavMid;