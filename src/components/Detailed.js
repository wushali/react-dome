import React,{Component} from 'react';
import Detail from './Detail';

import {createStore} from 'redux';
import defaultState from '../store/state';
import '../assets/css/detaied.css';
import reducer from '../store/reducer';


const store = createStore(reducer,defaultState);//返回store对象
// console.log(store)
class Detailed extends Component{
    constructor(){
        super();
        this.state={
           count:0
        }

    }
    componentDidMount(){
        this.props.store.subscribe(()=>{
            this.setState({
                count:this.props.store.getState().count
            })
        });
    }
    increment(){
        console.log(this)
    this.props.store.dispatch({
        type:'INCREMENT',
         //payload:'负载数据'
    });
    }
    decrement(){
        console.log(this)
        this.props.store.dispatch({
            type:'DECREMENT',
            //payload:'负载数据'
        });
    }


    render(){
        let input
        return(
            <div>


                <div className="wrap clearfix">

                    <div className="left_product clearfix">
                        <Detail/>



                        <div className="info_list">
                            <h1 className="goods-title">森马短袖T恤 女士圆领字母印花条纹宽松T恤</h1>
                            <div className="main-box">
                                <dl>
                                    <dt>价格: </dt>
                                    <dd><span className="o_price">¥89.00</span></dd>
                                </dl>

                                <dl>
                                    <dt>促销价: </dt>
                                    <dd>
                                        <span className="dl_right">评价： 5 累计销量： 23</span>
                                        <span price='89.00' className="price">¥89.00</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>店铺优惠: </dt>
                                    <dd><span className="shopPromotion-info">全店满2件减20元</span></dd>
                                </dl>

                            </div>
                            <div className="goods-prowrap">
                                <dl className="clearfix">
                                    <dt>客服: </dt>
                                    <dd><a target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&amp;touid=htzhanglong&amp;siteid=cntaobao&amp;status=1&amp;charset=utf-8"><img border="0" src="http://amos.alicdn.com/realonline.aw?v=2&amp;uid=htzhanglong&amp;site=cntaobao&amp;s=1&amp;charset=utf-8" alt="点击这里联系我" /></a></dd>
                                </dl>

                                <dl className="clearfix">
                                    <dt>款式: </dt>
                                    <dd>

                                        <ol className="style_list clearfix">
                                            <li data-src="src/assets/images/product_content/s1.jpg_468x468.jpg" >
                                               <img src="src/assets/images/product_content/s1.jpg_100x100.jpg" alt="" />
                                            </li>
                                            <li data-src="src/assets/images/product_content/s2.jpg_468x468.jpg" >
                                                <img src="src/assets/images/product_content/s2.jpg_100x100.jpg" alt="" />
                                            </li>
                                            <li data-src="src/assets/images/product_content/s3.jpg_468x468.jpg" >
                                                <img src="src/assets/images/product_content/s3.jpg_100x100.jpg" alt="" />
                                            </li>

                                        </ol>
                                    </dd>
                                </dl>

                                <dl className="clearfix">
                                    <dt>数量: </dt>
                                    <dd>
                                        <div id="goods_num" className="goods-num fl">
                                            <input type="button" onClick={this.decrement.bind(this) } value="-" className="num-reduce" />
                                            {/*<span className="num-reduce">-</span>*/}
                                            {this.state.count}
                                            {/*<input className="num-input" type="text" value="1" />*/}
                                                <input type="button" onClick={this.increment.bind(this) } value="+" className="num-add " />
                                        </div>

                                    </dd>
                                </dl>
                            </div>



                            <div className="button" id="addCart">
                                加入购物车
                            </div>
                            <br/>
                            {/*{this.props.params.aid}/{this.props.location.query.a}/{this.props.location.pathname}*/}

                            <div className="data">


                            </div>
                        </div>
                    </div>


                    <div className="right_product">


                    </div>



                </div>




                {/*<!--购物车-->*/}
                <div className="m-sidebar">
                    <div className="cart">
                        <i id="end"></i>
                        <span>购物车</span>
                    </div>
                </div>





            </div>
        );
    }
}
export default   Detailed;