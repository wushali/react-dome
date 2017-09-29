import React,{Component} from 'react';




class RightBar extends Component{
    render(){
        return(
            <div>


                {/*<!--右侧悬浮-->*/}
                <div className="right-stock">
                    <div id="stock-blank">

                    </div>
                    <div className="shopping-bar">
                        <a href="#">
                            <i className="shopping-icon"></i>
                            <span>购物车</span>
                        </a>
                    </div>
                    <div className="other-bar">
                        <ul>
                            <li className="coupon">
                                <a href="#">
                                    <i className="coupon-icon"></i>
                                    <span>优惠券</span>
                                </a>
                            </li>
                            <li className="wallet">
                                <a href="#">
                                    <i className="wallet-icon"></i>
                                    <span>钱包</span>
                                </a>
                            </li>
                            <li className="browserlog">
                                <a href="#">
                                    <i className="browserlog-icon"></i>
                                    <span>足迹</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="shopping-bar top-bar">
                        <a href="#">
                            <i className="shopping-icon top-icon"></i>
                            <span></span>
                        </a>
                    </div>
                </div>





            </div>
        );
    }
}
export default  RightBar;