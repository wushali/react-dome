import React,{Component} from 'react';
import {Link} from 'react-router';



class NavBar extends Component{
    render(){
        return(
            <div>

                <div className="header-wrap">
                    <div className="header clearfix">
                        <a rel="nofollow" href="#" className="home">蘑菇街首页</a>
                        <ul className="header_top-list">
                            <li className="s1 show-nologin">
                                <Link to="/login">登录</Link>
                                <Link to="/reg">注册</Link>
                                {/*<a rel="nofollow" href="#">注册</a>*/}
                                {/*<a rel="nofollow" href="#">登录</a>*/}
                            </li>
                            <li className="s1 myorder has_line">
                                <a href="#" className="text display_u" ref="nofollow">我的订单</a>
                            </li>
                            <li className="s1 has_line shopping_cart_v2">
                                <a className="cart_info_wrap" href="#" ref="nofollow">购物车</a>
                                <div className="empty_cart">购物车里没有商品！</div>
                            </li>
                            <li className="s1 has_line custom_item" id="custom_item">
                                <a rel="nofollow" href="#" className="custom_item_text">客户服务</a>
                                <span className="item_icon"></span>
                                <ol className="ext_mode">
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">消费者服务</a>
                                    </li>
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">商家服务</a>
                                    </li>
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">规则中心</a>
                                    </li>
                                </ol>
                            </li>
                            <li className="s1 has_line myshop" id="myshop">
                                <a href="#" ref="nofollow" className="myshop-text">我的小店</a>
                                <span className="item_icon"></span>
                                <ol className="ext_mode">
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">管理后台</a>
                                    </li>
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">商家社区</a>
                                    </li>
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">商家培训</a>
                                    </li>
                                    <li className="s2">
                                        <a target="_blank" rel="nofollow" href="#">市场入驻</a>

                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}
export default NavBar;