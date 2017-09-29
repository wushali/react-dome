import React,{Component} from 'react';
import '../assets/css/login.css';
import '../assets/css/basic.css';
import {Link} from 'react-router';



class Reg extends Component{
    render(){
        return(
            <div>


                <div className="main">
                    <div className="margin">
                        <div id="logon">
                            <div className="numb">
                                <a className="h4 active" href="#">账号注册</a>
                                {/*<span>|</span>*/}
                                {/*<a className="h4" href="#">扫码登录</a>*/}
                            </div>
                            <div className="zh">
                                {/*<!--账号登录页面-->*/}
                                <div className="bor">
                                    <form action="" >
                                        <input type="text" placeholder="邮箱/手机号码/账号" name="username" />
                                        <input type="password" placeholder="密码" name="password" id="pw" />
                                        <p id="error" >用户名不正确</p>
                                        <p id="error-num" >请输入账号</p>
                                        <input type="button" value="立即注册" id="btn"/>
                                    </form>
                                    <p className="sign">
                                        <span className="sign-l"><Link to="/login">登录账号</Link></span>
                                        {/*<a className="sign-l" href="#">登录账号</a>*/}
                                        <span>|</span>
                                        <span className="sign-l"><Link to="/reg">忘记密码</Link></span>
                                        {/*<a className="sign-l" href="">忘记密码</a>*/}
                                    </p>

                                    {/*<!-- <img className="oelse" src="images/else.jpg" alt="" />-->*/}
                                    {/*<p className="icon">*/}
                                    {/*<a className="ico" href=""><i className="iconfont icon-qq" ></i></a>*/}
                                    {/*<a className="ico" href=""><i className="iconfont icon-sina" ></i></a>*/}
                                    {/*<a className="ico" href=""><i className="iconfont icon-zhifubao" ></i></a>*/}
                                    {/*<a className="ico" href=""><i className="iconfont icon-weixin" ></i></a>*/}
                                    {/*</p>*/}
                                </div>


                            </div>


                        </div>
                    </div>
                </div>







            </div>
        );
    }
}
export default Reg;