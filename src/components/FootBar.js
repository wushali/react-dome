import React,{Component} from 'react';




class FootBar extends Component{
    render(){
        return(
            <div>

                {/*<!--footer-->*/}
                <div className="footer-wrap">
                    <div className="footer">
                        <div className="footer-top clearfix">
                            <div className="top-left">
                                <a href="#"><img src="src/assets/img/upload_ifrwinlcgfrdcyteg4zdambqhayde_152x38.png"/></a>
                                <p> 营业执照注册号：<a href="#">330106000129004</a></p>
                                <p>增值电信业务经营许可证：<a href="#">浙B2-20110349</a></p>
                                <p><a href="#"> 浙公网安备 33010602002329号</a></p>
                                <p>©2016 Mogujie.com 杭州卷瓜网络有限公司</p>
                            </div>
                            <div className="top-right">
                                <ul className="foot-link-list">
                                    <li><h4>公司</h4></li>
                                    <li><a href="#">关于我们</a></li>
                                    <li><a href="#">招聘信息</a></li>
                                    <li><a href="#">联系我们</a></li>
                                </ul>
                                <ul className="foot-link-list">
                                    <li><h4>消费者</h4></li>
                                    <li><a href="#">消费者服务</a></li>
                                    <li><a href="#">意见反馈</a></li>
                                    <li><a href="#">手机版下载</a></li>
                                </ul>
                                <ul className="foot-link-list">
                                    <li><h4>商家</h4></li>
                                    <li><a href="#">商家入驻</a></li>
                                    <li><a href="#">商家后台</a></li>
                                    <li><a href="#">蘑菇商学院</a></li>
                                    <li><a href="#">商家社区</a></li>
                                </ul>
                                <ul className="foot-link-list link-safe">
                                    <li><h4>权威认证</h4></li>
                                    <li>
                                        <a href="#" className="pc"></a>
                                        <a href="#" className="pa"></a>
                                        <a href="#" className="kx"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <ul className="w-links clearfix">
                                <li>友情链接</li>
                                <li><a href="#">蘑菇街游戏</a></li>
                                <li><a href="#">淘粉吧</a></li>
                                <li><a href="#">穿衣搭配</a></li>
                                <li><a href="#">蘑菇街男装</a></li>
                                <li><a href="#">蘑菇街鞋子</a></li>
                                <li><a href="#">蘑菇街包包</a></li>
                                <li><a href="#">QQ钱包</a></li>
                                <li><a href="#">家具网</a></li>
                                <li><a href="#">时尚品牌网</a></li>
                                <li><a href="#">装修</a></li>
                                <li><a href="#">蘑菇街母婴</a></li>
                                <li><a href="#">衣联网</a></li>
                                <li><a href="#">播视网视频</a></li>
                                <li><a href="#">慧聪网</a></li>
                            </ul>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}
export default FootBar;